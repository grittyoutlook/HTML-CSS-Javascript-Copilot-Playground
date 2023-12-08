// Function to toggle the visibility of ingredients
function toggleIngredients() {
    var ingredientsList = document.getElementById("ingredients-list");
    if (ingredientsList.style.display === "none") {
        ingredientsList.style.display = "block";
    } else {
        ingredientsList.style.display = "none";
    }
}
