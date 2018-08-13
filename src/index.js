'use strict';
//import files for file-loader
import spritesheet from './img/spritesheet.png';
console.log(spritesheet);

require('./index.css');

import loadImagesList from './public/js/loadImagesList';
import getPageNumber from './public/js/getPageNumber';
import zoomImg from './public/js/zoomImg';
import changePageNumber from './public/js/changePageNumber';
import main from './public/js/main';
import selectAuthor from './public/js/selectAuthor';
import filterByAuthor from './public/js/filterByAuthor';
import createImg from './public/js/createImage';


const body = document.querySelector('body');
const paginationBottomBlock = document.querySelector('.paginationBottom');
const paginationTopBlock = document.querySelector('.paginationTop');
const wrapper = document.querySelector('.wrapper');
const imageView = document.querySelector('.imageView');
const prevPage = document.querySelectorAll('.prev');
const nextPage = document.querySelectorAll('.next');
const buttonsPrevNextPage = document.querySelectorAll('.next, .prev');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const selectArea = document.getElementById('byAuthor');



const favorites = document.querySelector('.favorites');
// favorites.style.backgroundImage = spritesheet.default;









selectArea.addEventListener('click', main)
buttonsPrevNextPage.forEach(el => el.addEventListener('click', main));
radioInputs.forEach(el => el.addEventListener('input', main));
body.addEventListener('click', zoomImg);

