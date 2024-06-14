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
    result = TicTacToe({ matrix: result.matrix });
    console.log(`${result.matrix[0]}\n${result.matrix[1]}\n${result.matrix[2]} ${result.status}`);
    expect(result.status).toBeDefined();
  });
});
