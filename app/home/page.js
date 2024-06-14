"use client";
import { useState } from "react";

export default function Game() {
  const [bordData, setBordData] = useState([]);
  const [choice, setChoice] = useState("");

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  async function handlePlay(board) {
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = "";
      }
    }
    let matrix = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
    ];
    console.log(matrix);
    const response = await fetch("/api/play", {
      method: "POST",
      body: JSON.stringify({
        user_id: "test",
        matrix: matrix,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  function Board({ xIsNext, squares, onPlay }) {
    async function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      await handlePlay(nextSquares);
      onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (choice ? "X" : "O");
    }
    

    return (
      <>
        <div className="flex flex-row mx-10 gap-4">
          <button className="usa-button " >Play</button>
          <button className="usa-button ">Reset</button>
        </div>

        <div className=" mx-10 mb-5 mt-10">
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        <div className="status mx-10">{status}</div>
        <div className="flex flex-row mx-10 gap-4">
          {/* <form onClick={setChoice(value)}> */}
            <input type="radio" id="computer" name="choice" value="x" onClick={setChoice("X")} />
            <label for="age1">computer</label>
            <input type="radio" id="user" name="choice" value="o"  onClick={setChoice("O")}/>
            <label for="age1">user</label>

          {/* </form> */}
            
        </div>
      </>
    );
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}