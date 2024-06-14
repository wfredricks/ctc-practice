import { TicTacToe } from "./tic-tac-toe.algo";

describe("makeMove", () => {
  it("should return an error if the cell is already occupied", () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    const userId = "X";
    const row = 0;
    const col = 0;

    const result = TicTacToe(board);

    expect(result.board).toEqual(board);
  });

  it("should make a move and return the updated board and winner if there is one", () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    const userId = "X";
    const row = 0;
    const col = 0;

    const result = makeMove(board, userId, row, col);

    console.log("result board", result.board[0][1]);

    expect(result.board[0][1]).toEqual(
      "O"
    );
    expect(result.winner).toBe("");
  });
});
