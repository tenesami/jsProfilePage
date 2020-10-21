document.addEventListener('DOMContentLoaded', function(e) {
    handleOnSearchSubmit()
})

//class that will take the search and store it to object 
//to keep track of the pokemon searched by setting propery
class Pokemon {
    constructor(pokemonData) {
        this.pokedexId = pokemonData.id
        this.name = pokemonData.name
        this.height = pokemonData.height
        this.weight = pokemonData.weight
    }
}
//function handle for search pokemon
function handleOnSearchSubmit() {
    const form = document.getElementById('pokemon-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        //sice targer is the whole form to find the specific element use attribute and it s value

        //console.log('@@event', e.target['search-input'].value)
        let pokemonName = e.target['search-input'].value.toLowerCase();

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)

        .then(res => res.json())
            //.then(pokemon=> console.log('@@pokemon', pokemon))


        //.then(pokemonData => console.log('@@pokemon', new Pokemon(pokemonData)))
        .then(pokemonData => {
            const newPokemon = new Pokemon(pokemonData)

            let profileDiv = document.getElementById('profile')
            let headerDiv = document.getElementById('header')
            profileDiv.innerHTML = `
                <h2>PROFILE</h2>
                <ul>
                    <li>Name: ${newPokemon.name}</li>
                    <li>Height: ${newPokemon.height}</li>
                    <li>Weight: ${newPokemon.weight}</li>
                </ul/>
                `
            headerDiv.innerHTML = `
                <h1>Name: ${newPokemon.name}  ID: #${newPokemon.pokedexId} </h1>`
        })

    })

}