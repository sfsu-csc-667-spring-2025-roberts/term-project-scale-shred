import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  const title = "Uno Website";
  const name = "Scale Shred";

  // short for: const thing = { title: title };
  response.render("root", { title, name });
});

export default router;
