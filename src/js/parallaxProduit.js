import {isInViewport} from './helpers';

let isvisible = false;
let elementTitle = document.getElementById('product');

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    if (isInViewport(elementTitle) && (isvisible == false)) {
        elementTitle.classList.add('visible');
        isvisible = true;
    }
});
