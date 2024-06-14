export const checkWin = (board) => {
    const lines = [
        // Rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        // Columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        // Diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]
    ];
    
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

const minimax = (board, depth, isMaximizing) => {
    const winner = checkWin(board);
    if (winner === 'X') return -10 + depth;
    if (winner === 'O') return 10 - depth;
    if (winner === 'draw') return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'O';
                    const score = minimax(board, depth + 1, false);
                    board[i][j] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let worstScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'X';
                    const score = minimax(board, depth + 1, true);
                    board[i][j] = '';
                    worstScore = Math.min(score, worstScore);
                }
            }
        }
        return worstScore;
    }
};

const findBestMove = (board, player) => {
    let bestMove = null;
    let bestScore = -Infinity;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                board[i][j] = player;
                const moveScore = minimax(board, 0, false);
                board[i][j] = '';
                if (moveScore > bestScore) {
                    bestScore = moveScore;
                    bestMove = { row: i, col: j };
                }
            }
        }
    }
    return bestMove;
};

export function TicTacToe(board) {
    const matrix = board?.matrix;
    if (!matrix) {
        throw new Error('Matrix is required');
    }

    if (matrix.flat().every(cell => cell === '')) {
        // Make initial computer move if board is empty
        const bestMove = findBestMove(matrix, 'X');
        if (bestMove) {
            matrix[bestMove.row][bestMove.col] = 'X';
        }
    }
    const xLength = matrix.flat().filter(cell => cell === 'X').length;
    const oLength = matrix.flat().filter(cell => cell === 'O').length;
    if (xLength > oLength) {
        // Make computer move
        const bestMove = findBestMove(matrix, 'O');
        if (bestMove) {
            matrix[bestMove.row][bestMove.col] = 'O';
        }
    } else {
        const bestMove = findBestMove(matrix, 'X');
        if (bestMove) {
            matrix[bestMove.row][bestMove.col] = 'X';
        }
    }

    board.win = checkWin(matrix);
    return board;
}

let gameState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];



// const makeMove = (board, player, row, col) => {
//     if (board[row][col] !== '') {
//         return { error: 'Cell already occupied' };
//     }

//     board[row][col] = player;
//     const winner = checkWin(board);

//     if (winner) {
//         return { board, winner };
//     }

//     // If no winner, make computer move using Minimax
//     const bestMove = findBestMove(board);
//     if (bestMove) {
//         board[bestMove.row][bestMove.col] = 'O';
//     }
//     const newWinner = checkWin(board);

//     return { board, winner: newWinner, computerMove: bestMove };
// };

// { userid: '',
//   status: '',
//   matrix: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
//   ];
// }

// export function TicTacToe(board) {
//   const matrix = board?.matrix;
//   if (!matrix) {
//     throw new Error('Matrix is required');
//   }

//   board.status = checkWin(matrix);
//   return board;
// }

// let gameState = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ];
// const checkWin = (board) => {
//     const lines = [
//         // Rows
//         [board[0][0], board[0][1], board[0][2]],
//         [board[1][0], board[1][1], board[1][2]],
//         [board[2][0], board[2][1], board[2][2]],
//         // Columns
//         [board[0][0], board[1][0], board[2][0]],
//         [board[0][1], board[1][1], board[2][1]],
//         [board[0][2], board[1][2], board[2][2]],
//         // Diagonals
//         [board[0][0], board[1][1], board[2][2]],
//         [board[0][2], board[1][1], board[2][0]]
//     ];
    
//     for (const line of lines) {
//         if (line[0] && line[0] === line[1] && line[0] === line[2]) {
//           return line[0];
//         }
//     }

//     if (board.flat().every(cell => cell)) {
//         return 'draw';
//     }

//     return '';
// };

//I just copied what I found from the internet we will likely need to refactor.
// export const makeMove = (board, player, row, col) => {
//     if (board[row][col] !== '') {
//         return { error: 'Cell already occupied' };
//     }

//     board[row][col] = player;
//     const winner = checkWin(board);
  
//     if (winner) {
//       return { board, winner };
//     }
  
//     // If no winner, make computer move
//     const computerMove = makeComputerMove(board);
//     const newWinner = checkWin(computerMove.board);
  
//     return { board: computerMove.board, winner: newWinner, computerMove: { row: computerMove.row, col: computerMove.col } };
// }

// const makeComputerMove = (board) => {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[i].length; j++) {
//           if (board[i][j] === '') {
//             board[i][j] = 'O';
//             return { board, row: i, col: j };
//           }
//         }
//       }
//       return { board, row: null, col: null };
// }

/* possible rewrite to add logic for computer making the best move and allowing the computer to make the first move
*/