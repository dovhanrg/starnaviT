'use strict';

import createImg from './createImage';

export const large = x => x > 1500;
export const medium = x => x < 1501 && x > 799;
export const small = x => x < 800;

const sizeFilter = (page = 1) => {
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  const hasCheckedInput = Array.from(radioInputs).filter(
    el => el.checked === true
  )[0].value;

  const getSize =
    hasCheckedInput === 'small'
      ? small
      : hasCheckedInput === 'medium'
        ? medium
        : hasCheckedInput === 'large'
          ? large
          : () => {
              return true;
            };

  const imageView = document.querySelector('.imageView');
  imageView.innerHTML = '';

  fetch('https://picsum.photos/list')
    .then(data => {
      if (data.status === 200) return data.json();
      throw new Error(data.statusText);
    })
    .then(data =>
      data
        .filter(obj => getSize(obj.width))
        .splice(page * 20 - 20, 20)
        .map(obj => createImg(obj.id))
    )
    .then(
      data =>
        data.length
          ? imageView.prepend(...data)
          : imageView.insertAdjacentHTML(
              'afterbegin',
              `<h2 class='oops'>There is no more images, with that size on this page:(</h2>`
            )
    )
    .catch(error => console.log(error));
};

export default sizeFilter;
