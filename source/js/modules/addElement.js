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
    let elementName = newElement.children[1].children[0].textContent;
    let elementDescription = newElement.children[1].children[1].textContent;

    firstInput.value = elementName;
    secondInput.value = elementDescription;
    const form = document.querySelector('.editor__form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formDataObject = Object.fromEntries(formData);
      console.log(formDataObject);
      newElement.children[1].children[0].textContent = formDataObject.name;
      newElement.children[1].children[1].textContent = formDataObject.description;
      console.log(newElement.children[1].children[0].textContent);
      console.log(newElement.children[1].children[1].textContent);
    });
    form.addEventListener('reset', (event) => {
      event.preventDefault();
      firstInput.value = elementName;
      secondInput.value = elementDescription;
    });
  });
};

export default addElement;
