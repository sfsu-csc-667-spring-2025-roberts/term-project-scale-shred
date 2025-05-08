CREATE TABLE IF NOT EXISTS games (
  id SERIAL PRIMARY KEY,
  host_name TEXT NOT NULL,
  checksum TEXT,
  players TEXT[] DEFAULT '{}',
  deck TEXT[] DEFAULT '{}',
  top_card TEXT,
  active_player TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
