'use strict';

const activateElement = (elementsList, elementsMainBlockList, firstInput, secondInput) => {
  elementsMainBlockList.forEach((element) => {
    element.addEventListener('click', (event) => {
      for (let i = 0; i < elementsList.length; i += 1) {
        elementsList[i].classList.remove('active');
      }
      const currentTargetParent = event.currentTarget.parentElement;
      currentTargetParent.classList.add('active');
      const elementChildren = event.currentTarget.children;
      firstInput.value = elementChildren[0].textContent;
      secondInput.value = elementChildren[1].textContent;
      firstInput.disabled = false;
      secondInput.disabled = false;
    });
  });
};

export default activateElement;
