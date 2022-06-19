import React, { Component, useEffect, useState } from "react"

const PokemonContext = React.createContext()

function PokemonProvider({ children }) {
  const [oculto, setOculto] = useState(true)
  const [search, setSearch] = useState("")

  const [pokemons, setPokemons] = useState([{
    name: "Ivysaur",
    image: "https://2.bp.blogspot.com/-3d92ta4_JEc/TvmzTTgNBKI/AAAAAAAACJ4/GFC9bCwM5vQ/s1600/imagenes-jpg-712861.jpg",
    attack: "65",
    defense: "38"
  }])

  const [searchPokemons, setSearchPokemons] = useState([])
  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon])
  }

  useEffect(() => {
    setSearchPokemons(pokemons.filter(x => x.name.includes(search)))
  }, [search])


  useEffect(() => {
    setSearchPokemons([...pokemons])
  }, [pokemons]) //

  return (
    <PokemonContext.Provider value={{
      hi: "hello",
      hola: "holisss",
      pokemons,
      setPokemons,
      addPokemon,
      oculto,
      setOculto,
      search,
      setSearch,
      searchPokemons
    }}

    >{children}</PokemonContext.Provider>
  )
}
export { PokemonProvider }

export default PokemonContext