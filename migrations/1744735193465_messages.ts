import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("messages", {
    id: "id",
    user_id: {
      type: "integer",
      notNull: true,
    },
    game_id: {
      type: "integer",
      notNull: true,
    },
    sent_at: {
      type: "timestamp",
      default: pgm.func("now()"),
    },
    content: {
      type: "text",
    },
  });
  pgm.addConstraint("messages", "messages_user_id_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "users(id)",
    },
  });
  pgm.addConstraint("messages", "messages_game_id_fk", {
    foreignKeys: {
      columns: "game_id",
      references: "games(id)",
      onDelete: "CASCADE",
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("messages");
}
