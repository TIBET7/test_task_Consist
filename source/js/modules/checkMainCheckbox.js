'use strict'

const checkMainCheckbox = (mainCheckbox, deleteButton) => {
  mainCheckbox.addEventListener('click', () => {
    if (mainCheckbox.checked) {
      deleteButton.disabled = false;
    }
    if (!mainCheckbox.checked) {
      deleteButton.disabled = true;
    }
  });

};

export default checkMainCheckbox;
