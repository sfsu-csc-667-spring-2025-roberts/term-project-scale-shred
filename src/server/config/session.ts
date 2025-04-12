import type { Express, RequestHandler } from "express";

import session from "express-session";
import connectPgSimple from "connect-pg-simple";

const configureSession = (app: Express) => {
  const store = new (connectPgSimple(session))({
    createTableIfMissing: true,
  });

  const middleware = session({
    store,
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: false,
  });

  app.use(middleware);
};

export default configureSession;
