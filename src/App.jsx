import { useState } from 'react'
import './App.css'
import { PokemonProvider } from './context/PokemonProvider'
import Inicio from './paginas/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <PokemonProvider>
        <Inicio />
      </PokemonProvider>
    </div>
  )
}

export default App
