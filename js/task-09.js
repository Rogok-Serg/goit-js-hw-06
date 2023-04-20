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
  const randomColor = getRandomHexColor();
  nameColor.textContent = randomColor
  changeBodyColor.style.backgroundColor = randomColor
}