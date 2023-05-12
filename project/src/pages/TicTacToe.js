import React, { useState } from "react";
import '../styles/About.css'
import Sky from '../assets/sky.jpg'

const INITIAL_BOARD = Array(9).fill(null);

function calculateWinner(board) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const squares = [...board];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setBoard(squares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    return <Square value={board[i]} onClick={() => handleClick(i)} />;
  }

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="about">
      <div className="aboutTop" style = {{backgroundImage:`url(${Sky})`}}>
        </div>
      <div className="aboutBottom">
        <h1>틱택토 게임</h1>
        <div><Board /></div>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
