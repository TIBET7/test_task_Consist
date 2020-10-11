'use strict'

const filterElements = (basicBtn, reverseBtn, elements) => {
  basicBtn.addEventListener('click', () => {
    if (reverseBtn.classList.contains('active')) {
      basicBtn.classList.toggle('active');
      elements.forEach((element) => {
        element.classList.toggle('hide');
      });
    }
  });
}

export default filterElements;

// const filterElements = (btn, elements, btnToggleClass, elementsToggleClass) => {
//   btn.addEventListener('click', () => {
//     btn.classList.toggle('active');
//     elements.forEach((element) => {
//       console.log('test');
//       element.classList.toggle('hide');
//     });
//   });
// }

// export default filterElements;
