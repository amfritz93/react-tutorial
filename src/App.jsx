import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Game from './components/Game'

function App() {
  return (
    <ThemeProvider>
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-gray-900 dark:text-white transition-colors overflow-hidden">
        <div className="h-full flex flex-col gap-8">
          <Header />
          <Game />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
