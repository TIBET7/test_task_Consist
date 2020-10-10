'use strict';

import checkAll from './modules/checkAll.js';
import deleteCheckedElements from './modules/deleteElement.js';
import activateElement from './modules/activateElement.js';
import addElement from './modules/addElement.js';

const mainCheckbox = document.querySelector('.check__input--main');
let checkboxes = document.querySelectorAll('.check__input--element');
const elements = document.querySelectorAll('.elements__item');
const elementsMainBlocks = document.querySelectorAll('.elements__item-main');
const nameInput = document.querySelector('.editor__element-name');
const descriptionInput = document.querySelector('.editor__element-description');
const submitBtn = document.querySelector('.editor__submit');
const resetBtn = document.querySelector('.editor__reset');
const addBtn = document.querySelector('.button--add');
const deleteBtn = document.querySelector('.button--delete');
const elementsBlock = document.querySelector('.elements__items');

activateElement(elements, elementsMainBlocks, nameInput, descriptionInput);
addElement(addBtn, elementsBlock, '.elements__item', nameInput, descriptionInput);
checkAll(mainCheckbox, checkboxes);
deleteCheckedElements(deleteBtn, checkboxes, elementsBlock);

addBtn.addEventListener('click', () => {
  const updatedCheckboxes = document.querySelectorAll('.check__input--element');
  console.log(updatedCheckboxes);
  checkAll(mainCheckbox, updatedCheckboxes);
});







// deleteBtn.addEventListener('click', () => {
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       console.log(checkbox.parentNode.parentNode.parentNode.parentNode);
//       table.removeChild(checkbox.parentElement.parentElement.parentElement.parentElement);
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
