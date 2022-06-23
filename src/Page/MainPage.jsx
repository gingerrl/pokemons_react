import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search'
import ListPokemon from '../components/ListPokemon/ListPokemon';
import Pokemon from '../components/ModalPokemon/Pokemon';
import './MainPage.css'
import usePokemon from '../Hooks/usePokemon';
import {createPokemons} from "../Api/Api"
function MainPage() {
  const { oculto, setOculto } = usePokemon()

  const handleNew = async () => {
    setOculto(false)
    createPokemons();
    
  }

  return (
    <div className='contenedor'>
      <div className='item-titulo'>
        <span>Listado de Pokemon</span>
      </div>
      <div className='item-buscador'>
        <Search />
        <button className='primaryButton' onClick={() => handleNew()} > <i className="fa fa-plus" aria-hidden="true"></i> Nuevo</button>
      </div>
      <div className='item-tabla'>
        <ListPokemon />
      </div>
      <div className='item-info'>
        {!oculto && (<Pokemon />)}
      </div>
    </div>
  )
}

export default MainPage