import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("users", {
    id: "id",
    email: {
      type: "varchar(40)",
      notNull: true,
      unique: true,
    },
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },
    password: {
      type: "varchar(50)",
      notNull: true,
    },
    first_name: {
      type: "varchar(50)",
    },
    last_name: {
      type: "varchar(50)",
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
