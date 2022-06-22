import axios from 'axios';
import React, { useEffect, useState } from 'react';
import usePokemon from '../hooks/usePokemon';

function Listado() {

    const { searchPokemons, pokemons, setPokemons, deletePokemon, getPokemons } = usePokemon();

    const handleDelete = async (id) => {
        await deletePokemon(id)
        getPokemons()
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
                                    <button className='primaryIcon' onClick={() => handleDelete(list.id)} > <i className="fa fa-trash-o" aria-hidden="true"></i></button>
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