import { UnoGame } from "./game";
import { Card } from "../types/card";

// Create a new game
const game = new UnoGame("test-game");

// Add players
game.addPlayer("player1", "Alice");
game.addPlayer("player2", "Bob");
game.addPlayer("player3", "Charlie");

// Start the game
game.startGame();

// Get initial game state
const state = game.getState();
console.log("Initial game state:");
console.log("Current player:", state.players[state.currentPlayerIndex].name);
console.log("Cards in deck:", state.deckCount);
console.log("Top card:", state.discardPile[state.discardPile.length - 1]);

// Simulate a few turns
function playTurn() {
  const state = game.getState();
  const currentPlayer = state.players[state.currentPlayerIndex];
  const playableCards = currentPlayer.cards.filter(
    (card) =>
      card.color === state.currentColor ||
      card.value === state.currentValue ||
      card.isWild,
  );

  if (playableCards.length > 0) {
    // Play the first playable card
    const cardToPlay = playableCards[0];
    console.log(`\n${currentPlayer.name} plays:`, cardToPlay);
    game.playCard(
      currentPlayer.id,
      cardToPlay.id,
      cardToPlay.isWild ? "red" : undefined,
    );
  } else {
    // Draw a card if no playable cards
    console.log(`\n${currentPlayer.name} draws a card`);
    game.drawCard(currentPlayer.id);
  }

  // Print updated state
  const newState = game.getState();
  console.log("Current color:", newState.currentColor);
  console.log(
    "Top card:",
    newState.discardPile[newState.discardPile.length - 1],
  );
  console.log(
    "Next player:",
    newState.players[newState.currentPlayerIndex].name,
  );

  // Continue if game is not over
  if (newState.status !== "finished") {
    setTimeout(playTurn, 1000); // Next turn after 1 second
  } else {
    console.log(`\nGame over! Winner: ${newState.winnerId}`);
  }
}

// Start the game loop
playTurn();
