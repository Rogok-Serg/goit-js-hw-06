function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBodyColor = document.querySelector('body')
const btnChangeColor = document.querySelector('.change-color')
const nameColor = document.querySelector('.color')
console.log(changeBodyColor)
console.log(btnChangeColor)
console.log(nameColor)
btnChangeColor.addEventListener('click', onChangeBodyColor)
function onChangeBodyColor() {
  nameColor.textContent = getRandomHexColor()
  changeBodyColor.style.backgroundColor = getRandomHexColor()
}