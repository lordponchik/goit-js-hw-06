const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const valueInput = event.currentTarget.value;
  if (valueInput.trim().length !== 0) {
    outputNameEl.textContent = valueInput.trim();
  } else if (valueInput.length === 0 || valueInput[0] === ' ') {
    outputNameEl.textContent = 'Anonymous';
  }
});
