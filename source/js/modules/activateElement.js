'use strict';

const activateElement = (inputs, formButtons) => {
  const elements = document.querySelectorAll('.elements__item');
  const elementsMainBlocks = document.querySelectorAll('.elements__item-main');
  elementsMainBlocks.forEach((element) => {
    element.addEventListener('click', (event) => {
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('active');
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
    });
  });
};
export default activateElement;
