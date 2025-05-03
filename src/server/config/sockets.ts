import type { Express } from "express";
import type { Server } from "socket.io";
import { sessionMiddleware } from "./session";

const configSockets = (io: Server, app: Express) => {
  app.set("io", io);

  io.engine.use(sessionMiddleware);

  io.on("connection", (socket) => {
    // @ts-ignore
    const { id, user } = socket.request.session;

    if (user) {
      console.log(
        `User [${user.id}] Connected: ${user.username} with session id ${id}`,
      );
      socket.join(user.id);

      socket.on("disconnect", () => {
        console.log(
          `User [${user.id}] Disconnected: ${user.username} with session id ${id}`,
        );
      });
    } else {
      console.log(`Anon Connected with session id ${id}`);
      socket.on("disconnect", () => {
        console.log(`Anon Disconnected with session id ${id}`);
      });
    }
  });
};

export default configSockets;
