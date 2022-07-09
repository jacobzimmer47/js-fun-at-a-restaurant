
function nameMenuItem(item) {
  return `Delicious ${item}`

};

function createMenuItem(name, price, type) {
var menuItem = {
  name,
  price,
  type,
};
return menuItem;
};

function addIngredients(ingredientName, ingredients) {
for(var i = 0; i <= ingredients.length; i++ ) {
  if(ingredientName == ingredients[i])
  return;
};
ingredients[ingredients.length] = ingredientName;
return ingredients;
};

function formatPrice (price) {
return ('$' + price);
};

function decreasePrice (price) {
var newPrice = price - (.1 * price);
return newPrice;
};

function createRecipe (title, ingredients, type) {
var recipe = {
  title,
  ingredients,
  type
};
recipe.title = title;
recipe.ingredients = ingredients;
recipe.type = type;
return recipe;
}





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
