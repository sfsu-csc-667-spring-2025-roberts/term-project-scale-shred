import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("users", {
    id: "id",
    email: {
      type: "varchar(100)",
      notNull: true,
      unique: true,
    },
    password: {
      type: "varchar(100)",
      notNull: true,
    },
    first_name: {
      type: "varchar(100)",
    },
    last_name: {
      type: "varchar(100)",
    },
    profile_pic: {
      type: "varchar(250)",
    },
    created_at: {
      type: "timestamp",
      default: pgm.func("now()"),
    },
    updated_at: {
      type: "timestamp",
      default: pgm.func("now()"),
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("users");
}
