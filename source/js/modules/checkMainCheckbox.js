'use strict'

const checkMainCheckbox = (mainCheckbox, deleteButton, checkboxes) => {
  mainCheckbox.addEventListener('click', () => {
    if (mainCheckbox.checked) {
      deleteButton.disabled = false;
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    }
    if (!mainCheckbox.checked) {
      deleteButton.disabled = true;
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  });
};

export default checkMainCheckbox;
