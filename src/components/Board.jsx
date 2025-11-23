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

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);

    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
        <div className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
            {status}
        </div>
        <div className="inline-grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} xIsNext={xIsNext}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} xIsNext={xIsNext}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} xIsNext={xIsNext}/>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} xIsNext={xIsNext}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} xIsNext={xIsNext}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} xIsNext={xIsNext}/>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} xIsNext={xIsNext}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} xIsNext={xIsNext}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} xIsNext={xIsNext}/>
        </div>
    </div>
  );
}