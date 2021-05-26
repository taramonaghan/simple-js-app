//added IIFE
let pokemonRepository = (function () {
  let pokemonList = [];

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
