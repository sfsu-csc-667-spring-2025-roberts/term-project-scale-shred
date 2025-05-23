import { Card, CardColor, CardValue, SPECIAL_CARDS } from "../types/card";

export class GameRules {
  static canPlayCard(
    playedCard: Card,
    topCard: Card,
    currentColor: CardColor,
  ): boolean {
    // Wild cards can always be played
    if (playedCard.isWild) return true;

    // Match color or value
    return (
      playedCard.color === currentColor || playedCard.value === topCard.value
    );
  }

  static getCardEffect(card: Card): {
    drawCards?: number;
    skipTurn?: boolean;
    reverse?: boolean;
  } {
    switch (card.value) {
      case "draw_two":
        return { drawCards: 2, skipTurn: true };
      case "wild_draw_four":
        return { drawCards: 4, skipTurn: true };
      case "skip":
        return { skipTurn: true };
      case "reverse":
        return { reverse: true };
      default:
        return {};
    }
  }

  static isGameOver(players: { cards: Card[] }[]): number | null {
    for (let i = 0; i < players.length; i++) {
      if (players[i].cards.length === 0) {
        return i;
      }
    }
    return null;
  }
}
