export default function Square({value, onSquareClick, xIsNext}) {
    const getHoverClass = () => {
        if (value !== null) return '';

        if (xIsNext) {
            return 'hover:bg-purple-100 hover:shadow-purple-400/50 dark:hover:bg-purple-900/30 dark:hover:shadow-purple-500/50 hover:cursor-pointer';
        } else {
            return 'hover:bg-orange-100 hover:shadow-orange-400/50 dark:hover:bg-orange-900/30 dark:hover:shadow-orange-500/50 hover:cursor-pointer';
        }
    };

    const getTextColor = () => {
        if (value === 'X') {
            return 'text-purple-600 dark:text-purple-400';
        } else if (value === 'O') {
            return 'text-orange-600 dark:text-orange-400';
        }
        return '';
    };

    return (
        <button
            className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white dark:bg-slate-800 text-5xl sm:text-6xl md:text-7xl font-bold rounded-2xl transition-all duration-200 shadow-xl hover:scale-105 disabled:cursor-default disabled:hover:scale-100 ${getHoverClass()}`}
            onClick={onSquareClick}
            disabled={value !== null}
        >
            <span className={getTextColor()}>
                {value}
            </span>
        </button>
    );
}