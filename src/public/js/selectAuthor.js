'use strict';

import createOptionElement from './createOptionElement';

const selectAuthorTag = document.getElementById('byAuthor');

const filter = arr => {
  const newArr = [];
  arr.forEach(element => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

const selectAuthor = () => {
  fetch('https://picsum.photos/list')
    .then(data => {
      if (data.status === 200) return data.json();
      throw new Error(data.statusText);
    })
    .then(data => data.map(element => element.author))
    .then(data =>
      filter(data)
        .sort()
        .map(element => createOptionElement(element))
    )
    .then(elements => selectAuthorTag.append(...elements))
    .catch(error => console.log(error));
};

selectAuthor();
export default selectAuthor;
