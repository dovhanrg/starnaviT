'use strict';
import changePageNumber from './changePageNumber';
import sizeFilter from './sizeFilter';
import loadImagesList from './loadImagesList';
import filterByAuthor from './filterByAuthor';
import { loadFromLocalStor } from './sortFromLocalStor';

const radioInputs = document.querySelectorAll('input[type="radio"]');
const selectByAuthorArea = document.getElementById('byAuthor');
const favorites = document.querySelector('.favorites');
const buttonsPrevNextPage = document.querySelectorAll('.next, .prev');

const main = event => {
  event.preventDefault();

  changePageNumber(event);

  const activePage = document.querySelector('.activePage');

  if (event.target === favorites) {
    favorites.classList.toggle('favorites-turnIn');
    if (favorites.classList.contains('favorites-turnIn')) {
      activePage.textContent = 1;
      loadFromLocalStor(event);
      return;
    }
    loadImagesList(activePage.textContent);
  }
  const favoritesOn = favorites.classList.contains('favorites-turnIn');
  if (favoritesOn && event.currentTarget.classList.contains('link')) {
    loadFromLocalStor(event);
    return;
  }

  const hasCheckedInput = Array.from(radioInputs).filter(
    el => el.checked === true
  )[0];

  if (event.currentTarget === selectByAuthorArea) {
    activePage.textContent = 1;
    favorites.classList.remove('favorites-turnIn');
    filterByAuthor();
    return;
  }
  if (hasCheckedInput) {
    sizeFilter(activePage.textContent);
    return;
  }

  loadImagesList(activePage.textContent);
};

export default main;
