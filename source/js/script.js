'use strict'

import setBasicStateDisabledControls from './modules/basicDisabledControls.js';
import activateElement from './modules/activateElement.js';
import addElement from './modules/addElement.js';
import filterVisibleElements from './modules/filterVisibleElements.js';
import filterHiddenElements from './modules/filterHiddenElements.js';
import deleteElements from './modules/deleteElements.js';
import checkCheckboxes from './modules/checkCheckboxes.js';
import checkMainCheckbox from './modules/checkMainCheckbox.js';
import setElementsToLocalStorage from './modules/setElementsToLocalStorage.js';


const mainCheckbox = document.querySelector('.check__input--main');
const checkboxes = document.querySelectorAll('.check__input--element');
const nameInput = document.querySelector('.editor__element-name');
const descriptionInput = document.querySelector('.editor__element-description');
const editorCheckbox = document.querySelector('.check__input--editor')
const inputs = [nameInput, descriptionInput, editorCheckbox];
const form = document.querySelector('.editor__form');
const submitBtn = document.querySelector('.editor__submit');
const resetBtn = document.querySelector('.editor__reset');
const addBtn = document.querySelector('.button--add');
const deleteBtn = document.querySelector('.button--delete');
const hiddenElementsBtn = document.querySelector('.button--hidden');
const visibleElementsBtn = document.querySelector('.button--visible');
const basicDisabledButtons = [submitBtn, resetBtn, deleteBtn];
const formButtons = [submitBtn, resetBtn, deleteBtn];

setBasicStateDisabledControls(inputs, basicDisabledButtons);

checkMainCheckbox(mainCheckbox, deleteBtn, checkboxes);

activateElement(inputs, formButtons);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const elements = document.querySelectorAll('.elements__item');
  const formData = new FormData(event.target);
  const formDataObject = Object.fromEntries(formData);
  elements.forEach((element) => {
    if (element.classList.contains('active')) {
      element.children[1].children[0].textContent = formDataObject.name;
      element.children[1].children[1].textContent = formDataObject.description;
    }
  });
  setElementsToLocalStorage();
});

form.addEventListener('reset', (event) => {
  event.preventDefault();
  const elements = document.querySelectorAll('.elements__item');
  elements.forEach((element) => {
    if (element.classList.contains('active')) {
      let elementName = element.children[1].children[0].textContent;
      let elementDescription = element.children[1].children[1].textContent;
      inputs[0].value = elementName;
      inputs[1].value = elementDescription;
    }
  });
});

checkCheckboxes(deleteBtn);

deleteBtn.addEventListener('click', () => {
  const elementsBlock = document.querySelector('.elements__items');
  deleteElements(elementsBlock, inputs, formButtons, deleteBtn, mainCheckbox);
  checkCheckboxes(deleteBtn);
  checkMainCheckbox(mainCheckbox, deleteBtn, checkboxes);
  setElementsToLocalStorage();
});

addBtn.addEventListener('click', () => {
  addElement(inputs);
  const checkboxes = document.querySelectorAll('.check__input--element');
  checkMainCheckbox(mainCheckbox, deleteBtn, checkboxes);
  checkCheckboxes(deleteBtn);
  activateElement(inputs, formButtons);
  setElementsToLocalStorage();
});

hiddenElementsBtn.addEventListener('click', () => {
  filterHiddenElements(hiddenElementsBtn, visibleElementsBtn);
});

visibleElementsBtn.addEventListener('click', () => {
  filterVisibleElements(visibleElementsBtn, hiddenElementsBtn);
});

setElementsToLocalStorage();
