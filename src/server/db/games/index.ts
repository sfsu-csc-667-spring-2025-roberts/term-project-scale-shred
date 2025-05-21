import db from "../connection";
import {
  ADD_PLAYER,
  CONDITIONALLY_JOIN_SQL,
  CREATE_SQL,
  USER_LEAVE,
  UPDATE_COUNT,
  GET_DETAILS,
  GET_PLAYERS,
  UPDATE_STATUS,
  GET_PLAYER_ID,
  CREATE_GAME,
  DELETE_GAME_INSTANCE,
} from "./sql";

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
    await db.one(USER_LEAVE, [userId, gameId]);

    const { playerCount } = await db.one<{ playerCount: number }>(
      UPDATE_COUNT,
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
  }>(GET_DETAILS, [gameId]);
};

const getPlayersInGame = async (gameId: string) => {
  return db.any<{ username: string }>(GET_PLAYERS, [gameId]);
};

const updateGameStatusToInProgress = async (gameInstanceId: string) => {
  return db.none(UPDATE_STATUS, [gameInstanceId]);
};

const getPlayerIdsInGame = async (gameInstanceId: string) => {
  return db.any<{ user_id: number }>(GET_PLAYER_ID, [gameInstanceId]);
};

const createNewGameRecord = async (
  gameInstanceId: string,
  currentPlayerId: number,
) => {
  return db.one<{ id: number }>(CREATE_GAME, [gameInstanceId, currentPlayerId]);
};

const deleteGameInstance = async (gameInstanceId: string) => {
  return db.none(DELETE_GAME_INSTANCE, [gameInstanceId]);
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
