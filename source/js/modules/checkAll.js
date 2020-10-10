'use strict'

const checkAll = (rootCheckbox, checkboxesList) => {
  rootCheckbox.addEventListener('click', () => {
    checkboxesList.forEach((checkbox) => {
      if (rootCheckbox.checked) {
        checkbox.checked = true;
      }
      if (!rootCheckbox.checked) {
        checkbox.checked = false;
      }
    });
  });
};

export default checkAll;
