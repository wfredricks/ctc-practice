import { TicTacToe } from "./tic-tac-toe.algo";

describe("makeMove", () => {
  it("should return an error if the cell is already occupied", () => {
    const matrix = [
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    const result = TicTacToe({ matrix });

    expect(result.matrix).toEqual([["X", "", ""], ["", "O", ""], ["", "", ""]]);
  });
});
