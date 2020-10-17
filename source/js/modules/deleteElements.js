'use strict'

const deleteElements = (elements, inputs, formButtons, deleteButton, rootCheckbox) => {
  const checkboxes = document.querySelectorAll('.check__input--element');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const userConfirm = confirm('Confirm deletion of selected item');
      if (userConfirm) {
        elements.removeChild(checkbox.parentElement.parentElement.parentElement);
        inputs.forEach((input) => {
          input.disabled = true;
          input.value = '';
        });
        formButtons.forEach((btn) => {
          btn.disabled = true;
        });
        deleteButton.disabled = true;
        rootCheckbox.checked = false;
      }
    }
  });
};

export default deleteElements;
