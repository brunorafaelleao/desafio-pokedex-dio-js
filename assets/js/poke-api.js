const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Itera sobre a lista de Pokémons e exibe no console
    data.results.forEach((pokemon) => {
      console.log(pokemon.name); // Exibe o nome de cada Pokémon
    });
  })
  .catch((error) => console.error("Erro ao buscar os Pokémons:", error));
