import React, { useEffect, useState } from 'react'
import usePokemon from '../../Hooks/usePokemon';
import "../ModalPokemon/Pokemon.css";
import { createPokemons, updatePokemon, getPokemons } from "../../Api/Api"
import * as helperGlobal from '../../helper/global'
function UpdateNewPokemon() {
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

    const { setOculto, consultIdPokemons, setConsultPokemons, setPokemons } = usePokemon();

    useEffect(() => {
        if (consultIdPokemons?.id) {
            setPokemon({ ...pokemon, id: consultIdPokemons.id, name: consultIdPokemons.name, image: consultIdPokemons.image, attack: consultIdPokemons.attack, defense: consultIdPokemons.defense })
        }
        return () => {
            setConsultPokemons({ ...pokemon, id: null, name: "", image: "", attack: 0, defense: 0 })
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
        }
        if (helperGlobal.validateURL(pokemon.image)) {
            if (pokemon.id === null) {
                await createPokemons(pokemon)
                const result = await getPokemons()
                setPokemons(result)
                setPokemon({ ...pokemon, id: null, name: "", image: "", attack: 0, defense: 0 })
            } else {
                await updatePokemon(pokemon.id, pokemon)
                const result = await getPokemons()
                setPokemons(result)
                setPokemon({ ...pokemon, id: null, name: "", image: "", attack: 0, defense: 0 })
            }
        } else {
            alert("Escriba una URL valida")
        }
        setOculto(true)
    }
    const handleCancel = () => {
        setOculto(true)
    }
    return (
        <div className='blockPokemon' >
            <div className='blockElement1Pokemon'>
                <div style={{ display: pokemon.id != null ? "none" : "" }}>
                    <span>Nuevo Pokemon</span>
                </div>
                <div style={{ display: pokemon.id === null ? "none" : "" }}>
                    <span>Actualizar Pokemon</span>
                </div>
            </div>
            <div className='blockElement2'>
                <div className='namePokemon' >
                    Nombre: <input value={pokemon.name} onChange={(e) => handleName(e.target.value)} />
                </div>
                <div>
                    Ataque: 0<input className="styled-slider slider-progress" value={pokemon.attack} onChange={(e) => handleAttach(e.target.value)} type="range" min="0" max="100" />100

                </div>
            </div>

            <div className='blockElement3'>
                <div>
                    Imagen: <input type="url" placeholder='url' value={pokemon.image} onChange={(e) => handleImage(e.target.value)} />
                </div>
                <div className='rangeInput'>
                    Defensa: 0<input value={pokemon.defense} onChange={(e) => handleDefense(e.target.value)} type="range" min="0" max="100" />100
                </div>
            </div>
            <div className='blockElement4Pokemon'>
                <div style={{ display: pokemon.id != null ? "none" : "" }}>
                    <button disabled={pokemon.name === '' || pokemon.image === '' || pokemon.attack == 0 || pokemon.defense == 0} onClick={() => handleSave()} className={pokemon.name === '' || pokemon.image === '' || pokemon.attack == 0 || pokemon.defense == 0 ? "buttonDisabled" : "primaryButton"} ><i className="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                </div>
                <div style={{ display: pokemon.id === null ? "none" : "" }}>
                    <button onClick={() => handleSave()} className='primaryButton' ><i className="fa fa-refresh" aria-hidden="true"></i> Actualizar</button>
                </div>
                <button className='primaryButton' onClick={() => handleCancel()}> <i className="fa fa-times" aria-hidden="true"></i> Cancelar</button>

            </div>
        </div>
    )
}

export default UpdateNewPokemon