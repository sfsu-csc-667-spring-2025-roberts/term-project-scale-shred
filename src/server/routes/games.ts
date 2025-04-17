import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("/:gameId", (request: Request, response: Response) => {
  const { gameId } = request.params;
  response.render("games", { gameId });
});

export default router;
