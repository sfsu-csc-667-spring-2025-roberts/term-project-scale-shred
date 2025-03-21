import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  const title = "Scale Shred UNO";
  const name = "Team 12";

  // short for: const thing = { title: title };
  response.render("root", { title, name });
});

export default router;
