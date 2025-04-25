import express from "express";
import { Request, Response } from "express";

import { User } from "../db";

const router = express.Router();

router.get("/register", async (_request: Request, response: Response) => {
  response.render("auth/register", { title: "Register" });
});

router.post("/register", async (request: Request, response: Response) => {
  const { email, username, password } = request.body;

  try {
    const user = await User.register(email, username, password);

    // @ts-ignore
    request.session.user = user;
    response.redirect("/lobby");
  } catch (error) {
    console.error("Error registering user:", error);
    response.render("auth/register", {
      title: "Register",
      error: "Invalid credentials.",
    });
  }
});

router.get("/login", async (_request: Request, response: Response) => {
  response.render("auth/login", { title: "Login" });
});

router.post("/login", async (request: Request, response: Response) => {
  const { identifier, password } = request.body;

  try {
    const user = await User.login(identifier, password);

    // @ts-ignore
    request.session.user = user;
    response.redirect("/lobby");
  } catch (error) {
    response.render("auth/login", { error: "Invalid email or password." });
  }
});

router.get("/logout", async (request: Request, response: Response) => {
  // @ts-ignore
  request.session.user = null;
  request.session.destroy(() => {
    // intention no op for now
  });

  response.redirect("/");
});

export default router;
