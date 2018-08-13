'use strict';

// import loadImagesList from './loadImagesList';

const getPageNumber = (e) => {
    e.preventDefault();
    
    // const targetTextContent = e.target.textContent;
    const link = document.querySelectorAll('.link');
    // const active = document.querySelectorAll('.active');

    // const linkPrevious = document.querySelectorAll('.prev');
    // const linkNext = document.querySelectorAll('.next');
    const buttonsPrevNextPage = document.querySelectorAll('.next, .prev');
    // console.log()
    



    const activePage = document.querySelectorAll('.activePage');
    // console.log(activePage.value);
    if ( e.target === (buttonsPrevNextPage[0] || buttonsPrevNextPage[1] || buttonsPrevNextPage[2] || buttonsPrevNextPage[3]) ) {
        // console.log(activePage);
    }
    // let isNumber = !Number.isNaN(Number(e.target.textContent)) ? e.target.textContent : false;
    // if (isNumber) {

    //     // loadImagesList(isNumber);

    //     for (const iterator of active) {
    //         // iterator.classList.remove('active');
    //     }
    //     for (const iterator of link) {
    //         // if ( iterator.textContent === targetTextContent ) {
    //             // iterator.classList.add('active');
    //         }
    //     }
    // }
}

export default getPageNumber;
