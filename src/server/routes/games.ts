import express from "express";
import { Request, Response } from "express";

import { Game } from "../db";

const router = express.Router();

router.get("/:gameId", async (request: Request, response: Response) => {
  const { gameId } = request.params;

  try {
    // @ts-ignore
    const loggedInUserId = request.session?.user?.id;

    // Fetch game details, including the creator_user_id and player count
    const gameDetails = await Game.getGameDetails(gameId);

    if (!gameDetails) {
      return response.redirect("/lobby?error=Game not found.");
    }

    const isCreator = loggedInUserId === gameDetails.creator_user_id;
    const canStartGame =
      isCreator &&
      parseInt(gameDetails.player_count, 10) >= gameDetails.min_players;

    const players = await Game.getPlayersInGame(gameId);

    response.render("games", {
      gameId,
      players,
      isCreator,
      canStartGame,
      roomId: gameId,
    });
  } catch (error) {
    console.error("Error fetching game details:", error);
    response.render("games", {
      gameId,
      players: [],
      isCreator: false,
      canStartGame: false,
      roomId: gameId,
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
    await Game.updateGameStatusToInProgress(gameInstanceId);

    const playerIds = await Game.getPlayerIdsInGame(gameInstanceId);
    const firstPlayerId = playerIds[0]?.user_id;

    if (firstPlayerId) {
      const newGame = await Game.createNewGameRecord(
        gameInstanceId,
        firstPlayerId,
      );
      const newGameId = newGame.id;

      const io = request.app.get("socketio");

      if (io) {
        io.to(`game-${gameInstanceId}`).emit("game-started", {
          gameId: gameInstanceId,
          newGameId,
        });
        response.redirect(`/inplay/${gameInstanceId}`);
      } else {
        response.status(500).send({ error: "Socket.IO not initialized." });
      }
    } else {
      console.error("No players found in the game instance.");
      response.redirect(`/games/${gameInstanceId}?error=No players in game.`);
    }
  } catch (error) {
    console.error("Error starting game and creating game instance:", error);
    response.redirect(
      `/games/${gameInstanceId}?error=Failed to start the game.`,
    );
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

    await Game.deleteGameInstance(gameInstanceId);

    response.redirect("/lobby");
  } catch (error) {
    console.error("Error ending and deleting game:", error);
    response.status(500).send("Failed to end and delete the game.");
  }
});

export default router;
