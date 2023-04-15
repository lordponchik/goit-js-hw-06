const categoriesEl = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesEl.children.length}`);
console.log();

[...categoriesEl.children].forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);

  console.log();
});
