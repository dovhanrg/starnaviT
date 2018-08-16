'use strict';

import { increment, decrement } from './counter';
// import sizeFilter from './sizeFilter';

const activePage = document.querySelectorAll('.activePage');
const prevPage = document.querySelectorAll('.prev');
const nextPage = document.querySelectorAll('.next');

const changePageNumber = (event = event) => {
  if (event.target === nextPage[0] || event.target === nextPage[1]) {
    const nextNumber = increment(Number(activePage[0].textContent));
    activePage.forEach(element => (element.textContent = ''));
    activePage.forEach(element => (element.textContent = nextNumber));
    return nextNumber;
  }

  if (activePage[0].textContent === '1') {
    return;
  }

  if (event.target === prevPage[0] || event.target === prevPage[1]) {
    const prevNumber = decrement(Number(activePage[0].textContent));
    activePage.forEach(element => (element.textContent = ''));
    activePage.forEach(element => (element.textContent = prevNumber));
    return prevNumber;
  }
};

export default changePageNumber;
