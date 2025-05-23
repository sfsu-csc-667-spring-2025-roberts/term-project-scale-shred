import { Card } from "./card";

export interface GameState {
  id: string;
  players: PlayerState[];
  currentPlayerIndex: number;
  direction: 1 | -1;
  currentColor: Card["color"];
  currentValue: Card["value"];
  deckCount: number;
  discardPile: Card[];
  status: "waiting" | "playing" | "finished";
  winnerId?: string;
}

export interface PlayerState {
  id: string;
  name: string;
  cards: Card[];
  isReady: boolean;
  score: number;
}
