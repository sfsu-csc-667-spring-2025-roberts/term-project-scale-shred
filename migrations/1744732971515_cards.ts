// Create cards for the game. Create them at compilation time.
import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("cards", {
    id: "id",
    color: {
      type: "varchar(10)",
      notNull: true,
    },
    value: {
      type: "varchar(20)",
      notNull: true,
    },
  });

  const colors = ["red", "blue", "green", "yellow"];
  const actions = ["skip", "reverse", "draw_two"];

  const cards: { color: string; value: string }[] = [];
  for (const color of colors) {
    cards.push({ color, value: "0" });
    for (let i = 1; i <= 9; i++) {
      cards.push({ color, value: `${i}` });
      cards.push({ color, value: `${i}` });
    }
    for (const action of actions) {
      cards.push({ color, value: action });
      cards.push({ color, value: action });
    }
  }
  for (let i = 0; i < 4; i++) {
    cards.push({ color: "wild", value: "wild" });
    cards.push({ color: "wild", value: "wild_draw_four" });
  }

  const valuesAsString = cards
    .map(({ color, value }) => `('${color}', '${value}')`)
    .join(",\n");

  pgm.sql(`INSERT INTO cards (color, value) VALUES ${valuesAsString};`);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("cards");
}
