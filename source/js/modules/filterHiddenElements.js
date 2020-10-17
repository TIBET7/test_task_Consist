'use strict'

const filterHiddenElements = (basicBtn, reverseBtn) => {
  const hiddenElements = document.querySelectorAll('.elements__item.hidden');
  if (reverseBtn.classList.contains('active')) {
    basicBtn.classList.toggle('active');
    if (basicBtn.classList.contains('active')) {
      hiddenElements.forEach((element) => {
        element.classList.remove('hide');
      });
    }
    if (!basicBtn.classList.contains('active')) {
      hiddenElements.forEach((element) => {
        element.classList.add('hide');
      });
    }
  }
};

export default filterHiddenElements;
