import * as path from "path";
import * as http from "http";

import express from "express";
import httpErrors from "http-errors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";

import dotenv from "dotenv";
dotenv.config();

import * as config from "./config";
import * as routes from "./routes";
import * as middleware from "./middleware";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(middleware.room);
config.liveReload(app);
config.session(app);
config.sockets(io, app);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use(express.static(path.join(process.cwd(), "public")));
app.set("views", path.join(process.cwd(), "src", "server", "views"));
app.set("view engine", "ejs");

app.use("/", routes.root);
app.use("/test", routes.test);
app.use("/auth", routes.auth);
app.use("/chat", middleware.auth, routes.chat);
app.use("/lobby", middleware.auth, routes.lobby);
app.use("/games", middleware.auth, routes.games);

app.use((_request, _response, next) => {
  next(httpErrors(404));
});

// Server includes the socket.io implementation, which will actually talk to the server
// with all necessary sessions, cookies, auths, configs, and the like.
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
