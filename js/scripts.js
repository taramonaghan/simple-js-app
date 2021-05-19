//added IIFE
let pokemonRepository = (function () {
  let pokemonList = [
  {
    name: "Bulbasaur", 
    height: 0.7, 
    type: [' grass ', ' poison ']
  },
  {
    name: "Ivysaur",
    height: 1,
    type: [' grass ', ' poison ']
  },
  {
    name: "Vensaur",
    height: 2,
    type: [' grass ', ' poison ']
  }
];

function getAll() {
  return pokemonList;
}

function add(pokemon) {
    pokemonList.push(pokemon);
}

return {
    getAll: getAll,
    add: add
};
})();

//added forEach loop to call pokemonlist
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + ' height: ' + pokemon.height + ' type: ' + pokemon.type);
});




