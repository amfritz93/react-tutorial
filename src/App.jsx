import './App.css'
import Game from './components/Game'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Tic-Tac-Toe
        </h1>
        <Game />
      </div>
    </div>
  )
}

export default App
