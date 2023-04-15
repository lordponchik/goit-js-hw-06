const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  outputNameEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    outputNameEl.textContent = 'Anonymous';
  }
});
