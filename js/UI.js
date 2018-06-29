class UI {



    displayDrinksWithIngredients(drinks) {
        const resultsWrapper = document.querySelector('.results-wrapper');
        resultsWrapper.style.display = 'block';


        //insert results
        const resultsDiv = document.querySelector('#results');

        drinks.forEach(drink => {
            resultsDiv.innerHTML += `
            
                <div class="col-md-6">
                    <div class="card my-3">
                        <img class="card-img-top" src="https://${drink.strDrinkThumb}" alt="${drink.strDrink}">
                
                        <div class="card-body">
                            <h2 class="card-title text-center"></h2>
                            <p class="card-text font-weight-bold">Instructions: </p>
                            <p class="card-text">

                            </p>
                            <p class ="card-text">
                                <ul class="list-group">    
                                    <li class="list-group-item alert
                                    alert-danger">Ingredients</li>

                                <ul>
                            </p>
                            <p class="card-text font-weight-bold">Exta Information</p>
                            <p class="card-text">
                                <span class="badge badge-pill badge-success">

                                </span>
                                <span class="badge badge-pill badge-warning">
                                    Category:
                                </span>
                        </div>
                    </div>
                </div>
            

            `;
        })
    }
    // show a custome message
    printMessage(message, className) {
        const div = document.createElement('div');

        //add HTML
        div.innerHTML = `
            <div class="alert alert-dismissible alert-${className}">
                <button type="button" class="close" data-dismiss="alert">x</button>
                ${message}
                </div>
            `;

        const reference = document.querySelector('.jumbotron h1');
        const parentNode = reference.parentElement;
        parentNode.insertBefore(div, reference);

        // remove after 4 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 4000);
    }
}