import { useState } from "react";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    const winner = calculateWinner(squares);

    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

  return (
    <div className="flex flex-col items-center">
        <div className="text-2xl font-semibold mb-6 text-blue-300">{status}</div>
        <div className="inline-grid grid-cols-3 gap-2 bg-slate-900/50 p-4 rounded-xl">
            <Square value={squares[0]} onSquareClick={() => onPlay(0)}/>
            <Square value={squares[1]} onSquareClick={() => onPlay(1)}/>
            <Square value={squares[2]} onSquareClick={() => onPlay(2)}/>
            <Square value={squares[3]} onSquareClick={() => onPlay(3)}/>
            <Square value={squares[4]} onSquareClick={() => onPlay(4)}/>
            <Square value={squares[5]} onSquareClick={() => onPlay(5)}/>
            <Square value={squares[6]} onSquareClick={() => onPlay(6)}/>
            <Square value={squares[7]} onSquareClick={() => onPlay(7)}/>
            <Square value={squares[8]} onSquareClick={() => onPlay(8)}/>
        </div>
    </div>
  );
}