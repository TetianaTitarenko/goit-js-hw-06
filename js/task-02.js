const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients")

const createIngredients = options => {
  return options.map(ingredient => {
  const liEl = document.createElement("li")
  liEl.textContent = ingredient
  return liEl
})
}

const el = createIngredients(ingredients)

ingredientsEl.append(...el)

