const searchInput = document.querySelector(".recherche-poke input");

// Animation Input

searchInput.addEventListener("input", function (e) {
  if (e.target.value !== "") {
    e.target.parentNode.classList.add("active-input");
  } else if (e.target.value === "") {
    e.target.parentNode.classList.remove("active-input");
  }
});


function fetchTest() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then(reponse => reponse.json())
  .then((allPokemon) => {
    console.log(allPokemon);
  })
}

fetchTest();