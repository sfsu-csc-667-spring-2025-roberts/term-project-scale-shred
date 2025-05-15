import express from "express";
import { Request, Response } from "express";

import { Game } from "../db";
import db from "../db/connection";

const router = express.Router();

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
    // Optionally provide the error message to the user
    return response.redirect(
      `/lobby?createError=Could not create game. Please check your input and try again.`,
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
    // Handle no data returned from query (join failed)
    if (error?.name === "QueryResultError" && error?.code === "0") {
      // If you use connect-flash or similar, you can set a flash message here
      // request.flash('error', 'Could not join game: wrong password, already joined, or game is full.');
      // For now, just send a query param as fallback
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

router.get("/:gameId", async (request: Request, response: Response) => {
  const { gameId } = request.params;

  try {
    //gathers player data to output
    const players = await db.any(
      `
      SELECT u.username
      FROM game_users gp
      JOIN users u ON gp.user_id = u.id
      WHERE gp.game_id = $1
    `,
      [gameId],
    );

    response.render("games", { gameId, players }); // Passes the players data
  } catch (error) {
    console.error("Error fetching game players:", error);
    response.render("games", { gameId, players: [] });
  }
});

export default router;
