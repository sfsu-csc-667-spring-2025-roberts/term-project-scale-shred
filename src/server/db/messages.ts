import { pool } from "./index";

export async function saveMessage(
  gameId: string,
  sender: string,
  gravatar: string,
  message: string,
) {
  await pool.query(
    `INSERT INTO messages (game_id, sender, gravatar, message, created_at)
     VALUES ($1, $2, $3, $4, NOW())`,
    [gameId, sender, gravatar, message],
  );
}

export async function getMessages(gameId: string) {
  const result = await pool.query(
    `SELECT sender, gravatar, message, created_at
     FROM messages
     WHERE game_id = $1
     ORDER BY created_at ASC`,
    [gameId],
  );
  return result.rows;
}
