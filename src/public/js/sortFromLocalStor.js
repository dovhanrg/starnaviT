'use strict';

import createImg from './createImage';

const keyToLocalStorage = 'Favorite Images';

const getFromLocalStor = event => {
  const localStoeItems = localStorage
    .getItem(keyToLocalStorage)
    .match(/[0-9]{1,4}/g);
  const images = localStoeItems.map(id => createImg(id));

  return images;
};

export const loadFromLocalStor = event => {
  const activePage = document.querySelector('.activePage').textContent;
  const imageView = document.querySelector('.imageView');
  imageView.style.minHeight = '838px';
  imageView.innerHTML = '';
  const images = new Promise(function(resolve, reject) {
    resolve(getFromLocalStor(event));
    // reject( throw new Errorю )
  })
    .then(data => data.splice(activePage * 20 - 20, 20))
    .then(data => imageView.prepend(...data));
};

// export default getFromLocalStor;
