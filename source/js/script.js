'use strict';

const mainCheckbox = document.querySelector('.check__input--main');
const checkboxes = document.querySelectorAll('.check__input--element');
const elements = document.querySelectorAll('.elements__item');
const nameInput = document.querySelector('.editor__element-name');
const descriptionInput = document.querySelector('.editor__element-description');


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

elements.forEach((element) => {
  element.addEventListener('click', (event) => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.remove('active');
    }
    // console.log(event.currentTarget);
    // event.currentTarget.classList.remove('hidden');
    // event.currentTarget.classList.remove('visible');
    event.currentTarget.classList.add('active');
    //console.log(event.currentTarget.children);
    const elementChildren = event.currentTarget.children;
    // console.log(elementChildren[1].textContent);
    // console.log(elementChildren[2].textContent);
    //nameInput.value = 588;
    nameInput.value = elementChildren[1].textContent;
    console.log(nameInput.textContent);
    descriptionInput.value = elementChildren[2].textContent;
  });
});

