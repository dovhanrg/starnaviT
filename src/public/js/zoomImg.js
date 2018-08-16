'use strict';

import createZoomImage from './createZoomImage';

const zoomImg = e => {
  const bodyHeigth = document.querySelector('body').offsetHeight;
  const body = document.querySelector('body');
  let imgId = '';
  const isZoomedWrapper = document.querySelector('.zoomWrapper');

  if (e.target.className === 'zoomWrapper' || e.target.className === 'zoom') {
    body.removeChild(isZoomedWrapper);
  }

  if (e.target.className === 'imageWraper') {
    const imageWrappers = Array.from(document.querySelectorAll('.imageWraper'));
    const targetElementSrc = imageWrappers.filter(
      element => element === e.target
    )[0].style.backgroundImage;
    imgId = parseInt(targetElementSrc.split('=')[1]);
    const fullImgWrapper = document.createElement('div');
    fullImgWrapper.classList.add('zoomWrapper');
    const fullImg = createZoomImage(imgId, bodyHeigth);
    fullImg.classList.add('zoom');
    fullImgWrapper.insertAdjacentElement('afterbegin', fullImg);
    body.insertAdjacentElement('afterbegin', fullImgWrapper);
  }
};

export default zoomImg;
