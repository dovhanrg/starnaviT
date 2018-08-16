'use strict';

const createZoomImage = (id, width = 200) => {
  const img = document.createElement('img');
  img.setAttribute('src', `https://picsum.photos/${width}/?image=${id}`);
  return img;
};

export default createZoomImage;
