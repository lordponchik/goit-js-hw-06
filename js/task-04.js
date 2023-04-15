const counter = document.querySelector('#counter');
const decrementBtn = counter.querySelector('button[data-action="decrement"]');
const incrementBtn = counter.querySelector('button[data-action="increment"]');
const valueEl = counter.querySelector('#value');

let counterValue = 0;

updateValueEl();

function increment() {
  counterValue += 1;
  updateValueEl();
}
function decrement() {
  counterValue -= 1;
  updateValueEl();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function updateValueEl() {
  valueEl.textContent = counterValue;
}
