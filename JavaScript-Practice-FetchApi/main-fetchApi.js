window.onload = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data) => {
      let pokemonList = data.results.slice(0, 6);
      let ul = document.getElementById("theList");

      pokemonList.forEach((pokemon) => {
        let li = document.createElement("li");
        li.textContent = pokemon.name;
        li.addEventListener("click", () => fetchPokemonDetails(pokemon.url));
        ul.appendChild(li);
      });
    })
    .catch(() => alert("Something wrong with the Pokemon data"));
};
function fetchPokemonDetails(url) {
  fetch(url)
    .then((res) => res.json())
    .then((pokemonData) => {
      console.log(pokemonData);
      displayPokemonDetails(pokemonData);
    })
    .catch(() => alert("Something wrong with getting your Pokemon details"));
}
function displayPokemonDetails(pokemon) {
  let detailsDiv = document.createElement("div");
  detailsDiv.classList.add("pokemon-details");
  let name = document.createElement("p");
  name.textContent = pokemon.name;
  detailsDiv.appendChild(name);
  let img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;
  img.title = "the best pokemon";
  detailsDiv.appendChild(img);
  let height = document.createElement("p");
  height.textContent = "Height: " + pokemon.height;
  detailsDiv.appendChild(height);
  let weight = document.createElement("p");
  weight.textContent = "Weight" + pokemon.weight;
  detailsDiv.appendChild(weight);
  let types = document.createElement("p");
  types.textContent =
    "Types: " + pokemon.types.map((type) => type.type.name).join(", ");
  detailsDiv.appendChild(types);
  let existingDetails = document.querySelector(".pokemon-details");
  if (existingDetails) {
    existingDetails.remove();
  }
  document.body.appendChild(detailsDiv);
}
