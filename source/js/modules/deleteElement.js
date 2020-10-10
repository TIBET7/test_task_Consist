'use strict'

const deleteCheckedElements = (deleteButton, checkboxList, parent) => {
  deleteButton.addEventListener('click', () => {
    checkboxList.forEach((checkbox) => {
      if (checkbox.checked) {
        parent.removeChild(checkbox.parentElement.parentElement.parentElement.parentElement);
      }
    });
  });
};

export default deleteCheckedElements;



