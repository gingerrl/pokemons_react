import React, { useEffect, useState } from 'react'
import usePokemon from '../hooks/usePokemon';

function Pokemon() {
    const [pokemon, setPokemon] = useState({
        id: null,
        name: "",
        image: "",
        attack: 0,
        defense: 0,
        idAuthor: 1,
        hp: 100,
        type: "normal"
    })


    const { setOculto, createPokemons, getPokemons, consultPokemons, updatePokemon } = usePokemon();
    console.log("hhh", consultPokemons)


    useEffect(() => {
        if (consultPokemons) {
            setPokemon({ ...pokemon, id: consultPokemons.id, name: consultPokemons.name, image: consultPokemons.image, attack: consultPokemons.attack, defense: consultPokemons.defense })
        }
    }, [])




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






    const handleSave = async () => {

        if (Object.values(pokemon).includes('') || Object.values(pokemon).includes(0)) {
            alert("Todos los campos son obligatorios")
            return null;
        } // si el objeto viene vacio va a poner comillas simples
        // addPokemon(pokemon)
        if (consultPokemons.id === null) {
            console.log(consultPokemons.id)
            await createPokemons(pokemon)
            getPokemons()
            setPokemon({ ...pokemon, id: null, name: "", image: "", attack: 0, defense: 0 })
        } else {
            await updatePokemon(consultPokemons.id, pokemon)
            getPokemons()
            setPokemon({ ...pokemon, id: null, name: "", image: "", attack: 0, defense: 0 })
        }

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
                    Ataque: 0<input className="styled-slider slider-progress" value={pokemon.attack} onChange={(e) => handleAttach(e.target.value)} type="range" min="0" max="100" />100

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
                <div style={{display: consultPokemons.id === null ? "" : "none"}}>
                <button onClick={() => handleSave()} className='primaryButton' ><i className="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </div>
                <div style={{display: consultPokemons.id != null ? "" : "none"}}>
                <button onClick={() => handleSave()} className='primaryButton' ><i className="fa fa-floppy-o" aria-hidden="true"></i> Actualizar</button>
                </div>
                {/* <button onClick={() => handleSave()} className='primaryButton' ><i className="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button> */}
                <button className='primaryButton' onClick={() => handleCancel()}> <i className="fa fa-times" aria-hidden="true"></i> Cancelar</button>

            </div>
        </div>
    )
}

export default Pokemon