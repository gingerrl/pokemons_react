import { useState } from 'react'
import './App.css'
import { PokemonProvider } from './context/PokemonProvider'
import MainPage from './Page/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <PokemonProvider>
        <MainPage />
      </PokemonProvider>
    </div>
  )
}

export default App
