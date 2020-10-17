'use strict'

const filterVisibleElements = (basicBtn, reverseBtn) => {
  const visibleElements = document.querySelectorAll('.elements__item.visible');
  if (reverseBtn.classList.contains('active')) {
    basicBtn.classList.toggle('active');
    if (basicBtn.classList.contains('active')) {
      visibleElements.forEach((element) => {
        element.classList.remove('hide');
      });
    }
    if (!basicBtn.classList.contains('active')) {
      visibleElements.forEach((element) => {
        element.classList.add('hide');
      });
    }
  }
};

export default filterVisibleElements;
