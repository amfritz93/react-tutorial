import { useState } from 'react';
import Board from './Board';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

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
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button
                    onClick={() => jumpTo(move)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                        move === currentMove
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                    }`}
                >
                    {description}
                </button>
            </li>
        );
    });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Game Board - Takes up majority of space (2/3) */}
      <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      {/* Move History - Takes up less space (1/3) */}
      <div className="lg:col-span-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-700/50">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">Move History</h2>
        <ol className="space-y-2">{moves}</ol>
      </div>
    </div>
  );
}