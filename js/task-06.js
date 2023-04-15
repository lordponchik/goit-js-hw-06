const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  const input = event.currentTarget;

  const validation = input.value.length === Number(input.dataset.length) ? 'valid' : 'invalid';

  if (!input.hasAttribute('class')) {
    input.classList.add(validation);
  }

  if (input.getAttribute('class') !== validation) {
    input.classList.replace(input.getAttribute('class'), validation);
  }
});
