// instanciate the class
const ui = new UI();

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

    const searchTerm = document.querySelector('#search').value;

    // check if something is in search input
    if (searchTerm === '') {
        // call user interface in message
        ui.printMessage('Please add something into the form', 'danger');
    } else {
        console.log('Query the REST API');
    }
}