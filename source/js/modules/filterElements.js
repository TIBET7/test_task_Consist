'use strict'

const filterElements = (btn, elements, btnToggleClass, elementsToggleClass) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    elements.forEach((element) => {
      console.log('test');
      element.classList.toggle('hide');
    });
  });
}

export default filterElements;
