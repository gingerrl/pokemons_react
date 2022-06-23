import React, { useContext } from 'react'
import PokemonContext from '../Context/PokemonProvider';

function usePokemon() {
    return useContext(PokemonContext);
}

export default usePokemon