import { Deck } from "./deck";
import { PlayerGame } from "./player";
import { GameRules } from "./rules";
import { GameState, PlayerState } from "../types/game";
import { Card } from "../types/card";

export class UnoGame {
  private deck: Deck;
  private players: PlayerGame[] = [];
  private currentPlayerIndex = 0;
  private direction: 1 | -1 = 1;
  private currentColor: Card["color"] = "red";
  private currentValue: Card["value"] = "0";
  private status: "waiting" | "playing" | "finished" = "waiting";
  private winnerId?: string;
  private discardPile: Card[] = []; // Track discarded cards

  constructor(public readonly id: string) {
    this.deck = new Deck();
  }

  addPlayer(playerId: string, playerName: string): void {
    if (this.status !== "waiting") return;

    const player = new PlayerGame(playerId, playerName);
    this.players.push(player);
  }

  startGame(): void {
    if (this.players.length < 2) {
      throw new Error("At least 2 players are required to start the game");
    }

    this.status = "playing";

    // Deal initial cards
    this.players.forEach((player) => {
      player.addCards(this.deck.draw(7));
    });

    // Draw first card and add to discard pile
    const firstCard = this.deck.draw(1)[0];
    this.discardPile.push(firstCard);
    this.currentColor = firstCard.color;
    this.currentValue = firstCard.value;
  }

  playCard(playerId: string, cardId: number, color?: Card["color"]): boolean {
    const player = this.players[this.currentPlayerIndex];
    if (player.id !== playerId) return false;

    const card = player.playCard(cardId);
    if (!card) return false;

    // Add played card to discard pile
    this.discardPile.push(card);

    // Apply card effect
    const effect = GameRules.getCardEffect(card);
    if (effect.drawCards) {
      const nextPlayerIndex = this.getNextPlayerIndex();
      this.players[nextPlayerIndex].addCards(this.deck.draw(effect.drawCards));
    }

    // Update game state
    this.currentColor = card.color;
    this.currentValue = card.value;
    if (color && card.isWild) {
      this.currentColor = color;
    }

    // Check for winner
    if (player.hasWon()) {
      this.status = "finished";
      this.winnerId = playerId;
      return true;
    }

    // Handle reverse card
    if (effect.reverse) {
      this.direction *= -1;
    }

    // Move to next player if not skipping turn
    if (!effect.skipTurn) {
      this.moveToNextPlayer();
    } else {
      // If skipping turn, move to the player after next
      this.moveToNextPlayer();
      this.moveToNextPlayer();
    }

    return true;
  }

  drawCard(playerId: string): Card | null {
    const player = this.players[this.currentPlayerIndex];
    if (player.id !== playerId) return null;

    const cards = this.deck.draw(1);
    if (cards.length === 0) {
      // Reshuffle discard pile if deck is empty
      this.reshuffleDiscardPile();
      return null;
    }

    player.addCards(cards);
    return cards[0];
  }

  private reshuffleDiscardPile(): void {
    if (this.discardPile.length <= 1) return; // Keep at least one card

    const topCard = this.discardPile.pop()!; // Keep the top card
    this.deck = new Deck(this.discardPile); // Create new deck with remaining cards
    this.discardPile = [topCard]; // Reset discard pile with just the top card
  }

  private moveToNextPlayer(): void {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + this.direction + this.players.length) %
      this.players.length;
  }

  private getNextPlayerIndex(): number {
    return (
      (this.currentPlayerIndex + this.direction + this.players.length) %
      this.players.length
    );
  }

  getState(): GameState {
    return {
      id: this.id,
      players: this.players.map((p) => ({
        id: p.id,
        name: p.name,
        cards: p.cards,
        isReady: p.isReady,
        score: p.score,
      })),
      currentPlayerIndex: this.currentPlayerIndex,
      direction: this.direction,
      currentColor: this.currentColor,
      currentValue: this.currentValue,
      deckCount: this.deck.getCardCount(),
      discardPile: this.discardPile,
      status: this.status,
      winnerId: this.winnerId,
    };
  }
}
