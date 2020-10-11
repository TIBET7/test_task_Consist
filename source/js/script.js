'use strict';

import checkAll from './modules/checkAll.js';
import deleteCheckedElements from './modules/deleteElement.js';
import activateElement from './modules/activateElement.js';
import addElement from './modules/addElement.js';
import filterElements from './modules/filterElements.js';
import disableFormInputs from './modules/disableFormInputs.js';

const mainCheckbox = document.querySelector('.check__input--main');
let checkboxes = document.querySelectorAll('.check__input--element');
const elements = document.querySelectorAll('.elements__item');
const visibleElements = document.querySelectorAll('.elements__item.visible');
const hiddenElements = document.querySelectorAll('.elements__item.hidden');
const elementsMainBlocks = document.querySelectorAll('.elements__item-main');
const nameInput = document.querySelector('.editor__element-name');
const descriptionInput = document.querySelector('.editor__element-description');
const editorCheckbox = document.querySelector('.check__input--editor')
const addBtn = document.querySelector('.button--add');
const deleteBtn = document.querySelector('.button--delete');
const hiddenElementsBtn = document.querySelector('.button--hidden');
const visibleElementsBtn = document.querySelector('.button--visible');
const elementsBlock = document.querySelector('.elements__items');
const form = document.querySelector('.editor__form');

activateElement(elements, elementsMainBlocks, nameInput, descriptionInput, editorCheckbox);

addElement(addBtn, elementsBlock, '.elements__item', nameInput, descriptionInput);

checkAll(mainCheckbox, checkboxes);

filterElements(hiddenElementsBtn, visibleElementsBtn, hiddenElements);
filterElements(visibleElementsBtn, hiddenElementsBtn, visibleElements);

disableFormInputs(elements, nameInput, descriptionInput, editorCheckbox);

addBtn.addEventListener('click', () => {
  nameInput.disabled = false;
  descriptionInput.disabled = false;
  editorCheckbox.disabled = false;
  const updatedCheckboxes = document.querySelectorAll('.check__input--element');
  const updatedElements = document.querySelectorAll('.elements__item');
  const updatedVisibleElements = document.querySelectorAll('.elements__item.visible');
  const updatedElementsMainBlocks = document.querySelectorAll('.elements__item-main');
  checkAll(mainCheckbox, updatedCheckboxes);
  activateElement(updatedElements, updatedElementsMainBlocks, nameInput, descriptionInput, editorCheckbox);
  filterElements(visibleElementsBtn, hiddenElementsBtn, updatedVisibleElements);
});

deleteBtn.addEventListener('click', () => {
  const updatedCheckboxes = document.querySelectorAll('.check__input--element');
  const updatedElements = document.querySelectorAll('.elements__item');
  const updatedVisibleElements = document.querySelectorAll('.elements__item.visible');
  const updatedElementsMainBlocks = document.querySelectorAll('.elements__item-main');
  checkAll(mainCheckbox, updatedCheckboxes);
  activateElement(updatedElements, updatedElementsMainBlocks, nameInput, descriptionInput, editorCheckbox);
  deleteCheckedElements(updatedCheckboxes, elementsBlock);
  filterElements(visibleElementsBtn, hiddenElementsBtn, updatedVisibleElements);
  nameInput.value = '';
  descriptionInput.value= '';
  editorCheckbox.checked = false;
  nameInput.disabled = true;
  descriptionInput.disabled = true;
  editorCheckbox.disabled = true;
});







// elements.forEach((element) => {
//   if (!element.classList.contains('.active')) {
//     nameInput.disabled = true;
//     descriptionInput.disabled = true;
//   }
// });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataObject = Object.fromEntries(formData);
  console.log(formDataObject);
});

form.addEventListener('reset', (event) => {
  elements.forEach((element) => {
    if (element.classList.contains('active')) {
      nameInput.value = elementChildren[0].textContent;
      descriptionInput.value = elementChildren[1].textContent;
    }
  })
});






// resetBtn.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   nameInput.value = elementChildren[1].textContent;
    //   descriptionInput.value = elementChildren[2].textContent;
    // });
    // submitBtn.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   elementChildren[1].textContent = nameInput.value;
    //   elementChildren[2].textContent = descriptionInput.value;
    // });





















