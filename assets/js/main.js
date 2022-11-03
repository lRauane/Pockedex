const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
  <span class="pokemon-number">#001</span>
  <span class="pokemon-name">${pokemon.name}</span>
  <div class="details">
    <ol class="types">
      <li class="type">grass</li>
      <li class="type">orizon</li>
    </ol>
    <img src="./assets/001Bulbasaur_OS_Anime_3.webp" alt="${pokemon.name}" class="detail-image">
  </div>
</li>
  `;
}

const pokemonList = document.getElementById("pokemon-list");

// Manipulando listas
// Requisições http
pokeApi.getPokemons().then((pokemons) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') // converter em string
});
