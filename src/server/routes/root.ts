import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", (request, response) => {
  const title = "Scale Shred UNO";
  const name = "Team 12";

  response.render("root", { title, name });
});

router.get("/cards", (request, response) => {
  const title = "Scale Shred UNO";
  const name = "Team 12";

  response.render("cards", { title, name });
});

export default router;
