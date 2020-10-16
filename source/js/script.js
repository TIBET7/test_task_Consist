'use strict'

const nameInput = document.querySelector('.editor__element-name');
const descriptionInput = document.querySelector('.editor__element-description');
const editorCheckbox = document.querySelector('.check__input--editor')
const inputs = [nameInput, descriptionInput, editorCheckbox];
const form = document.querySelector('.editor__form');
const submitBtn = document.querySelector('.editor__submit');
const resetBtn = document.querySelector('.editor__reset');
const formButtons = [submitBtn, resetBtn];
const addBtn = document.querySelector('.button--add');
const deleteBtn = document.querySelector('.button--delete');
const elementsBlock = document.querySelector('.elements__items');

inputs.forEach((input) => {
  input.disabled = true;
});



// const editElementData = (element) => {
//   const formData = new FormData(element);
//   const formDataObject = Object.fromEntries(formData);
//   if (element.classList.contains('active')) {
//     element.children[1].children[0].textContent = formDataObject.name;
//     element.children[1].children[1].textContent = formDataObject.description;
//   }
// };



// const resetEditingElementData = (element) => {
//   inputs[0].value = elementName;
//   inputs[1].value = elementDescription;
//   element.children[1].children[0].textContent = elementName;
//   element.children[1].children[1].textContent = elementDescription;
// }

const checkAll = () => {
  const mainCheckbox = document.querySelector('.check__input--main');
  const checkboxes = document.querySelectorAll('.check__input--element');
  mainCheckbox.addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
      if (mainCheckbox.checked) {
        checkbox.checked = true;
      }
      if (!mainCheckbox.checked) {
        checkbox.checked = false;
      }
    });
  });
};

checkAll();

const activateElement = () => {
  const elements = document.querySelectorAll('.elements__item');
  const elementsMainBlocks = document.querySelectorAll('.elements__item-main');
  elementsMainBlocks.forEach((element) => {
    element.addEventListener('click', (event) => {
      console.log(event.currentTarget)
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('active');
      }
      const currentTargetParent = event.currentTarget.parentElement;
      currentTargetParent.classList.add('active');
      const elementChildren = event.currentTarget.children;
      inputs[0].value = elementChildren[0].textContent;
      inputs[1].value = elementChildren[1].textContent;
      inputs.forEach((input) => {
        input.disabled = false;
      });
      formButtons.forEach((btn) => {
        btn.disabled = false;
      });
    });
  });
};

activateElement();

const addElement = () => {
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

addBtn.addEventListener('click', () => {
  addElement();
  checkAll();
});


const deleteElement = () => {
  const checkboxes = document.querySelectorAll('.check__input--element');
  checkboxes.forEach((checkbox) => {
    console.log(checkbox);
    if (checkbox.checked) {
      const userConfirm = confirm('Confirm deletion of selected item');
      if (userConfirm) {
        console.log(checkbox.parentElement.parentElement.parentElement);
        elementsBlock.removeChild(checkbox.parentElement.parentElement.parentElement);
        inputs.forEach((input) => {
          input.disabled = true;
          input.value = '';
        });
        formButtons.forEach((btn) => {
          btn.disabled = true;
        });
        deleteBtn.disabled = true;
      }
    }
  });
};

deleteBtn.addEventListener('click', () => deleteElement());










