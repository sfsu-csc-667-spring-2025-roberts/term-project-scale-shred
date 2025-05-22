import { Card, CardColor, CardValue, SPECIAL_CARDS } from "../types/card";

export class Deck {
  private cards: Card[] = [];

  constructor(cards?: Card[]) {
    this.cards = cards || [];
    if (cards === undefined) {
      this.initializeDeck();
      this.shuffle();
    }
  }

  private initializeDeck(): void {
    const colors: CardColor[] = ["red", "blue", "green", "yellow"];
    const numbers: CardValue[] = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    const actions: CardValue[] = ["skip", "reverse", "draw_two"];

    // Add number cards
    colors.forEach((color) => {
      // One zero per color
      this.cards.push({
        id: this.cards.length,
        color,
        value: "0",
        isWild: false,
      });

      // Two of each number 1-9 per color
      numbers.slice(1).forEach((value) => {
        this.cards.push({ id: this.cards.length, color, value, isWild: false });
        this.cards.push({ id: this.cards.length, color, value, isWild: false });
      });

      // Two of each action card per color
      actions.forEach((action) => {
        this.cards.push({
          id: this.cards.length,
          color,
          value: action,
          isWild: false,
        });
        this.cards.push({
          id: this.cards.length,
          color,
          value: action,
          isWild: false,
        });
      });
    });

    // Add wild cards
    for (let i = 0; i < 4; i++) {
      this.cards.push({
        id: this.cards.length,
        color: "wild",
        value: "wild",
        isWild: true,
      });
      this.cards.push({
        id: this.cards.length,
        color: "wild",
        value: "wild_draw_four",
        isWild: true,
      });
    }
  }

  shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw(count: number = 1): Card[] {
    return this.cards.splice(0, count);
  }

  getCardCount(): number {
    return this.cards.length;
  }
}
