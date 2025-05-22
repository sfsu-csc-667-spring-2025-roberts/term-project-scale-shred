import { Card } from "../types/card";
import { GameRules } from "./rules";

export class PlayerGame {
  constructor(
    public id: string,
    public name: string,
    public cards: Card[] = [],
    public score: number = 0,
    public isReady: boolean = false,
  ) {}

  addCards(newCards: Card[]): void {
    this.cards.push(...newCards);
  }

  playCard(cardId: number): Card | null {
    const cardIndex = this.cards.findIndex((card) => card.id === cardId);
    if (cardIndex === -1) return null;

    return this.cards.splice(cardIndex, 1)[0];
  }

  hasPlayableCard(topCard: Card, currentColor: Card["color"]): boolean {
    return this.cards.some((card) =>
      GameRules.canPlayCard(card, topCard, currentColor),
    );
  }

  hasUno(): boolean {
    return this.cards.length === 1;
  }

  hasWon(): boolean {
    return this.cards.length === 0;
  }
}
