import express from "express";
import gamesRouter from "../routes/games";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/games", gamesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
