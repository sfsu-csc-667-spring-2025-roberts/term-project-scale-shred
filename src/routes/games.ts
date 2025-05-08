import express from "express";
import { Request, Response } from "express";

import { Game } from "../db";
import { prepareGame } from "../db/games";
import { getPlayersInGame } from "../db";

const router = express.Router();

router.post("/create", async (request: Request, response: Response) => {
  // @ts-ignore
  const { id: userId } = request.session.user;
  const { description, minPlayers, maxPlayers, password } = request.body;

  try {
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

router.get("/:gameId", (request: Request, response: Response) => {
  const { gameId } = request.params;
  response.render("games", { gameId });
});

router.post("/game/:gameId/:checksum", async (req: Request, res: Response) => {
  const { gameId, checksum } = req.params;

  try {
    const suits = ["red", "green", "blue", "yellow"];
    const values = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "skip",
      "reverse",
      "draw2",
    ];
    const wilds = ["wild", "wild_draw4"];
    let deck: string[] = [];

    suits.forEach((color) => {
      values.forEach((value) => {
        const card = `${color}_${value}`;
        deck.push(card);
        if (value !== "0") deck.push(card);
      });
    });

    for (let i = 0; i < 4; i++) deck.push(...wilds);
    deck = deck.sort(() => Math.random() - 0.5);

    const players = await getPlayersInGame(parseInt(gameId));
    const topCard = deck.pop();
    const activePlayer = players[0]?.user_id;

    await prepareGame(parseInt(gameId), {
      deck,
      topCard,
      activePlayer,
      checksum,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error preparing game:", err);
    res.status(500).json({ error: "Game preparation failed" });
  }
});

export default router;
