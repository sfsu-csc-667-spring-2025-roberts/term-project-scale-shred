import db from "../connection";
import { ADD_PLAYER, CONDITIONALLY_JOIN_SQL, CREATE_SQL } from "./sql";

const create = async (
  name: string,
  minPlayers: number,
  maxPlayers: number,
  password: string,
  userId: number,
) => {
  const { id: gameId } = await db.one<{ id: number }>(CREATE_SQL, [
    name,
    minPlayers,
    maxPlayers,
    password,
  ]);

  await db.none(ADD_PLAYER, [gameId, userId]);

  return gameId;
};

const join = async (userId: number, gameId: number, password: string = "") => {
  const { playerCount } = await db.one<{ playerCount: number }>(
    CONDITIONALLY_JOIN_SQL,
    {
      gameId,
      userId,
      password: password.trim(),
    },
  );

  return playerCount;
};

const leave = async (userId: number, gameId: number): Promise<number> => {
  try {
    await db.none(
      `
      DELETE FROM game_users
      WHERE user_id = $1 AND game_id = $2;
      `,
      [userId, gameId],
    );

    const { playerCount } = await db.one<{ playerCount: number }>(
      `
      SELECT COUNT(*) AS playerCount
      FROM game_users
      WHERE game_id = $1;
      `,
      [gameId],
    );

    return playerCount;
  } catch (error) {
    console.error("Error leaving game:", error);
    throw error;
  }
};

export default { create, join, leave };
