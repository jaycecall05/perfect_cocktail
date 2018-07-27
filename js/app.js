// instanciate the class
const ui = new UI(),
    cocktail = new CocktailAPI();

// create event listener
function eventListeners() {

    //add event listener when form is submitted
    const searchForm = document.querySelector('#search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', getCocktails);

    }

    const resultsDiv = document.querySelector('#results');
    if(resultsDiv) {
        resultsDiv.addEventListener('click', resultsDelegation)
    }
}

eventListeners();


function getCocktails(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;

    // check if something is in search input
    if (searchTerm === '') {
        // call user interface in message
        ui.printMessage('Please add something into the form', 'danger');
    } else {

        let serverResponse;

        const type = document.querySelector('#type').value;

        switch(type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName( searchTerm );
                break;
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient(searchTerm);
                break;
            }

            ui.clearResults();

        //query by name of drink
        
            serverResponse.then(cocktails => {
                if(cocktails.cocktails.drinks === null) {
                    // nothing exists
                    ui.printMessage('There\'re no results, try a different term ', 'danger');
                } else {    
                    if(type === 'name') {
                        ui.displayDrinksWithIngredients( cocktails.cocktails.drinks );
                    } else {
                        ui.displayDrinks(cocktails.cocktails.drinks);
                    }
                    } 
                }
            )

    }
}
// Delegation for the #resutls
function resultsDelegation(e) {
    e.preventDefault();

    if(e.target.classList.contains('get-recipe')) {
        cocktail.getSingleRecipe(e.target.dataset.id)
                .then(recipe => {
                    console.log(recipe);
                })
    }

}