'use strict';

import editElement from './editElement.js'

const activateElement = (elementsList, elementsMainBlockList, inputs, formElement, formButtons) => {
  elementsMainBlockList.forEach((element) => {
    element.addEventListener('click', (event) => {
      for (let i = 0; i < elementsList.length; i += 1) {
        elementsList[i].classList.remove('active');
      }
      const currentTargetParent = event.currentTarget.parentElement;
      currentTargetParent.classList.add('active');
      const elementChildren = event.currentTarget.children;
      inputs[0].value = elementChildren[0].textContent;
      inputs[1].value = elementChildren[1].textContent;
      inputs.forEach((input) => {
        input.disabled = false;
      });
      formButtons.forEach((btn) => {
        btn.disabled = false;
      });
      editElement(currentTargetParent, formElement, inputs)
    });
  });
};

export default activateElement;
