const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');

  return itemEl;
});

ingredientsEl.append(...ingredientEl);
