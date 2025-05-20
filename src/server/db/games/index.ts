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
    userId,
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

const getGameDetails = async (gameId: string) => {
  return db.oneOrNone<{
    creator_user_id: number;
    min_players: number;
    player_count: string;
  }>(
    `
    SELECT gi.creator_user_id, gi.min_players, COUNT(gu.user_id) AS player_count
    FROM game_instance gi
    LEFT JOIN game_users gu ON gi.id = gu.game_id
    WHERE gi.id = $1
    GROUP BY gi.id, gi.creator_user_id, gi.min_players
    `,
    [gameId],
  );
};

const getPlayersInGame = async (gameId: string) => {
  return db.any<{ username: string }>(
    `
    SELECT u.username
    FROM game_users gp
    JOIN users u ON gp.user_id = u.id
    WHERE gp.game_id = $1
    `,
    [gameId],
  );
};

const updateGameStatusToInProgress = async (gameInstanceId: string) => {
  return db.none(
    `
    UPDATE game_instance
    SET status = 'in_progress'
    WHERE id = $1
    `,
    [gameInstanceId],
  );
};

const getPlayerIdsInGame = async (gameInstanceId: string) => {
  return db.any<{ user_id: number }>(
    `
    SELECT user_id
    FROM game_users
    WHERE game_id = $1
    `,
    [gameInstanceId],
  );
};

const createNewGameRecord = async (
  gameInstanceId: string,
  currentPlayerId: number,
) => {
  return db.one<{ id: number }>(
    `
    INSERT INTO game (game_instance_id, current_player_id, /* other initial game state columns */ created_at)
    VALUES ($1, $2, /* initial values */ NOW())
    RETURNING id;
    `,
    [gameInstanceId, currentPlayerId],
  );
};

const deleteGameInstance = async (gameInstanceId: string) => {
  return db.none(
    `
    DELETE FROM game_instance
    WHERE id = $1
    `,
    [gameInstanceId],
  );
};

export default {
  create,
  join,
  leave,
  getGameDetails,
  getPlayersInGame,
  updateGameStatusToInProgress,
  getPlayerIdsInGame,
  createNewGameRecord,
  deleteGameInstance,
};
