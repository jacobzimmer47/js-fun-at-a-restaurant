
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

function formatPrice (name, type, price) {
  var menuItem = {
    name,
    price,
    type,
};
return ("$" + menuItem.price);
};




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
