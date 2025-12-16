// alert("Carregando Pokedex...");
console.log("Pokedex carregada com sucesso!");

const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";
const pokemonList = document.getElementById("lista-pokemon");

function convertPokemonToLi(pokemon) {
  return `<li class="pokemon ${pokemon.types[0].type.name}">
          <p class="nome">${pokemon.name}</p>
          <img
            src="${pokemon.sprites.other.dream_world.front_default}"
            alt="img-bulbasaur"
          />
        </li>`;
}

function getPokemonDetalhes(pokemon) {
  return fetch(pokemon.url).then((response) => response.json());
}

fetch(url)
  .then((response) => response.json())
  .then((list) => list.results.map(getPokemonDetalhes))
  .then((detalhes) => Promise.all(detalhes))
  .then(
    (NovaLista) =>
      (pokemonList.innerHTML = NovaLista.map(convertPokemonToLi).join(""))
  )
  .catch((error) => console.error("Erro ao buscar os Pokémons:", error));

// fetch(url)
//   .then((response) => response.json())
//   .then(
//     (list) =>
//       (pokemonList.innerHTML = list.results.map(convertPokemonToLi).join(""))
//   )
//   .catch((error) => console.error("Erro ao buscar os Pokémons:", error));

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     // Itera sobre a lista de Pokémons e exibe no console
//     data.results.forEach((pokemon) => {
//       console.log(pokemon.name); // Exibe o nome de cada Pokémon
//     });
//   })
//   .catch((error) => console.error("Erro ao buscar os Pokémons:", error));
