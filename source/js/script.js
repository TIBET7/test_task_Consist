'use strict';

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
