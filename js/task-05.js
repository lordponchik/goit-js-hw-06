const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const valueInput = event.currentTarget.value;

  outputNameEl.textContent = valueInput.trim().length !== 0 ? valueInput.trim() : 'Anonymous';
});
