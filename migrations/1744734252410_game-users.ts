import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("game_users", {
    id: "id",
    game_id: {
      type: "integer",
      notNull: true,
    },
    user_id: {
      type: "integer",
      notNull: true,
    },
    is_current: {
      type: "boolean",
      default: false,
    },
    // value can be 1 (clockwise) or -1 (counterclockwise)
    order: {
      type: "integer",
    },
    has_called_uno: {
      type: "boolean",
      default: false,
    },
    has_left: {
      type: "boolean",
      default: false,
    },
  });
  pgm.addConstraint("game_users", "game_users_game_id_fk", {
    foreignKeys: {
      columns: "game_id",
      references: "games(id)",
    },
  });
  pgm.addConstraint("game_users", "game_users_user_id_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "users(id)",
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("game_users");
}
