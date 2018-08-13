const createImg = (id, width = 200) => {
  const img = document.createElement('img');
  img.classList.add('picture');
  img.setAttribute('src', `https://picsum.photos/${width}/?image=${id}`);
  return img;
};


export default createImg;
