// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const valueEl = document.getElementById('value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function addValueBtnClick (event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
} 
function subtractValueBtnClick (event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
buttonDecrement.addEventListener('click', addValueBtnClick);
buttonIncrement.addEventListener('click', subtractValueBtnClick);
