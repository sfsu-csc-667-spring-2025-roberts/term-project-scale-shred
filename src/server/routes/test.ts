import express from "express";
import { Request, Response } from "express";
import type { Server } from "socket.io";

import db from "../db/connection";

const router = express.Router();

router.get("/", async (_request: Request, response: Response) => {
  try {
    await db.none("INSERT INTO test_table (test_string) VALUES ($1)", [
      `Test string ${new Date().toISOString()}`,
    ]);

    response.json(await db.any("SELECT * FROM test_table"));
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/promise_version", (request: Request, response: Response) => {
  db.none("INSERT INTO test_table (test_string) VALUES ($1)", [
    `Test string ${new Date().toISOString()}`,
  ])
    .then(() => {
      return db.any("SELECT * FROM test_table");
    })
    .then((result) => {
      response.json(result);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ error: "Internal server error" });
    });
});

router.get("/socket", (request: Request, response: Response) => {
  const io: Server = request.app.get("io");

  // normally we ask for user session, but we can ignore this error for brevity of outputs
  // remove those later
  // @ts-ignore
  io.emit("test", { user: request.session.user });
  // @ts-ignore
  io.to(request.session.user.id).emit("test", { secret: "hi" });

  response.json({ message: "Socket event emitted " });
});

export default router;
