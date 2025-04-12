import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("cards", {
    id: "id",
    value: {
      type: "integer",
      notNull: true,
    },
  });

  const cards = [];

  for (let i = 1; i <= 12; i++) {
    for (let j = 0; j < 12; j++) {
      cards.push({ value: i });
    }
  }
  for (let i = 0; i < 18; i++) {
    cards.push({ value: 0 });
  }

  pgm.sql(
    `INSERT INTO cards (value) VALUES ${cards.map((value) => `(${value.value})`).join(", ")};`,
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("cards");
}
