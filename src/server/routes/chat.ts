import express from "express";
import { Request, Response } from "express";
import session from "express-session";
import { saveMessage, getMessages } from "../db/messages";

declare module "express-session" {
  interface SessionData {
    user?: {
      email: string;
      gravatar: string;
    };
  }
}

const router = express.Router();

type ChatMessage = {
  message: string;
  sender: string;
  gravatar: string;
  timestamp: number;
};

router.post("/:roomId", async (req: Request, res: Response) => {
  const { message } = req.body;
  const { roomId } = req.params;
  const io = req.app.get("io");

  const user = req.session.user;
  if (!user) {
    return res.status(401).send("Unauthorized: user not in session.");
  }

  const chatMessage: ChatMessage = {
    message,
    sender: user.email,
    gravatar: user.gravatar,
    timestamp: Date.now(),
  };

  io.emit(`chat-message:${roomId}`, chatMessage);
  await saveMessage(roomId, user.email, user.gravatar, message);

  res.status(200).send();
});

router.get("/:roomId", async (req: Request, res: Response) => {
  const { roomId } = req.params;
  try {
    const messages = await getMessages(roomId);
    res.json(messages);
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    res.status(500).send("Failed to fetch messages.");
  }
});

export default router;
