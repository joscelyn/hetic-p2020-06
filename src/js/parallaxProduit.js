//Determine if an element is in the visible viewport
import { isInViewport } from './helpers';

let isvisible = false;
let scrollPosActual = window.scrollY;
let ElementTitle = document.getElementById('product');

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    if (isInViewport(ElementTitle) && (isvisible == false)) {
        ElementTitle.classList.add('visible');
        isvisible = true;
    }
});
