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
    //Get recipies by ingredients
    async getDrinksByIngredient(ingredient) {
        
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
    //get single recipe
    async getSingleRecipe(id) {
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const recipe = await apiResponse.json();
        return {
            recipe
        }
    }
}