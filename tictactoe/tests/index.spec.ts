import * as src from "../src/index";
describe("kata", () => {
  it("a game is over when all fields are taken", () => {
    const filled = Array(9).fill([]);
    expect(src.gameOver(filled)).toBe(true);
  });

  it("a game is over when all fields in a column are taken by a player", () => {
    const columnLineWinner = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    expect(src.checkedForWinner(columnLineWinner)).toBe(true);
  });

  it("a game is over when all fields in a row are taken by a player", () => {
    const rowWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    expect(src.checkedForWinner(rowWinner)).toBe(true);
  });

  it("a game is over when all fields in a diagonal are taken by a player", () => {
    const diagonalWinner = [
      [2, 4, 6],
      [0, 4, 8],
    ];

    expect(src.checkedForWinner(diagonalWinner)).toBe(true);
  });

  it("a player can take a field if not already taken", () => {
    const gameState = ["O", "X", "O", "X", null, "X", null, "O", "O"];

    const playerSymbol = "X";
    const fieldIndex = 1;

    const success = src.takeField(fieldIndex, playerSymbol, gameState);

    expect(success).toBe(false);
    expect(gameState[fieldIndex]).toBe("X");
  });

  it("players take turns taking fields until the game is over", () => {
    const gameState = [null, null, null, null, null, null, null, null, null];

    const playerSymbol = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
    playerSymbol.forEach((val, i) => {
      const success = src.takeField(i, val, gameState);
      expect(success).toBe(true);
    });
  });

  it("there are two player in the game (X and O)", () => {
    const gameState = [null, null, null, null, null, null, null, null, null];

    const playerSymbolX = "X";
    const playerSymbolO = "O";
    const playerSymbolY = "Y";
    const fieldIndexX = 0;
    const fieldIndexO = 1;
    const fieldIndexY = 2;
    const successXPlayer = src.takeField(fieldIndexX, playerSymbolX, gameState);
    const successOPlayer = src.takeField(fieldIndexO, playerSymbolO, gameState);
    const successYPlayer = src.takeField(fieldIndexY, playerSymbolY, gameState);
    console.log(successOPlayer);
    expect(successXPlayer).toBe(true);
    expect(successOPlayer).toBe(true);
    expect(successYPlayer).toBe(false);
  });
});
