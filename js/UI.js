class UI {

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