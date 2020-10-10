'use strict';

const mainCheckbox = document.querySelector('.check__input--main');
const checkboxes = document.querySelectorAll('.check__input--element');
const elements = document.querySelectorAll('.elements__item');
const nameInput = document.querySelector('.editor__element-name');
const descriptionInput = document.querySelector('.editor__element-description');
const submitBtn = document.querySelector('.editor__submit');
const resetBtn = document.querySelector('.editor__reset');
const addBtn = document.querySelector('.button--add');
const table = document.querySelector('tbody')

addBtn.addEventListener('click', () => {
  const newElement = document.createElement('tr');
  newElement.classList.add('elements__item');
  newElement.classList.add('active');
  newElement.innerHTML = `<td>
  <div class="elements__item-checkbox">
    <label class="check">
      <input type="checkbox" class="check__input check__input--element visually-hidden" name="header-checkbox">
      <span class="check__box"></span>
    </label>
  </div>
</td>
<td class="elements__item-name">Без названия</td>
<td class="elements__item-description"></td>
<td class="elements__item-visibility"></td>`;
table.append(newElement);
console.log(elements);
});

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
  });
});



