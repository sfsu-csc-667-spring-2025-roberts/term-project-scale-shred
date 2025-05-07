CREATE TABLE IF NOT EXISTS player_hands (
  id SERIAL PRIMARY KEY,
  game_id UUID REFERENCES games(game_id) ON DELETE CASCADE,
  player_name TEXT NOT NULL,
  card TEXT NOT NULL
);
