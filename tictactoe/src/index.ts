export function checkedForWinner(userInput: string[] | number[][]) {
  const lineCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of lineCombinations) {
    const [a, b, c] = combination;
    const match = userInput.some(
      (element) => element[0] === a && element[1] === b && element[2] === c
    );

    if (match) {
      return true;
    }
  }
}

export function gameOver(userInput: string[] | number[][]) {
  return userInput.length === 9;
}

export function checkForTaken(userInput: string[] | number[][]) {}

export function takeField(fieldIndex, playerSymbol, gameState) {
  if (playerSymbol === "X" || playerSymbol === "O") {
    if (gameState[fieldIndex] === null) {
      gameState[fieldIndex] = playerSymbol;
      return true;
    }
  }
  return false;
}
