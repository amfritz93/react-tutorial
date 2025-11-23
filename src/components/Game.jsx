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

    const moves = history.map((_, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move} className="rounded-2xl overflow-hidden">
                <button
                    onClick={() => jumpTo(move)}
                    className={`w-full text-left px-6 py-4 transition-all duration-200 font-medium cursor-pointer ${
                        move === currentMove
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 dark:shadow-purple-500/50 scale-105 rounded-2xl'
                            : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-slate-600 hover:shadow-md hover:scale-102 hover:cursor-pointer rounded-2xl'
                    }`}
                >
                    {description}
                </button>
            </li>
        );
    });

  return (
    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-8 lg:px-12 pb-8 overflow-hidden items-start">
      {/* Game Board - Takes up majority of space (2/3) */}
      <div className="md:col-span-2 flex justify-center h-full">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      {/* Move History - Takes up less space (1/3) */}
      <div className="md:col-span-1 flex flex-col h-full max-w-md md:max-w-none mx-auto md:mx-0 w-full px-4 md:px-0">
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
          Move History
        </h2>
        <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
          <ol className="space-y-3">{moves}</ol>
        </div>
      </div>
    </div>
  );
}