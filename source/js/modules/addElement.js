'use strict';

const addElement = (addButton, parentElement, elementSelector, firstInput, secondInput) => {
  addButton.addEventListener('click', () => {
    const newElement = document.createElement('li');
    newElement.classList.add('elements__item');
    newElement.innerHTML = `<div class="elements__item-checkbox">
    <label class="check">
      <input type="checkbox" class="check__input check__input--element visually-hidden" name="header-checkbox">
      <span class="check__box"></span>
    </label>
  </div>
  <div class="elements__item-main">
    <div class="elements__item-name">Без названия</div>
  <div class="elements__item-description"></div>
  <div class="elements__item-visibility"></div>
  </div>`;
  parentElement.append(newElement);
  const updatedElements = document.querySelectorAll(elementSelector);
  updatedElements.forEach((element) => {
    element.classList.remove('active');
  });
  newElement.classList.add('active');
  newElement.classList.add('visible');
  firstInput.value = newElement.children[1].children[0].textContent;
  secondInput.value = newElement.children[1].children[1].textContent;
  });
};

export default addElement;
