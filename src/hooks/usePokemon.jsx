import React, { useContext } from 'react'
import PokemonContext from '../context/PokemonProvider';

function usePokemon() {
    return useContext(PokemonContext);
}

export default usePokemon