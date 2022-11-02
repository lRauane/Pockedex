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

const pokemonList = document.getElementById("pokemon-list")

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToLi(pokemon)
    }
  })
  .catch((error) => console.log(error));
