import { CardColor } from "./card";

export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  isReady: boolean;
  cards: number[]; // Array of card IDs
  score: number;
}

export interface PlayerAction {
  type: "play" | "draw" | "uno" | "challenge";
  cardId?: number;
  color?: CardColor;
}
