'use strict';

const addElement = (inputs) => {
  const elementsBlock = document.querySelector('.elements__items');
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
  elementsBlock.append(newElement);
  const elements = document.querySelectorAll('.elements__item');
  elements.forEach((element) => {
    element.classList.remove('active');
  });
  newElement.classList.add('active');
  newElement.classList.add('visible');

  let elementName = newElement.children[1].children[0].textContent;
  let elementDescription = newElement.children[1].children[1].textContent;

  inputs[0].value = elementName;
  inputs[1].value = elementDescription;
};

export default addElement;
