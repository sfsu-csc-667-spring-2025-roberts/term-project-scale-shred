import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("game_instance", {
    id: {
      type: "serial",
      primaryKey: true,
    },
    name: {
      type: "varchar(255)",
      notNull: true,
    },
    min_players: {
      type: "integer",
      notNull: true,
      default: 2,
    },
    max_players: {
      type: "integer",
      notNull: true,
      default: 4,
    },
    password: {
      type: "varchar(255)",
    },
    create_at: {
      type: "timestamp",
      default: pgm.func("now()"),
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("game_instance");
}
