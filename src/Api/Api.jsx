import axios from "axios";

export async function getPokemons() {
    const response = await axios.get('https://bp-pokemons.herokuapp.com/?idAuthor=1');
    return response.data
}

export async function deletePokemon(id) {
    const data = await axios.delete(`https://bp-pokemons.herokuapp.com/${id}`)
}
export async function createPokemons(data) {
    const createList = await axios.post('https://bp-pokemons.herokuapp.com/?idAuthor=1', data);
}
export async function updatePokemon(id, data) {
    const update = await axios.put(`https://bp-pokemons.herokuapp.com/${id}`, data)
}
export async function consultPokemon(id) {
    const consult = await axios.get(`https://bp-pokemons.herokuapp.com/${id}`)
    return consult.data
}