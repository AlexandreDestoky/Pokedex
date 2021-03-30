const searchInput = document.querySelector(".recherche-poke input");

// Animation Input
let allPokemon = [];
let tableauFin = [];

searchInput.addEventListener("input", function (e) {
  if (e.target.value !== "") {
    e.target.parentNode.classList.add("active-input");
  } else if (e.target.value === "") {
    e.target.parentNode.classList.remove("active-input");
  }
});

function fetchTest() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((reponse) => reponse.json())
    .then((allPokemon) => {
      // console.log(allPokemon);
      allPokemon.results.forEach((pokemon) => {
        fetchPokemonComplet(pokemon);
      });
    });
}

fetchTest();

function fetchPokemonComplet(pokemon) {
  let objPokemonFull = {};
  let url = pokemon.url;
  let nameP = pokemon.name;

  fetch(url)
    .then((reponse) => reponse.json())
    .then((pokeData) => {
      // console.log(pokeData);

      objPokemonFull.pic = pokeData.sprites.front_default;
      objPokemonFull.type = pokeData.types[0].type.name;
      objPokemonFull.id = pokeData.id;

      fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
        .then((reponse) => reponse.json())
        .then((pokeData) => {
          console.log(pokeData);

          objPokemonFull.name = pokeData.names[4].name;
          allPokemon.push(objPokemonFull);

          if (allPokemon.length === 151) {
            console.log(allPokemon);
          }
        });
    });
}
