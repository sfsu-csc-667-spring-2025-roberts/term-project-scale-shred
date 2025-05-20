import express from "express";
import { Request, Response } from "express";

import { Game } from "../db";
import db from "../db/connection";

const router = express.Router();

router.get("/:gameId", async (request: Request, response: Response) => {
  const { gameId } = request.params;

  try {
    // @ts-ignore
    const loggedInUserId = request.session?.user?.id;

    // Fetch game details, including the creator_user_id and player count
    const gameDetails = await db.oneOrNone(
      `
      SELECT gi.creator_user_id, gi.min_players, COUNT(gu.user_id) AS player_count
      FROM game_instance gi
      LEFT JOIN game_users gu ON gi.id = gu.game_id
      WHERE gi.id = $1
      GROUP BY gi.id, gi.creator_user_id, gi.min_players
      `,
      [gameId],
    );

    if (!gameDetails) {
      return response.redirect("/lobby?error=Game not found.");
    }

    const isCreator = loggedInUserId === gameDetails.creator_user_id;
    const canStartGame =
      isCreator && gameDetails.player_count >= gameDetails.min_players;

    // Gathers player data to output
    const players = await db.any(
      `
      SELECT u.username
      FROM game_users gp
      JOIN users u ON gp.user_id = u.id
      WHERE gp.game_id = $1
      `,
      [gameId],
    );

    response.render("games", {
      gameId,
      players,
      isCreator,
      canStartGame,
    });
  } catch (error) {
    console.error("Error fetching game details:", error);
    response.render("games", {
      gameId,
      players: [],
      isCreator: false,
      canStartGame: false,
    });
  }
});

router.post("/create", async (request: Request, response: Response) => {
  // @ts-ignore
  const { id: userId } = request.session.user;
  const { description, minPlayers, maxPlayers, password } = request.body;

  try {
    // Ensure minPlayers and maxPlayers are integers
    const minPlayersInt = parseInt(minPlayers, 10);
    const maxPlayersInt = parseInt(maxPlayers, 10);
    if (isNaN(minPlayersInt) || isNaN(maxPlayersInt)) {
      return response.redirect(
        "/lobby?createError=Player counts must be numbers.",
      );
    }
    const gameId = await Game.create(
      description,
      minPlayersInt,
      maxPlayersInt,
      password,
      userId,
    );
    response.redirect(`/games/${gameId}`);
  } catch (error: any) {
    console.error("Game creation error:", error);
    return response.redirect(
      `/lobby?createError=Could not create game. Please check your input and try again.`,
    );
  }
});

router.post("/start/:gameId", async (request: Request, response: Response) => {
  const { gameId: gameInstanceId } = request.params;

  try {
    await db.none(
      `
      UPDATE game_instance
      SET status = 'in_progress'
      WHERE id = $1
      `,
      [gameInstanceId],
    );

    const players = await db.any(
      `
      SELECT user_id
      FROM game_users
      WHERE game_id = $1
      `,
      [gameInstanceId],
    );

    const newGame = await db.one(
      `
      INSERT INTO game (game_instance_id, current_player_id, /* other initial game state columns */ created_at)
      VALUES ($1, $2, /* initial values */ NOW())
      RETURNING id;
      `,
      [gameInstanceId, players[0].user_id],
    );

    const newGameId = newGame.id;

    // this is where we need to initialize the game state so someone pls hop on this asap

    const io = request.app.get("socketio");

    if (io) {
      io.to(`game-${gameInstanceId}`).emit("game-started", {
        gameId: gameInstanceId,
        newGameId,
      });
      response
        .status(200)
        .send({
          message: "Game started, players will be notified.",
          newGameId,
        });
    } else {
      response.status(500).send({ error: "Socket.IO not initialized." });
    }
  } catch (error) {
    console.error("Error starting game and creating game instance:", error);
    response.status(500).send("Failed to start the game.");
  }
});

router.post("/join/:gameId", async (request: Request, response: Response) => {
  const { gameId } = request.params;
  const { password } = request.body;
  // @ts-ignore
  const { id: userId } = request.session.user;

  try {
    const playerCount = await Game.join(userId, parseInt(gameId), password);
    console.log({ playerCount });
    response.redirect(`/games/${gameId}`);
  } catch (error: any) {
    console.log({ error });
    if (error?.name === "QueryResultError" && error?.code === "0") {
      return response.redirect(
        `/lobby?joinError=Could not join game: wrong password, already joined, or game is full.`,
      );
    }
    response.redirect("/lobby");
  }
});

router.post("/leave/:gameId", async (request: Request, response: Response) => {
  const { gameId } = request.params;
  // @ts-ignore
  const { id: userId } = request.session.user;

  try {
    const remainingPlayers = await Game.leave(userId, parseInt(gameId));
    console.log({ remainingPlayers });
    response.redirect(`/lobby`);
  } catch (error: any) {
    console.log({ error });
    if (error?.message === "User not in game") {
      return response.redirect(
        `/games/${gameId}?leaveError=You were not in this game.`,
      );
    }
    response.redirect("/lobby");
  }
});

router.post("/end/:gameId", async (request: Request, response: Response) => {
  const { gameId: gameInstanceId } = request.params;
  // @ts-ignore

  try {
    const io = request.app.get("socketio");

    if (io) {
      io.to(`game-${gameInstanceId}`).emit("game-ended", {
        gameId: gameInstanceId,
      });
    }

    await db.none(
      `
      DELETE FROM game_instance
      WHERE id = $1
      `,
      [gameInstanceId],
    );

    response.redirect("/lobby");
  } catch (error) {
    console.error("Error ending and deleting game:", error);
    response.status(500).send("Failed to end and delete the game.");
  }
});

export default router;
