// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`

//     return fetch(url)
//     .then((response) =>  response.json())
//     // .then(() => {throw new Error('Pokemon does not exist')})
//     .then((pokemon) => pokemon.name)
// }

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const resp = await fetch(url);

    const pokemon = await resp.json()

    throw new Error('Pokemon does not exist!')

    return pokemon.name

}

module.exports = getPokemonById