'use strict';
import changePageNumber from './changePageNumber';
import  sizeFilter from './sizeFilter';
import loadImagesList from './loadImagesList';
import filterByAuthor from './filterByAuthor';

const radioInputs = document.querySelectorAll('input[type="radio"]');
const selectArea = document.getElementById('byAuthor');

const main = (event) => {
    event.preventDefault();

    changePageNumber(event);

    const activePage = document.querySelector('.activePage');
    // console.log(activePage.textContent);
    

    const hasCheckedInput = Array.from(radioInputs).filter(el => el.checked === true)[0];

    if ( event.currentTarget === selectArea ) {
      filterByAuthor();
      return;
    }
      if ( hasCheckedInput ) {
        
        sizeFilter(activePage.textContent);
        return;
      }

      loadImagesList(activePage.textContent);
}


export default main;
