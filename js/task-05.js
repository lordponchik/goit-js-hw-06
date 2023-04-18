const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  if (event.currentTarget.value[0] === ' ' || event.currentTarget.value === '') {
    outputNameEl.textContent = 'Anonymous';
  } else {
    outputNameEl.textContent = event.currentTarget.value;
  }
});
