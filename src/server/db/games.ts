import { pool } from "./index";

export async function createGame(
  name: string,
  minPlayers: number,
  maxPlayers: number,
  password: string | null,
) {
  const result = await pool.query(
    `INSERT INTO games (name, min_players, max_players, password)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, minPlayers, maxPlayers, password],
  );
  return result.rows[0];
}

export async function updateGame(gameId: string, playerName: string) {
  const result = await pool.query(
    `UPDATE games
     SET players = array_append(players, $1)
     WHERE id = $2
     RETURNING *`,
    [playerName, gameId],
  );
  return result.rows[0];
}

export async function prepareGame({
  gameId,
  checksum,
  players,
  deck,
  topCard,
  activePlayer,
}: {
  gameId: string;
  checksum: string;
  players: string[];
  deck: string[];
  topCard: string;
  activePlayer: string;
}) {
  const result = await pool.query(
    `UPDATE games
     SET checksum = $1,
         players = $2,
         deck = $3,
         top_card = $4,
         active_player = $5
     WHERE id = $6
     RETURNING *`,
    [checksum, players, deck, topCard, activePlayer, gameId],
  );
  return result.rows[0];
}

export default {
  createGame,
  updateGame,
  prepareGame,
};
