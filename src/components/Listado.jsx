import React, { useState } from 'react';
import usePokemon from '../hooks/usePokemon';

function Listado() {

    // const [listado, setListado] = useState([
    //     {
    //         nombre: "Ivysaur",
    //         imagen: "https://2.bp.blogspot.com/-3d92ta4_JEc/TvmzTTgNBKI/AAAAAAAACJ4/GFC9bCwM5vQ/s1600/imagenes-jpg-712861.jpg",
    //         ataque: "65",
    //         defensa: "38"
    //     }
    // ])

    const { searchPokemons, pokemons, setPokemons } = usePokemon();

    const handleDelete = (index) => {
        const newArray = pokemons.filter((x, i) => i != index)
        setPokemons(newArray)
    }

    return (

        <div className='listContainer'>
            <table className='tablaList'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ataque</th>
                        <th>Defensa</th>
                        <th>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {searchPokemons.map((list, index) => (
                        <tr key={index}>
                            <td> {list.name}</td>
                            <td> <img alt="pokemon" width="40px" height="40px" src={list.image} /></td>
                            <td> {list.attack}</td>
                            <td> {list.defense}</td>
                            <td>
                                <div>
                                    <button ><i className="fa fa-pencil-square-o" aria-hidden="true"></i> </button>
                                    <button className='primaryIcon' onClick={() => handleDelete(index)} > <i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>
        </div>

    )
}

export default Listado