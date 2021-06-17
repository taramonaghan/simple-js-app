//added IIFE
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('modal-container');

    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.list-group');
        let listPokemon = document.createElement('li');
        listPokemon.classList.add('list-group' , 'list-group-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn , btn-primary');
        button.setAttribute('data-target', '#exampleModal', 'modal', 'data-toggle');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        //event listener for button 
        button.addEventListener('click', function () {
            showDetails(pokemon)
        });
    }
    //fetches results from API
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })

    }
    //fetches details of pokemon
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }
    //modal
    function showModal(pokemon) {
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");

        modalTitle.empty();
        modalBody.empty();
        
        //create element for name in modal content  
        let nameElement = $("<h1>" + pokemon.name + "</h1>");
        //create in modal content  
        let imageElement = $(pokemon.imageUrl);
        //create element for height in modal content  
        let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
        
        //add elements for weight type abilities img front and back here
        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalContainer.appendChild(modal);
    }
    //returns data
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    };
})();

//added forEach loop to call pokemonlist
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});