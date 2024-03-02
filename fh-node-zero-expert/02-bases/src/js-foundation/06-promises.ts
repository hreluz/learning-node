// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`

//     return fetch(url)
//     .then((response) =>  response.json())
//     // .then(() => {throw new Error('Pokemon does not exist')})
//     .then((pokemon) => pokemon.name)
// }

const {http} = require('../plugins')

export const getPokemonById = async(id: string|number):Promise<string> => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    
        const pokemon = await http.get(url);
    
        return pokemon.name

    } catch(error) {
        throw (`Pokemon not found with id ${id}`)
    }
}