const recipes = {
    "Spaghetti Carbonara": {
        ingredients: "Spaghetti, Eggs, Cheese, Pancetta, Black Pepper",
        instructions: "1. Cook spaghetti. 2. Mix eggs and cheese. 3. Fry pancetta. 4. Combine all with pepper."
    },
    "Chicken Curry": {
        ingredients: "Chicken, Curry powder, Coconut milk, Onion, Garlic",
        instructions: "1. Fry onion and garlic. 2. Add chicken and curry powder. 3. Add coconut milk. 4. Simmer until chicken is cooked."
    },
    "Caesar Salad": {
        ingredients: "Lettuce, Croutons, Caesar dressing",
        instructions: "1. Toss lettuce with dressing. 2. Add croutons and serve."
    }
};

function searchRecipes() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const recipesContainer = document.getElementById('recipesContainer');
    const allRecipes = recipesContainer.getElementsByClassName('recipe');

    for (let i = 0; i < allRecipes.length; i++) {
        let recipe = allRecipes[i];
        let recipeName = recipe.getAttribute('data-name').toLowerCase();
        if (recipeName.includes(input)) {
            recipe.style.display = '';
        } else {
            recipe.style.display = 'none';
        }
    }
}

function showRecipeDetails(recipeName) {
    const recipe = recipes[recipeName];
    document.getElementById('recipeTitle').textContent = recipeName;
    document.getElementById('recipeIngredients').textContent = "Ingredients: " + recipe.ingredients;
    document.getElementById('recipeInstructions').textContent = "Instructions: " + recipe.instructions;

    const modal = document.getElementById('recipeDetailsModal');
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('recipeDetailsModal');
    modal.style.display = "none";
}
