document.addEventListener('DOMContentLoaded', function(e) {
        handleOnSearchSubmit()
    })
    //function handle for search pokemon
function handleOnSearchSubmit() {
    const form = document.getElementById('pokemon-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        //sice targer is the whole form to find the specific element use attribute and it s value
        let pokemonName = e.target['search-input'].value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
            //
            .then(res => res.json())
            .then(pokemon => console.log('@@pokemon', pokemon))
            //console.log('@@event', pokemonName)
    })

}