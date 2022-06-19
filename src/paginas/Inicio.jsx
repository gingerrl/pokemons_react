import React from 'react';
import Buscador from '../components/Buscador'
import Listado from '../components/Listado';
import Pokemon from '../components/Pokemon';
import '../components/listado.css'
import usePokemon from '../hooks/usePokemon';
function Inicio() {

  const { oculto, setOculto } = usePokemon()

  const handleNew = () => {
    setOculto(false)
  }
  return (
    <div className='contenedor'>
      <div className='item-titulo'>
        <span>Listado de Pokemon</span>
      </div>
      <div className='item-buscador'>
        <Buscador />
        <button className='primaryButton' onClick={() => handleNew()} > <i className="fa fa-plus" aria-hidden="true"></i> Nuevo</button>
      </div>
      <div className='item-tabla'>
        <Listado />
      </div>
      <div className='item-info'>
        {!oculto && (<Pokemon />)}
      </div>
    </div>
  )
}

export default Inicio