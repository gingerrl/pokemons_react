import React, { useContext } from 'react'
// import PokemonContext from '../context/PokemonProvider';
import usePokemon from '../../hooks/usePokemon';
import "../Search/Search.css"
function SearchPokemon() {
  const { search, setSearch } = usePokemon();

  const handleSearch = (e) => {
    setSearch(e)
  }
  return (
    <div>
      <input onChange={(e) => handleSearch(e.target.value)} className='icon' placeholder='Buscar' />
    </div>
  );
}

export default SearchPokemon