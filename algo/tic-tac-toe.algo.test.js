import { makeMove } from './tic-tac-toe.algo';

describe('makeMove', () => {
  it('should return an error if the cell is already occupied', () => {
    const board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    const userId = 'X';
    const row = 0;
    const col = 0;

    const result = makeMove(board, userId, row, col);

    expect(result).toEqual({ error: 'Cell already occupied' });
  });

  it('should make a move and return the updated board and winner if there is one', () => {
    const board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    const userId = 'X';
    const row = 0;
    const col = 0;

    const result = makeMove(board, userId, row, col);

    expect(result.board).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    expect(result.winner).toBe('');
  });

  it('should make a move and return the updated board and winner if there is one (computer move)', () => {
    const board = [
      ['X', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    const userId = 'O';
    const row = 1;
    const col = 1;

    const result = makeMove(board, userId, row, col);

    expect(result.board).toEqual([
      ['X', '', ''],
      ['', 'O', ''],
      ['', '', '']
    ]);
    expect(result.winner).toBe('');
    expect(result.computerMove).toEqual({ row: 1, col: 1 });
  });
});