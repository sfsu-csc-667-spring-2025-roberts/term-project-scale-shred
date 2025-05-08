import dotenv from "dotenv";
dotenv.config();

export default {
  databaseUrl: `postgres://${process.env.DB_USER}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  migrationsTable: "pgmigrations",
  dir: "src/server/db/migrations",
};
