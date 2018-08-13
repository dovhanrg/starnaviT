'use strict';

import createImg from './createImage';

const filterByAuthor = () => {

    const imageView = document.querySelector('.imageView');
    const selectAuthorTag = document.getElementById('byAuthor');
    const selectedAuthor = Array.from(selectAuthorTag.children).filter(
        element => element.selected === true
    )[0].value;
    imageView.innerHTML = '';


    (function(){
        const radioInputs = document.querySelectorAll('input[type="radio"]');
        const hasCheckedInput = Array.from(radioInputs).filter(
        el => el.checked === true
        )[0];
        if (hasCheckedInput) hasCheckedInput.checked = false;
        return hasCheckedInput;
    }());


    fetch('https://picsum.photos/list')
    .then(data => {
      if (data.status === 200) return data.json();
      throw new Error(data.statusText);
    })
    .then(
        data => data
        .filter(
            element => element.author === selectedAuthor
        )
        .map(
            element => createImg(element.id)
        )
    )
    .then(
        data => data.length 
        ? imageView.prepend(...data)
        : imageView.insertAdjacentHTML(
            'afterbegin',
            `<h2 class='oops'>There is no more images, with that author :(</h2>`
          )
    )
    .catch(error => console.log(error));

}

// filterByAuthor();




export default filterByAuthor;

