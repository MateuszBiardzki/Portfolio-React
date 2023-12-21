import React, { useState, useEffect } from 'react';
import './FirstGame.css';

const INITIAL_STATE = Array(9).fill(null);

export const FirstGame = () => {
  const [squares, setSquares] = useState(INITIAL_STATE);
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    // Make a computer move when it's the computer's turn
    if (!isXNext) {
      makeComputerMove();
    }
  }, [isXNext]);

  const calculateWinner = (squares) => {
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

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const makeComputerMove = () => {
    if (calculateWinner(squares)) {
      return; // Game is already won, no need to make a move
    }

    const emptySquares = squares.reduce((acc, curr, index) => {
      if (!curr) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (emptySquares.length === 0) {
      return; // No empty squares left, game is a draw
    }

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const newSquares = squares.slice();
    newSquares[emptySquares[randomIndex]] = 'O';

    setSquares(newSquares);
    setIsXNext(true); // Toggle back to the player after the computer's move
  };

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = 'X';

    setSquares(newSquares);
    setIsXNext(false); // Now it's the computer's turn
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {squares[index]}
      </button>
    );
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'Player' : 'Computer'}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
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
    </div>
  );
};