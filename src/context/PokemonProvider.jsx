import axios from "axios"
import React, { useEffect, useState } from "react"

const PokemonContext = React.createContext()

function PokemonProvider({ children }) {
  const [oculto, setOculto] = useState(true)
  const [search, setSearch] = useState("")
  const [pokemons, setPokemons] = useState([])
  const [consultIdPokemons, setConsultPokemons] = useState([])
  const [searchPokemons, setSearchPokemons] = useState([])

  useEffect(() => {
    setSearchPokemons(pokemons.filter(x => x.name.includes(search)))
  }, [search])

  useEffect(() => {
    setSearchPokemons([...pokemons])
  }, [pokemons])

  useEffect(() => {
    getPokemons()
  }, [])


  async function getPokemons() {
    const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1');
    setPokemons(response.data)
  }

  async function deletePokemon(id) {
    const data = await axios.delete(`https://bp-pokemons.herokuapp.com/${id}`)
  }
  async function createPokemons(data) {
    const createList = await axios.post('https://bp-pokemons.herokuapp.com/?idAuthor=1', data);
  }
  async function updatePokemon(id, data) {
    const update = await axios.put(`https://bp-pokemons.herokuapp.com/${id}`, data)
  }
  async function consultPokemon(id) {
    const consult = await axios.get(`https://bp-pokemons.herokuapp.com/${id}`)
    setConsultPokemons(consult.data)
  }
  return (
    <PokemonContext.Provider value={{
      pokemons,
      setPokemons,
      oculto,
      setOculto,
      search,
      setSearch,
      searchPokemons,
      deletePokemon,
      getPokemons,
      createPokemons,
      consultPokemon,
      consultIdPokemons,
      updatePokemon,
      setConsultPokemons
    }}

    >{children}</PokemonContext.Provider>
  )
}
export { PokemonProvider }

export default PokemonContext