import React, { useEffect, useState } from "react"
import {getPokemons} from "../Api/Api"
const PokemonContext = React.createContext()

function PokemonProvider({ children }) {
  const [oculto, setOculto] = useState(true)
  const [search, setSearch] = useState("")
  const [pokemons, setPokemons] = useState([])
  const [consultIdPokemons, setConsultPokemons] = useState({})
  const [searchPokemons, setSearchPokemons] = useState([])

  useEffect(() => {
    setSearchPokemons(pokemons.filter(x => x.name.toUpperCase().includes(search.toUpperCase())))
  }, [search])

  useEffect(() => {
    setSearchPokemons([...pokemons])
  }, [pokemons])

  useEffect(() => {
    async function fetchPokemons(){
      const result = await getPokemons()
      setPokemons(result)
    }
    fetchPokemons()
     
  }, [])


  return (
    <PokemonContext.Provider value={{
      pokemons,
      setPokemons,
      oculto,
      setOculto,
      search,
      setSearch,
      searchPokemons,
      consultIdPokemons,
      setConsultPokemons
    }}

    >{children}</PokemonContext.Provider>
  )
}
export { PokemonProvider }

export default PokemonContext