import express from "express";
import { Request, Response } from "express";
import { ChatMessage } from "global";

const router = express.Router();

// "/:id" means to treat that as a variable to access id URL
router.post("/:roomId", (request: Request, response: Response) => {
  const { message } = request.body;
  const id = request.params.roomId;
  const io = request.app.get("io");

  const broadcastMessage: ChatMessage = {
    message,
    // @ts-ignore
    sender: request.session.user.email,
    // @ts-ignore
    gravatar: request.session.user.gravatar,
    timestamp: Date.now(),
  };

  console.log({ broadcastMessage });

  io.emit(`chat-message:${id}`, broadcastMessage);

  response.status(200).send();
});

export default router;
