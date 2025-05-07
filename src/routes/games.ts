import { Router } from "express";
import { createGame, updateGame, prepareGame } from "../server/db/games";

const router = Router();

// POST request to create a new game
router.post("/", async (req, res) => {
  const { name, minPlayers, maxPlayers, password } = req.body;

  try {
    const game = await createGame(
      name,
      minPlayers,
      maxPlayers,
      password || null,
    );
    res.status(201).json({ success: true, game });
  } catch (err) {
    const error = err as Error;
    console.error("Error creating game:", error.message, error.stack);
    res.status(500).json({ success: false, error: "Failed to create game" });
  }
});

// POST request to add a player to a game
router.post("/:gameId/join", async (req, res) => {
  const { gameId } = req.params;
  const { playerName } = req.body;

  try {
    const game = await updateGame(gameId, playerName);
    res.status(200).json({ success: true, game });
  } catch (err) {
    const error = err as Error;
    console.error("Error starting game:", error.message, error.stack);
    res.status(500).json({ success: false, error: "Failed to start game." });
  }
});

// POST request to start the game and save state
router.post("/game/:gameId/:checksum", async (req, res) => {
  const { gameId, checksum } = req.params;
  const { players, deck, topCard, activePlayer } = req.body;

  try {
    await prepareGame({
      gameId,
      checksum,
      players,
      deck,
      topCard,
      activePlayer,
    });

    res.status(200).json({ success: true, message: "Game started." });
  } catch (err) {
    console.error("Error starting game:", err);
    res.status(500).json({ success: false, error: "Failed to start game." });
  }
});

export default router;
