export const CREATE_SQL = `
  INSERT INTO game_instance (name, min_players, max_players, password, creator_user_id)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`;

export const ADD_PLAYER = `
INSERT INTO game_users (game_id, user_id)
VALUES ($1, $2)`;

export const CONDITIONALLY_JOIN_SQL = `
INSERT INTO game_users (game_id, user_id)
SELECT $(gameId), $(userId)
WHERE NOT EXISTS (
    SELECT 1
    FROM game_users
    WHERE game_id=$(gameId) AND user_id=$(userId)
)
AND (
    SELECT COUNT(*) FROM game_instance WHERE id=$(gameId) AND password=$(password)
) = 1
AND (
    (
        SELECT COUNT(*) FROM game_users WHERE game_id=$(gameId)
    ) < (
        SELECT max_players FROM game_instance WHERE id=$(gameId)
    )
)
RETURNING (
    SELECT COUNT(*) AS playerCount FROM game_users WHERE game_id=$(gameId)
)
`;

export const USER_LEAVE = `
DELETE FROM game_users
WHERE user_id = $1 AND game_id = $2;
`;

export const UPDATE_COUNT = `
SELECT COUNT(*) AS playerCount
FROM game_users
WHERE game_id = $1;
`;

export const GET_DETAILS = `
SELECT gi.creator_user_id, gi.min_players, COUNT(gu.user_id) AS player_count
FROM game_instance gi
LEFT JOIN game_users gu ON gi.id = gu.game_id
WHERE gi.id = $1
GROUP BY gi.id, gi.creator_user_id, gi.min_players
`;

export const GET_PLAYERS = `
SELECT u.username
FROM game_users gp
JOIN users u ON gp.user_id = u.id
WHERE gp.game_id = $1
`;

export const UPDATE_STATUS = `
UPDATE game_instance
SET status = 'in_progress'
WHERE id = $1
`;

export const GET_PLAYER_ID = `
SELECT user_id
FROM game_users
WHERE game_id = $1
`;

export const CREATE_GAME = `
INSERT INTO game (game_instance_id, current_player_id, /* other initial game state columns */ created_at)
VALUES ($1, $2, /* initial values */ NOW())
RETURNING id;
`;

export const DELETE_GAME_INSTANCE = `
DELETE FROM game_instance
WHERE id = $1
`;

export const INIT_GAME = `
  UPDATE games
  SET
    status = 'in_progress',
    direction = 'clockwise',
    current_turn = 1,
    top_card_id = $1,
    game_mode_id = $2
  WHERE id = $3
  RETURNING *;
`;
