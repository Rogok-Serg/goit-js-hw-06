/*Напиши скрипт, який під час втрати фокусу на
 інпуті (подія blur), перевіряє його вміст щодо
  правильної кількості введених символів.

  Яка кількість символів повинна бути в інпуті, 
  зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то 
border інпуту стає зеленим, якщо неправильна 
кількість - червоним.
Для додавання стилів використовуй CSS-класи 
valid і invalid, які ми вже додали у вихідні 
файли завдання.
*/
const inputLength = document.querySelector('[data-length="6"]');
// const inputValid = document.getElementById('validation-input')


inputLength.addEventListener('blur', checksLengthInput);
function checksLengthInput(event) {
  console.log(Number(inputLength.dataset.length))
  console.log(event.currentTarget.value.length)
  if (event.currentTarget.value.trim().length === Number(inputLength.dataset.length)) {
    inputLength.classList.add('valid')
    inputLength.classList.remove('invalid')
  } else {
    inputLength.classList.add('invalid')
    inputLength.classList.remove('valid')
  }
}

