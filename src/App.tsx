import './App.css'
import CoffeForm from './pages/CoffeForm'
import { ThemeProvider } from './context/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'
import { memo } from 'react'

const App = memo(() => {
  return (
    <ThemeProvider>
      <ThemeToggle/>
      <CoffeForm/>
    </ThemeProvider>
  
  )
})

App.displayName = 'App'

export default App
