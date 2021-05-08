let pokemonList = [{
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
  }]

 // added loop with conditional to highlight bigger pokemon
 for (let i=0; i < pokemonList.length; i++){
    if(pokemonList[i].height > 1){
      console.log(pokemonList[i].name + " height: " + pokemonList[i].height + " Wow, that's big!")
    }else if (pokemonList[i].height <= 1){
      console.log(pokemonList[i].name + " height: " + pokemonList[i].height)
    }
  }
