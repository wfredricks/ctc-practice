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

//I just copied what I found from the internet we will likely need to refactor.
const makeMove = (board, userId, row, col) => {
    if (board[row][col] !== '') {
        return { error: 'Cell already occupied' };
    }

    board[row][col] = player;
    const winner = checkWin(board);
  
    if (winner) {
      return { board, winner };
    }
  
    // If no winner, make computer move
    const computerMove = makeComputerMove(board);
    const newWinner = checkWin(computerMove.board);
  
    return { board: computerMove.board, winner: newWinner, computerMove: { row: computerMove.row, col: computerMove.col } };
}

const makeComputerMove = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === '') {
            board[i][j] = 'O';
            return { board, row: i, col: j };
          }
        }
      }
      return { board, row: null, col: null };
}