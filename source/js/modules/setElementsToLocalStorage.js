'use strict';

const setElementsToLocalStorage = () => {
  localStorage.clear();
  const elementsNames = document.querySelectorAll('.elements__item-name');
  elementsNames.forEach((item, i) => {
    localStorage.setItem(`Элемент${i}`, item.textContent);
  })
}

export default setElementsToLocalStorage;
