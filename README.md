<h1 id="home">Homework :clipboard:</h1>

## goit-js-hw-06


* 🇺🇸 [English](#en)
* 🇺🇦 [Ukrainian](#uk)
* 🇷🇺 [Russian](#ru)

--- 

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- `goit-js-hw-06` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- All tasks are completed strictly according to the specifications (do not change the original HTML in the task).
- During live page visits, there are no errors or warnings generated in the console.
- Clear and descriptive names of variables and functions.
- Code formatted with `Prettier`.

## Start files

In the [src folder](./src), you will find start files with ready-made markup and added script files for each task. Copy them to your project. To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.

## Task 1

In HTML, there is a list of categories, `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Write a script that:

1. Will count and display in the console the number of categories in `ul#categories`, that is, `li.item` elements.
2. For each `li.item` element in the `ul#categories` list, will find and display in the console the element header text (`<h2>` tag) and the number of elements in the category (all nested `<li>`).

As a result, the following messages will be displayed in the console.

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Task 2

In HTML, there is an empty `ul#ingredients` list.

```html
<ul id="ingredients"></ul>
```

In JavaScript, there is an array of strings.

```js
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
```

Write a script that, for each element in the `ingredients` array:

1. Will create a separate `<li>` element. Be sure to use the `document.createElement()` method.
2. Will add the ingredient name as the `<li>` element's text content.
3. Will add the `item` class to the `<li>` element.
4. Will insert all `<li>` elements to the `ul.ingredients` list in a single operation.

## Task 3

Write a script to create a gallery of images from an array of data. There is a list, `ul.gallery`, in HTML.

```html
<ul class="gallery"></ul>
```

Use an array of objects, `images`, to create `<img>` elements nested in `<li>`. Use template strings and the `insertAdjacentHTML()` method to create markup.

- All gallery items must be added to DOM in one insert operation.
- Add at least some gallery design with flexboxes or grids using CSS classes.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Task 4

The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

- Create a variable, `counterValue`, that will store the current counter value and initialize it with `0`.
- Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
- Update the interface with the new value of the variable `counterValue`.

## Task 5

Write a script that, when typing in the `input#name-input` input (`input` event), substitutes its current value into `span#name-output`. If the input is empty, the span should display the `"Anonymous"` string.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Task 6

Write a script that, when focus on input is lost (`blur` event), checks its contents for the correct number of entered characters.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- The number of characters in the input is specified in its `data-length` attribute.
- If the number of characters entered is correct, the input's `border` turns green, or red with a wrong number.

To add styles, use the `valid` and `invalid` CSS classes, which you can find in the task source files.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Task 7

Write a script that responds to changes in the value of `input#font-size-control` (`input` event) and changes the inline style of `span#text` by updating the `font-size` property. As a result, the text size will respond to scrollbar dragging by changing size.


```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Task 8

Write a script to manage the login form.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Form submission (`form.login-form`) must be processed on the `submit` event.
2. The page must not reload when the form is submitted.
3. If the form has empty fields, display an `alert` saying that all fields must be filled in.
4. As soon as the user has filled in all the fields and submitted the form, collect the field values into an object where the field name will be the property name and the field value will be the property value. Use the `elements` property to access form elements.
5. Display the object with the entered data in the console and clear the values of the form fields using the `reset` method.

## Task 9

Write a script that changes the background colors of the `<body>` element via inline style when clicking on `button.change-color` and outputs the color value to `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Use the `getRandomHexColor` function to generate a random color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Task 10 (optional)

Write a script to create and clear a collection of elements. The user enters the number of elements into `input` and clicks the `New` button, after which a collection is rendered. When you click on the `Clear` button, the collection is cleared.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Create a `createBoxes(amount)` function that takes one parameter, a number. The function creates as many `<div>` as specified in `amount` and adds them to `div#boxes`.

1. The dimensions of the very first `<div>` are 30px by 30px.
2. Each element after the first one should be 10px wider and higher than the previous one.
3. All elements must have a random hex background color. Use the ready-made `getRandomHexColor` function to get a color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

Create a `destroyBoxes()` function that clears the contents of `div#boxes`, thereby removing all created elements.

---
---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3> 			

# Критерії прийому

- Створено репозиторій `goit-js-hw-06`.
- При здачі домашньої роботи є два посилання: на вихідні файли та робочу
 сторінку на `GitHub Pages`.
- Завдання виконані строго по ТЗ (не можна змінювати вихідне HTML завдання).
- При відвідуванні живої сторінки завдання, в консолі немає помилок та попереджень.
- Імена змінних та функцій зрозумілі, описові.
- Код відформатовано `Prettier`.

## Стартові файли

[Скачай стартові файли](https://downgit.github.io/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/06/src)
з готовою розміткою та підключеними файлами скриптів для кожного завдання.
Скопіюй їх собі у проект.

## Завдання 1

HTML має список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт який:

1. Порахує та виведе в консоль кількість категорій у `ul#categories`, тобто елементів `li.item`.
2. Для кожного елемента `li.item` у списку `ul#categories`, знайде та виведе у консоль текст заголовка елемента (тега `<h2>`) і кількість елементів в категорії (всіх вкладених у нього `<li>`).

Для виконання цього завдання потрібно використовувати метод forEach() та властивості навігації по DOM.

У результаті консолі будуть виведені такі повідомлення.

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Завдання 2

HTML має порожній список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

JavaScript має масив рядків.

```js
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
```

Напиши скрипт, який для кожного елемента масиву `ingredients`:

1. Створить окремий елемент `<li>`. Обов'язково використовуй метод document.createElement()`.
2. Додасть назву інгредієнта як його текстовий вміст.
3. Додасть елементу клас `item`.
4. Після чого вставить все `<li>` за одну операцію до списку `ul.ingredients`.

## Завдання 3

Напиши скрипт для створення галереї зображень масиву даних. У HTML є список `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Використовуй масив об'єктів `images` для створення елементів `<img>` вкладених у `<li>`. Для створення розмітки використовуй шаблонні рядки та метод `insertAdjacentHTML()`.

- Усі елементи галереї повинні додаватися до DOM за одну операцію вставки.
- Додай мінімальне оформлення галереї флексбоксами або грід через CSS класи.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Завдання 4

Лічильник складається зі спану та кнопок, які, при кліку, повинні збільшувати та
зменшувати його значення на одиницю.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

- Створи змінну `counterValue` в якій зберігатиметься поточне значення
 лічильника та ініціалізуй її значенням `0`.
- Додай слухачі кліків на кнопки, всередині яких збільшуй чи зменшуй
 значення лічильника.
- Обновляй інтерфейс новим значенням змінної `counterValue`.

## Завдання 5

Напиши скрипт, який, при наборі тексту в інпуті `input#name-input` (подія
`input`), підставляє його поточне значення `span#name-output`. Якщо інпут
порожній, у спані повинен відображатися рядок `"Anonymous"`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Завдання 6

Напиши скрипт, який при втраті фокусу на інпуті (подія `blur`), перевіряє
його вміст на правильну кількість символів.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- Скільки символів має бути в інпуті, вказується у його атрибуті
 `data-length`.
- Якщо введено відповідну кількість символів, то 'border' інпуту стає
 зеленим, якщо неправильне – червоним.

Для додавання стилів, використовуй CSS-класи `valid` та `invalid`, які ми вже
додали у вихідні файли завдання.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Завдання 7

Напиши скрипт, який реагує на зміну значення `input#font-size-control`
(подія `input`) та змінює інлайн-стиль `span#text` оновлюючи властивість
`font-size`. В результаті при перетягуванні повзунка змінюватиметься розмір
тексту.

```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Завдання 8

Напиши скрипт управління формою логіну.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Обробка відправки форми `form.login-form` має бути за подією `submit`.
2. Під час надсилання форми сторінка не повинна перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь `alert` з попередженням про те,
 що всі поля мають бути заповнені.
4. Якщо користувач заповнив усі поля та відправив форму, збери значення полів у
 об'єкт, де ім'я поля буде ім'ям властивості, а значення поля – значенням
 властивості. Для доступу до елементів форми використовуй властивість `elements`.
5. Виведи об'єкт із введеними даними в консоль та очисти значення полів форми
 методом `reset`.

## Завдання 9

Напиши скрипт, який змінює кольори фону елемента `<body>` через інлайн стиль
при натисканні на `button.change-color` і виводить значення кольору в `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Для генерації випадкового кольору використовуй функцію `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Завдання 10 (виконувати не обов'язково)

Напиши скрипт створення та очищення колекції елементів. Користувач вводить
кількість елементів в `input` та натискає кнопку `Створити`, після чого
колекція рендерується. При натисканні на кнопку `Очистити`, колекція елементів
очищується.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Створи функцію createBoxes(amount), яка приймає один параметр - число.
Функція створює стільки `<div>`, скільки зазначено в `amount` і додає їх у
`div#boxes`.

1. Розміри першого `<div>` - 30px на 30px.
2. Кожен елемент після першого повинен бути ширшим і вище попереднього на 10px.
3. Усі елементи повинні мати випадковий колір тла у форматі HEX. Використовуй
 готову функцію `getRandomHexColor` для одержання кольору.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

Створи функцію `destroyBoxes()`, яка очищає вміст `div#boxes`, тим самим
самим видаляючи усі створені елементи.

---
---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3> 

# Критерии приема

- Создан репозиторий `goit-js-hw-06`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на `GitHub Pages`.
- Задания выполнены строго по ТЗ (нельзя изменять исходный HTML задания).
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Имена переменных и функций понятные, описательные.
- Код отформатирован `Prettier`.

## Стартовые файлы

[Скачай стартовые файлы](https://downgit.github.io/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/06/src)
с готовой разметкой и подключенными файлами скриптов для каждого задания.
Скопируй их себе в проект.

## Задание 1

В HTML есть список категорий `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт который:

1. Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
   элементов `li.item`.
2. Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
   консоль текст заголовка элемента (тега `<h2>`) и количество элементов в
   категории (всех вложенных в него `<li>`).

Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

В результате, в консоли будут выведены такие сообщения.

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Задание 2

В HTML есть пустой список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

В JavaScript есть массив строк.

```js
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
```

Напиши скрипт, который для каждого элемента массива `ingredients`:

1. Создаст отдельный элемент `<li>`. Обзательно используй метод
   `document.createElement()`.
2. Добавит название ингредиента как его текстовое содержимое.
3. Добавит элементу класс `item`.
4. После чего вставит все `<li>` за одну операцию в список `ul.ingredients`.

## Задание 3

Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть
список `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Используй массив объектов `images` для создания элементов `<img>` вложенных в
`<li>`. Для создания разметки используй шаблонные строки и метод
`insertAdjacentHTML()`.

- Все элементы галереи должны добавляться в DOM за одну операцию вставки.
- Добавь минимальное оформление галереи флексбоксами или гридами через CSS
  классы.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Задание 4

Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и
уменьшать его значение на единицу.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

- Создай переменную `counterValue` в которой будет храниться текущее значение
  счетчика и инициализируй её значением `0`.
- Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
  значение счтетчика.
- Обновляй интерфейс новым значением переменной `counterValue`.

## Задание 5

Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
`input`), подставляет его текущее значение в `span#name-output`. Если инпут
пустой, в спане должна отображаться строка `"Anonymous"`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Задание 6

Напиши скрипт, который при потере фокуса на инпуте (событие `blur`), проверяет
его содержимое на правильное количество введённых символов.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- Сколько символов должно быть в инпуте, указывается в его атрибуте
  `data-length`.
- Если введено подходящее количество символов, то `border` инпута становится
  зелёным, если неправильное - красным.

Для добавления стилей, используй CSS-классы `valid` и `invalid`, которые мы уже
добавили в исходные файлы задания.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Задание 7

Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
(событие `input`) и изменяет инлайн-стиль `span#text` обновляя свойство
`font-size`. В результате при перетаскивании ползунка будет меняться размер
текста.

```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Задание 8

Напиши скрипт управления формой логина.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Обработка отправки формы `form.login-form` должна быть по событию `submit`.
2. При отправке формы страница не должна перезагружаться.
3. Если в форме есть незаполненные поля, выводи `alert` с предупреждением о том,
   что все поля должны быть заполнены.
4. Если пользователь заполнил все поля и отправил форму, собери значения полей в
   обьект, где имя поля будет именем свойства, а значение поля - значением
   свойства. Для доступа к элементам формы используй свойство `elements`.
5. Выведи обьект с введенными данными в консоль и очисти значения полей формы
   методом `reset`.

## Задание 9

Напиши скрипт, который изменяет цвета фона элемента `<body>` через инлайн стиль
при клике на `button.change-color` и выводит значение цвета в `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Для генерации случайного цвета используй функцию `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

## Задание 10 (выполнять не обязательно)

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
количество элементов в `input` и нажимает кнопку `Создать`, после чего
рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
очищается.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Создай функцию `createBoxes(amount)`, которая принимает один параметр - число.
Функция создает столько `<div>`, сколько указано в `amount` и добавляет их в
`div#boxes`.

1. Размеры самого первого `<div>` - 30px на 30px.
2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй
   готовую функцию `getRandomHexColor` для получения цвета.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```

Создай функцию `destroyBoxes()`, которая очищает содержимое `div#boxes`, тем
самым удаляя все созданные элементы.
