// this.board = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
//   ];

export function TicTacToe(board) {
  const matrix = board?.matrix;
  if (!matrix) {
    throw new Error('Matrix is required');
  }

  board.win = checkWin(matrix);
  return board;
}

let gameState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
const checkWin = (board) => {
    const lines = [
        //Rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        //Columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        //Diagonals
        [board[0][2], board[1][1], board[2][0]],
        [board[0][0], board[0][1], board[0][2]],
    ]
    
    for (const line of lines) {
        if (line[0] && line[0] === line[1] && line[0] === line[2]) {
          return line[0];
        }
    }

    if (board.flat().every(cell => cell)) {
        return 'draw';
    }

    return '';
};

const makeMove = (board, userId, gameEnded) => {

}