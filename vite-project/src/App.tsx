import './App.css'
import CoffeForm from './pages/CoffeForm'
import { CoffeProvider } from './context/CoffeContext'
import { ThemeProvider } from './context/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'
import { memo } from 'react'

const App = memo(() => {
  return (
    <ThemeProvider>
    <CoffeProvider>
      <ThemeToggle/>
      <CoffeForm/>
    </CoffeProvider>
    </ThemeProvider>
  
  )
})

App.displayName = 'App'

export default App
