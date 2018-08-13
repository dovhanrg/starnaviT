'use strict';

import createImg from './createImage';
import getPageNumber from './getPageNumber';
// import { large, medium, small, getSize } from './sizeFilter';

// console.log(page);

const loadImagesList = (page = 1) => {
  const imageView = document.querySelector('.imageView');

  // TODO imageView.style.minHeight = '838px'; - откалибровать под разные screen
  imageView.style.minHeight = '838px';
  imageView.innerHTML = '';

  fetch('https://picsum.photos/list')
    .then(data => {
      if (data.status === 200) return data.json();
      throw new Error(data.statusText);
    })
    .then(data => data.splice(page * 20 - 20, 20))
    .then(data => data.map(element => createImg(element.id)))
    .then(data => imageView.prepend(...data))
    .catch(error => console.log(error));
};

loadImagesList();
export default loadImagesList;
