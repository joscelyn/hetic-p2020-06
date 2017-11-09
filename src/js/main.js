let body = document.getElementsByTagName('body')[0];

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}
<<<<<<< HEAD
=======

import './splashScreen'
import './guillemets'

import {lory} from 'lory.js';

var rellax = new Rellax('.rellax');
>>>>>>> 33745df0da72cf96e1d04d29c3441f12cc57efe9
