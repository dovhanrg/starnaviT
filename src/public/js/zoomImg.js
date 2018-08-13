import createImg from './createImage';

const zoomImg = e => {
  const bodyHeigth = document.querySelector('body').offsetHeight;
  const body = document.querySelector('body');
  let imgId = '';
  const isZoomedWrapper = document.querySelector('.zoomWrapper');

  if (e.target.className === 'zoomWrapper' || e.target.className === 'zoom') {
    body.removeChild(isZoomedWrapper);
  }

  if (e.target.className === 'picture') {
    imgId = e.target.src.split('=')[1];
    const fullImgWrapper = document.createElement('div');
    fullImgWrapper.classList.add('zoomWrapper');
    const fullImg = createImg(imgId, bodyHeigth);
    fullImg.classList.add('zoom');
    fullImg.classList.remove('picture');
    fullImgWrapper.insertAdjacentElement('afterbegin', fullImg);
    body.insertAdjacentElement('afterbegin', fullImgWrapper);
  }
};

export default zoomImg;
