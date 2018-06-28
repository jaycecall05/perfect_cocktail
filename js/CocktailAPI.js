class CocktailAPI {
    // get recipe by name
    async getDrinksByName(name) {

        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        
        // return a json respone
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
}