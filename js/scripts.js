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
function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    //event listener for button 
    button.addEventListener('click', function () {showDetails(pokemon);
});
}

function showDetails(pokemon){
    console.log(pokemon);
};

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
};
})();

//added forEach loop to call pokemonlist
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
