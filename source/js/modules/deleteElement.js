'use strict'

const deleteCheckedElements = (deleteButton, checkboxList, parent, inputs, formButtons) => {
  deleteButton.addEventListener('click', () => {
    checkboxList.forEach((checkbox) => {
      if (checkbox.checked) {
        const userConfirm = confirm('Confirm deletion of selected item');
        if (userConfirm) {
          parent.removeChild(checkbox.parentElement.parentElement.parentElement);
          inputs.forEach((input) => {
            input.disabled = true;
            input.value = '';
          });
          formButtons.forEach((btn) => {
            console.log(btn);
            btn.disabled = true;
          });
        }
      }
    });
  });
};

export default deleteCheckedElements;
