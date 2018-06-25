class UI {

    // show a custome message
    printMessage(message, className) {
        const div = document.createElement('div');

        //add HTML
        div.innerHTML = `
            <div class="alert alert-dismissilble alert-${className}">
                <button type="button" class="close" data-dismiss="alert">x</button>
                ${message}
                </div>
            `;

            const reference = document.querySelector('.jumbotron h1');
            const parentNode = reference.parentElement;
            parentNode.insertBefore(div, reference);
    }
}