const poke_container = document.getElementById('poke-container')
const pokemon_count = 6
const colors = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: 'fcf7de',
    water: 'def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    ground: '#f4e7da',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',

}

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)

    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()

    createPokemonCard()

    // console.log(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    //  Broken page pokers.bastion?
 // <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}" alt="">

    const pokemonInnerHTML = `
    <div class="img-container">
       
        <img src="https://cdn2.bulbagarden.net/upload/2/21/001Bulbasaur.png" alt="">
    </div>
    <div class="info">
        <span class="number">#001</span>
        <h3 class="name"></h3>
        <small class="type">Type: <span>grass</span> </small>
    </div>
`
    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}

fetchPokemons()