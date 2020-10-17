'use strict'

const checkCheckboxes = (deleteButton) => {
  const checkboxes = document.querySelectorAll('.check__input--element');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        deleteButton.disabled = false;
      }
      if (!checkbox.checked) {
        deleteButton.disabled = true;
      }
    });
  });
};

export default checkCheckboxes;
