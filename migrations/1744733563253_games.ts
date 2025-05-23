import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("games", {
    id: "id",
    game_instance_id: {
      type: "integer",
      notNull: false,
      references: "game_instance(id)",
      onDelete: "SET NULL",
    },
    status: {
      type: "varchar(20)",
      default: "waiting",
      check: "status IN ('waiting', 'in_progress', 'completed')",
    },
    direction: {
      type: "varchar(20)",
      default: "clockwise",
      check: "direction IN ('clockwise', 'counterclockwise')",
    },
    current_turn: {
      type: "integer",
    },
    top_card_id: {
      type: "integer",
    },
    game_mode_id: {
      type: "integer",
    },
    created_at: {
      type: "timestamp",
      default: pgm.func("now()"),
    },
    ended_at: {
      type: "timestamp",
    },
  });

  pgm.addConstraint("games", "games_top_card_id_fk", {
    foreignKeys: {
      columns: "top_card_id",
      references: "cards(id)",
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("games");
}
