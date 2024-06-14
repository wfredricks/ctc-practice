import { TicTacToe } from "./tic-tac-toe.algo";

describe("makeMove", () => {
  it("should return an error if the cell is already occupied", () => {
    const matrix = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    let result = TicTacToe({ matrix });
    result = TicTacToe({ matrix: result.matrix });
    result = TicTacToe({ matrix: result.matrix });
    result = TicTacToe({ matrix: result.matrix });
    result = TicTacToe({ matrix: result.matrix });
    result = TicTacToe({ matrix: result.matrix });
    result = TicTacToe({ matrix: result.matrix });
    expect(result.status).toEqual('O');
  });
});
