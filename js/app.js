// instanciate the class


// create event listener
function eventListeners() {

    //add event listener when form is submitted
    const searchForm = document.querySelector('#search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', getCocktails);

    }
}

eventListeners();


function getCocktails(e) {
    e.preventDefault();

    console.log('click');
}