const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value.length === 0 || password.value.length === 0) {
    alert('Внимание! Все поля должны быть заполнены.');
  } else {
    const dataForm = {
      email: email.value,
      password: password.value,
    };

    console.log(dataForm);

    event.currentTarget.reset();
  }
});
