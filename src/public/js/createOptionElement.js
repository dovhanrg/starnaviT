'use strict';

const createOptionElement = (value) => {
    const option = document.createElement('option');
    option.setAttribute('value', value);
    option.textContent = value;
    return option;
}
// console.log(
//     createOptionElement('margot pandone')
// )


export default createOptionElement;
