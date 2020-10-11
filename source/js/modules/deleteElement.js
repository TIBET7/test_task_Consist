'use strict'

const deleteCheckedElements = (checkboxList, parent) => {
  checkboxList.forEach((checkbox) => {
    if (checkbox.checked) {
      const userConfirm = confirm('Confirm deletion of selected item');
      if (userConfirm) {
        parent.removeChild(checkbox.parentElement.parentElement.parentElement);
      }
    }
  });
};

export default deleteCheckedElements;
