import express from "express";
import { Request, Response } from "express";

import { User } from "../db";

const router = express.Router();
const baseTitle: string = "Scale Shred UNO";

router.get("/register", async (_request: Request, response: Response) => {
  const title = `${baseTitle} | Register`;
  response.render("auth/register", { title });
});

router.post("/register", async (request: Request, response: Response) => {
  const { email, username, password } = request.body;

  try {
    const user = await User.register(email, username, password);
    const title = "Scale Shred UNO";

    // @ts-ignore
    request.session.user = user;
    response.redirect("/lobby");
  } catch (error) {
    console.error("Error registering user:", error);
    const title = `${baseTitle} | Register`;
    response.render("auth/register", {
      title,
      error: "Invalid credentials.",
    });
  }
});

router.get("/login", async (_request: Request, response: Response) => {
  const title = `${baseTitle} | Login`;
  response.render("auth/login", { title });
});

router.post("/login", async (request: Request, response: Response) => {
  const { identifier, password } = request.body;

  try {
    const user = await User.login(identifier, password);

    // @ts-ignore
    request.session.user = user;
    response.redirect("/lobby");
  } catch (error) {
    const title = `${baseTitle} | Login`;
    response.render("auth/login", {
      title,
      error: "Invalid email or password.",
    });
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
