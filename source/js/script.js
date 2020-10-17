'use strict'

import editElement from './modules/editElement.js'

const elements = document.querySelectorAll('.elements__item');
const elementsMainBlocks = document.querySelectorAll('.elements__item-main');
const mainCheckbox = document.querySelector('.check__input--main');
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
const hiddenElementsBtn = document.querySelector('.button--hidden');
const visibleElementsBtn = document.querySelector('.button--visible');

inputs.forEach((input) => {
  input.disabled = true;
});

formButtons.forEach((btn) => {
  btn.disabled = true;
});

deleteBtn.disabled = true;

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

elementsMainBlocks.forEach((element) => {
  element.addEventListener('click', (event) => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.remove('active');
    }
    const currentTargetParent = event.currentTarget.parentElement;
    const currentTarget = event.currentTarget;
    currentTargetParent.classList.add('active');
    const elementChildren = currentTarget.children;
    inputs[0].value = elementChildren[0].textContent;
    inputs[1].value = elementChildren[1].textContent;
    inputs.forEach((input) => {
      input.disabled = false;
    });
  });
});

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


const activateElement = () => {
  const elements = document.querySelectorAll('.elements__item');
  const elementsMainBlocks = document.querySelectorAll('.elements__item-main');
  elementsMainBlocks.forEach((element) => {
    element.addEventListener('click', (event) => {
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('active');
      }
      const currentTargetParent = event.currentTarget.parentElement;
      currentTargetParent.classList.add('active');
      const elementChildren = event.currentTarget.children;
      let elementName = currentTargetParent.children[1].children[0].textContent;
      let elementDescription = currentTargetParent.children[1].children[1].textContent;
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

const filterVisibleElements = () => {
  const visibleElements = document.querySelectorAll('.elements__item.visible');
  if (hiddenElementsBtn.classList.contains('active')) {
    visibleElementsBtn.classList.toggle('active');
    if (visibleElementsBtn.classList.contains('active')) {
      visibleElements.forEach((element) => {
        element.classList.remove('hide');
      });
    }
    if (!visibleElementsBtn.classList.contains('active')) {
      visibleElements.forEach((element) => {
        element.classList.add('hide');
      });
    }
  }
};

const filterHiddenElements = () => {
  const hiddenElements = document.querySelectorAll('.elements__item.hidden');
  if (visibleElementsBtn.classList.contains('active')) {
    hiddenElementsBtn.classList.toggle('active');
    if (hiddenElementsBtn.classList.contains('active')) {
      hiddenElements.forEach((element) => {
        element.classList.remove('hide');
      });
    }
    if (!hiddenElementsBtn.classList.contains('active')) {
      hiddenElements.forEach((element) => {
        element.classList.add('hide');
      });
    }
  }
};

const deleteElement = (elements) => {
  const checkboxes = document.querySelectorAll('.check__input--element');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const userConfirm = confirm('Confirm deletion of selected item');
      if (userConfirm) {
        console.log(checkbox.parentElement.parentElement.parentElement);
        elements.removeChild(checkbox.parentElement.parentElement.parentElement);
        inputs.forEach((input) => {
          input.disabled = true;
          input.value = '';
        });
        formButtons.forEach((btn) => {
          btn.disabled = true;
        });
        deleteBtn.disabled = true;
        mainCheckbox.checked = false;
      }
    }
  });
};

deleteElement();

const checkCheckboxes = () => {
  const checkboxes = document.querySelectorAll('.check__input--element');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        deleteBtn.disabled = false;
      }
      if (!checkbox.checked) {
        deleteBtn.disabled = true;
      }
    });
  });
};

checkCheckboxes();

const checkMainCheckbox = () => {
  mainCheckbox.addEventListener('click', () => {
    if (mainCheckbox.checked) {
      deleteBtn.disabled = false;
    }
    if (!mainCheckbox.checked) {
      deleteBtn.disabled = true;
    }
  });

};

checkMainCheckbox();

deleteBtn.addEventListener('click', () => {
  const elementsBlock = document.querySelector('.elements__items');
  deleteElement(elementsBlock);
  checkCheckboxes();
  checkMainCheckbox();
});

addBtn.addEventListener('click', () => {
  addElement();
  // const elements = document.querySelectorAll('.elements__item');
  checkAll();
  checkCheckboxes();
  activateElement();
});


hiddenElementsBtn.addEventListener('click', () => {
  filterHiddenElements();
});

visibleElementsBtn.addEventListener('click', () => {
  filterVisibleElements();
});











