'use strict'

const setBasicStateDisabledControls = (inputs, buttons) => {
  inputs.forEach((input) => {
    input.disabled = true;
  });

  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

export default setBasicStateDisabledControls;
