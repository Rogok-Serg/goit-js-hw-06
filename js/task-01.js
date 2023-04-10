const categoriesEL = document.querySelectorAll('#categories');
const categoriesLeng = categoriesEL.forEach(el => {
  console.log("Number of categories:", el.children.length)
})
const itemEl = document.querySelector('.item');
console.log(itemEl)
const itemElLeng = itemEl.forEach(elem => {
  console.log(`Category: ${itemEl.h2.textContent}`)
})

