export default function Square({value, onSquareClick}) {
    return (
        <button
            className="w-24 h-24 bg-slate-700 hover:bg-slate-600 text-5xl font-bold text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            onClick={onSquareClick}
            disabled={value !== null}
        >
            <span className={value === 'X' ? 'text-blue-400' : 'text-purple-400'}>
                {value}
            </span>
        </button>
    );
}