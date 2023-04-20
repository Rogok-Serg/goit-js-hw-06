const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients");
ingredients.map((ingredient) => {
  const items = []
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item")
  items.push(liEl)
  ulEl.append(...items)
})
console.log(ulEl)