import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  // Drop the old foreign key constraint
  pgm.dropConstraint("game_users", "game_users_game_id_fk");
  // Add the new foreign key constraint referencing game_instance
  pgm.addConstraint("game_users", "game_users_game_id_fk", {
    foreignKeys: {
      columns: "game_id",
      references: "game_instance(id)",
      onDelete: "CASCADE",
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  // Revert back to referencing games(id)
  pgm.dropConstraint("game_users", "game_users_game_id_fk");
  pgm.addConstraint("game_users", "game_users_game_id_fk", {
    foreignKeys: {
      columns: "game_id",
      references: "games(id)",
      onDelete: "CASCADE",
    },
  });
}
