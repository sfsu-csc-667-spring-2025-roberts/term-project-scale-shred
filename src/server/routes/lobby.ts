import express from "express";
import { Request, Response } from "express";
import db from "../db/connection"; // Make sure this is the correct import for your DB connection

const router = express.Router();

router.get("/", async (_request: Request, response: Response) => {
  // Fetch all games from the game_instance table
  const games = await db.any("SELECT * FROM game_instance");
  response.render("lobby", { title: "Lobby", games });
});

export default router;
