'use strict';

const disableFormInputs = (elementsList, inputs) => {
  elementsList.forEach((element) => {
    if (!element.classList.contains('.active')) {
      inputs.forEach((input) => {
        input.disabled = true;
      });
    }
  });
};

export default disableFormInputs;
