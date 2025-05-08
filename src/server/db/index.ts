import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

import User from "./users";
import Game from "./games";

export { User, Game };

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});
