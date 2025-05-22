export type CardColor = "red" | "blue" | "green" | "yellow" | "wild";
export type CardValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "skip"
  | "reverse"
  | "draw_two"
  | "wild"
  | "wild_draw_four";

export interface Card {
  id: number;
  color: CardColor;
  value: CardValue;
  isWild: boolean;
}

export const SPECIAL_CARDS = {
  WILD: "wild" as CardValue,
  WILD_DRAW_FOUR: "wild_draw_four" as CardValue,
  SKIP: "skip" as CardValue,
  REVERSE: "reverse" as CardValue,
  DRAW_TWO: "draw_two" as CardValue,
};
