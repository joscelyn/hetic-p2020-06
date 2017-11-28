import {isInViewport} from './helpers';

// Quote are visible when you scroll down
// Determine if an element is in the visible viewport
let isvisible = false;
let scrollQuote = document.getElementById('quotation__text');

window.addEventListener('scroll', () => {
    if (isInViewport(scrollQuote) && (isvisible == false)) {
        scrollQuote.classList.add('active');
        isvisible = true;
    }
});
