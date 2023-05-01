function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createBtn = controlsEl.querySelector('button[data-create]');
const destroyBtn = controlsEl.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  createBoxes(inputEl.value);
});
destroyBtn.addEventListener('click', destroyBoxes);

inputEl.addEventListener('blur', event => {
  const input = event.currentTarget;

  if (!Number(input.value) || Number(input.value) < input.min || Number(input.value) > input.max) {
    alert(`Разрешен ввод чисел только с 1 до 100.`);
    input.value = '';
  }
});

function createBoxes(amount) {
  let sizeBox = 30;
  let renderBoxes = '';

  for (let i = 1; i <= amount; i += Number(inputEl.step)) {
    renderBoxes += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()};"></div>`;
    sizeBox += 10;
  }

  boxesEl.insertAdjacentHTML('beforeend', renderBoxes);
  inputEl.value = '';
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
