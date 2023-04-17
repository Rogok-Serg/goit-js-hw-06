const categoriesEL = document.querySelectorAll('#categories');
const categoriesLeng = categoriesEL.forEach(el => {
  console.log("Number of categories:", el.children.length)
})
const itemEl = document.querySelectorAll('.item ul');
const itemLengthEl = itemEl.forEach(li=> {
  console.log(`Category:`, li.parentNode.firstElementChild.textContent)
  console.log("Elements:", li.children.length)
})