'use strict';

const createOptionElement = value => {
  const option = document.createElement('option');
  option.setAttribute('value', value);
  option.textContent = value;
  return option;
};

export default createOptionElement;
