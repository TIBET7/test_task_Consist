'use strict'

const deleteCheckedElements = (deleteButton, checkboxList, parent, inputs, formButtons) => {
  // deleteButton.addEventListener('click', () => {
    checkboxList.forEach((checkbox) => {
      console.log(checkboxList);
      if (checkbox.checked) {
        const userConfirm = confirm('Confirm deletion of selected item');
        if (userConfirm) {
          console.log(checkbox.parentElement.parentElement.parentElement);
          parent.removeChild(checkbox.parentElement.parentElement.parentElement);
          inputs.forEach((input) => {
            input.disabled = true;
            input.value = '';
          });
          formButtons.forEach((btn) => {
            btn.disabled = true;
          });
          deleteButton.disabled = true;
        }
      }
    });
  // });
};

export default deleteCheckedElements;
