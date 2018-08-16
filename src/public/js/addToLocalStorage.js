'use strict';

const keyToLocalStorage = 'Favorite Images';

const addToLocalStorage = event => {
  const child = event.target;
  const isParent = child.parentElement.classList.contains('imageWraper');
  const localStorArr = [];

  if (isParent) {
    const url = child.parentElement.style.backgroundImage;
    const getIdFromString = url.substring(38);
    const id = JSON.stringify(parseInt(getIdFromString));
    const isEmpty = localStorage.getItem(keyToLocalStorage);

    if (isEmpty === null) {
      localStorArr.push(id);
      const arrToJson = JSON.stringify(localStorArr);
      localStorage.setItem(keyToLocalStorage, arrToJson);
      return;
    }

    const inLocalStotage = localStorage
      .getItem(keyToLocalStorage)
      .match(/[0-9]{1,4}/g);
    if (!inLocalStotage.includes(id)) {
      const toLocalStor = inLocalStotage.concat(id);
      localStorage.setItem(keyToLocalStorage, JSON.stringify(toLocalStor));
    }
  }
};

export default addToLocalStorage;
