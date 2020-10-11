'use strict';

import checkAll from './modules/checkAll.js';
import deleteCheckedElements from './modules/deleteElement.js';
import activateElement from './modules/activateElement.js';
import addElement from './modules/addElement.js';
import filterElements from './modules/filterElements.js';

const mainCheckbox = document.querySelector('.check__input--main');
let checkboxes = document.querySelectorAll('.check__input--element');
const elements = document.querySelectorAll('.elements__item');
const visibleElements = document.querySelectorAll('.elements__item.visible');
const hiddenElements = document.querySelectorAll('.elements__item.hidden');
const elementsMainBlocks = document.querySelectorAll('.elements__item-main');
const nameInput = document.querySelector('.editor__element-name');
const descriptionInput = document.querySelector('.editor__element-description');
const submitBtn = document.querySelector('.editor__submit');
const resetBtn = document.querySelector('.editor__reset');
const addBtn = document.querySelector('.button--add');
const deleteBtn = document.querySelector('.button--delete');
const hiddenElementsBtn = document.querySelector('.button--hidden');
const visibleElementsBtn = document.querySelector('.button--visible');
const elementsBlock = document.querySelector('.elements__items');

activateElement(elements, elementsMainBlocks, nameInput, descriptionInput);

addElement(addBtn, elementsBlock, '.elements__item', nameInput, descriptionInput);

checkAll(mainCheckbox, checkboxes);



if (visibleElementsBtn.classList.contains('active')) {
  filterElements(hiddenElementsBtn, hiddenElements, 'active', 'hide');
}

if (hiddenElementsBtn.classList.contains('active')) {
  filterElements(visibleElementsBtn, visibleElements, 'active', 'hide');
}



addBtn.addEventListener('click', () => {
  const updatedCheckboxes = document.querySelectorAll('.check__input--element');
  const updatedElements = document.querySelectorAll('.elements__item');
  const updatedVisibleElements = document.querySelectorAll('.elements__item.visible');
  //console.log(updatedVisibleElements);
  const updatedElementsMainBlocks = document.querySelectorAll('.elements__item-main');
  //console.log(updatedCheckboxes);
  // console.log(updatedVisibleElements);
  checkAll(mainCheckbox, updatedCheckboxes);
  activateElement(updatedElements, updatedElementsMainBlocks, nameInput, descriptionInput);

  // updatedVisibleElements.forEach((element) => {
  //   element.classList.remove('hide');
  //   console.log(element);
  // });

  // visibleElementsBtn.addEventListener('click', () => {
  //   updatedVisibleElements.forEach((item) => {
  //     console.log(item)
  //     item.classList.toggle('hide');
  //   });
    // updatedVisibleElements.forEach((item) => {
    //   console.log(item)
    //   item.classList.toggle('hide');
    // });
  // });
});

deleteBtn.addEventListener('click', () => {
  const updatedCheckboxes = document.querySelectorAll('.check__input--element');
  console.log(updatedCheckboxes);
  checkAll(mainCheckbox, updatedCheckboxes);
  //deleteCheckedElements(deleteBtn, updatedCheckboxes, elementsBlock);
})

deleteCheckedElements(deleteBtn, checkboxes, elementsBlock);

elements.forEach((element) => {
  if (!element.classList.contains('.active')) {
    nameInput.disabled = true;
    descriptionInput.disabled = true;
  }
});


























// deleteBtn.addEventListener('click', () => {
//   console.log('test');
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       console.log(checkbox.parentNode.parentNode.parentNode);
//       elementsBlock.removeChild(checkbox.parentElement.parentElement.parentElement);
//     }
//   });
// });








// mainCheckbox.addEventListener('click', () => {
//   checkboxes.forEach((checkbox) => {
//     if (mainCheckbox.checked) {
//       checkbox.checked = true;
//     }
//     if (!mainCheckbox.checked) {
//       checkbox.checked = false;
//     }
//   });
// });













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
