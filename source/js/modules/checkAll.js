'use strict'

const checkAll = (rootCheckbox, checkboxes) => {
  rootCheckbox.addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
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
