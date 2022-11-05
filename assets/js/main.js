const pokemonList = document.getElementById("pokemon-list");
const LoadMoreButton = document.getElementById("loadMoreButton")


const limit = 5
let offset = 0
const maxRecords = 151

function loadPokemonItems(offset, limit){

  pokeApi.getPokemons(offset, limit).then((pokemons) => {
    const newHtml = pokemons.map((pokemon) => `
      <li class="pokemon ${pokemon.type}">
          <span class="pokemon-number">#${pokemon.number}</span>
          <span class="pokemon-name">${pokemon.name}</span>
          <div class="details">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}" class="detail-image">
          </div>
      </li>
      `).join('')

    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItems(offset ,limit )

LoadMoreButton.addEventListener("click", () => {
  offset += limit

  const qtdRecordNextPage = offset + limit;

  if(qtdRecordNextPage >= maxRecords){
    const newLimit = qtdRecordNextPage - maxRecords
    loadPokemonItems(offset, newLimit)

    LoadMoreButton.parentElement.removeChild(LoadMoreButton);
  } else{
    loadPokemonItems(offset, limit)
  }
})


