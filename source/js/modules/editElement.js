'use strict'

const editElement = (element, form, inputs) => {
  let elementName = element.children[1].children[0].textContent;
  let elementDescription = element.children[1].children[1].textContent;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData);
    if (element.classList.contains('active')) {
      element.children[1].children[0].textContent = formDataObject.name;
      element.children[1].children[1].textContent = formDataObject.description;
    }
  });
  form.addEventListener('reset', (event) => {
    event.preventDefault();
    inputs[0].value = elementName;
    inputs[1].value = elementDescription;
    element.children[1].children[0].textContent = elementName;
    element.children[1].children[1].textContent = elementDescription;
  });
};

export default editElement
