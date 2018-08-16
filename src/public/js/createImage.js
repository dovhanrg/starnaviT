'use strict';

const createImg = (id, width = 200) => {
  const src = `url(https://picsum.photos/${width}/?image=${id})`;

  const imageWraper = document.createElement('div');
  imageWraper.classList.add('imageWraper');
  imageWraper.style.backgroundImage = src;

  const spanForFavorite = document.createElement('span');
  spanForFavorite.classList.add('spanForFavorite', 'bgPositionDefault');

  imageWraper.insertAdjacentElement('afterbegin', spanForFavorite);

  return imageWraper;
};

export default createImg;
