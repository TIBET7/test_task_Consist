'use strict';

const disableFormInputs = (elementsList, firstInput, secondInput, thirdInput) => {
  elementsList.forEach((element) => {
    if (!element.classList.contains('.active')) {
      firstInput.disabled = true;
      secondInput.disabled = true;
      thirdInput.disabled = true;
    }
  });
};

export default disableFormInputs;
