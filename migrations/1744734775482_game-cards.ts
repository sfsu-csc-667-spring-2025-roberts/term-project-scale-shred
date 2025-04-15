import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("game_cards", {
    id: "id",
    game_id: {
      type: "integer",
      notNull: true,
    },
    user_id: {
      type: "integer",
      notNull: true,
    },
    card_id: {
      type: "integer",
      notNull: true,
    },
    location: {
      type: "varchar(20)",
      check: "location IN ('deck', 'discard', 'player_hand')",
    },
  });
  pgm.addConstraint("game_cards", "game_cards_game_id_fk", {
    foreignKeys: {
      columns: "game_id",
      references: "games(id)",
    },
  });
  pgm.addConstraint("game_cards", "game_cards_user_id_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "game_users(id)",
    },
  });
  pgm.addConstraint("game_cards", "game_cards_card_id_fk", {
    foreignKeys: {
      columns: "card_id",
      references: "cards(id)",
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("game_cards");
}
