'use strict';
//import files for file-loader
import spritesheet from './img/spritesheet.png';

require('./index.css');

import zoomImg from './public/js/zoomImg';
import main from './public/js/main';
import selectAuthor from './public/js/selectAuthor';
import filterByAuthor from './public/js/filterByAuthor';
import addToLocalStorage from './public/js/addToLocalStorage';

const body = document.querySelector('body');
const imageView = document.querySelector('.imageView');
const buttonsPrevNextPage = document.querySelectorAll('.next, .prev');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const selectArea = document.getElementById('byAuthor');
const favorites = document.querySelector('.favorites');

imageView.addEventListener('click', addToLocalStorage);
favorites.addEventListener('click', main);
selectArea.addEventListener('click', main);
buttonsPrevNextPage.forEach(el => el.addEventListener('click', main));
radioInputs.forEach(el => el.addEventListener('input', main));
body.addEventListener('click', zoomImg);
