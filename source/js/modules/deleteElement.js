'use strict'

const deleteCheckedElements = (deleteButton, checkboxList, parent) => {
  deleteButton.addEventListener('click', () => {
    checkboxList.forEach((checkbox) => {
      console.log(checkbox.parentElement.parentElement.parentElement);
      if (checkbox.checked) {
        parent.removeChild(checkbox.parentElement.parentElement.parentElement);
      }
    });
  });
};

export default deleteCheckedElements;



