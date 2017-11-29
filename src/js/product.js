import {isInViewport} from './helpers';

let isvisible = false;
let elementTitle = document.getElementsByClassName('product__packaging')[0];

window.addEventListener('scroll', () => {
    if (isInViewport(elementTitle) && (isvisible == false)) {
        elementTitle.classList.add('visible');
        isvisible = true;
    }
});
