const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();  
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData  ={
    email,
    password,
  }
    if (email === '' || password === '') {
     return alert("Всі поля повинні бути заповнені")
    } 
    console.log(formData) 
    formEl.reset()
  }
  

