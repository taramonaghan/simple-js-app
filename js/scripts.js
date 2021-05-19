let pokemonList = [
  {
    name: "Bulbasaur", 
    height: 0.7, 
    type: ['grass', 'poison']
  },
  {
    name: "Ivysaur",
    height: 1,
    type: ['grass', 'poison']
  },
  {
    name: "Vensaur",
    height: 2,
    type: ['grass', 'poison']
  }
];

function myPokemonList(pokemon) {
    console.log(pokemon.name + pokemon.height + pokemon.type);
}
pokemonList.forEach(myPokemonList); 




