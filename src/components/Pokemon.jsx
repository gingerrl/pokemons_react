import React, { useState } from 'react'
import usePokemon from '../hooks/usePokemon';

function Pokemon() {
    const [pokemon, setPokemon] = useState({
        name: "",
        image: "",
        attack: 0,
        defense: 0
    })
    const { addPokemon, setOculto } = usePokemon();


    const handleName = (e) => {
        setPokemon({ ...pokemon, name: e })
    }
    const handleImage = (e) => {
        setPokemon({ ...pokemon, image: e })
    }

    const handleAttach = (e) => {
        setPokemon({ ...pokemon, attack: e })
    }

    const handleDefense = (e) => {
        setPokemon({ ...pokemon, defense: e })
    }

    const handleSave = () => {
        if (Object.values(pokemon).includes('')) {
            alert("Todos los campos son obligatorios")
            return null;
        } // si el objeto viene vacio va a poner comillas simples
        addPokemon(pokemon)
        setPokemon({ ...pokemon, name: "", image: "", attack: 0, defense: 0 })
        setOculto(true)
    }
    const handleCancel = () => {
        setOculto(true)
    }
    return (

        <div className='contenedorPokemon' >
            <div className='titlePokemon'>
                <span>Nuevo Pokemon</span>
            </div>
            <div className='fila1'>
                <div className='namePokemon' >
                    Nombre: <input value={pokemon.name} onChange={(e) => handleName(e.target.value)} />
                </div>
                <div>
                    Ataque: 0<input value={pokemon.attack} onChange={(e) => handleAttach(e.target.value)} type="range" min="0" max="100" />100

                </div>
            </div>

            <div className='fila2'>
                <div>
                    Imagen: <input placeholder='url' value={pokemon.image} onChange={(e) => handleImage(e.target.value)} />
                </div>
                <div className='rangeInput'>
                    Defensa: 0<input value={pokemon.defense} onChange={(e) => handleDefense(e.target.value)} type="range" min="0" max="100" />100
                </div>
            </div>
            <div className='buttonPokemon'>
                <button onClick={() => handleSave()} className='primaryButton' ><i className="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                <button className='primaryButton' onClick={() => handleCancel()}> <i className="fa fa-times" aria-hidden="true"></i> Cancelar</button>

            </div>
        </div>
    )
}

export default Pokemon