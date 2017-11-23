//import { tns } from "tiny-slider"
<<<<<<< HEAD

import { windowWidth } from './mediaQueries';

=======
import { windowWidth } from './mediaQueries';
>>>>>>> ed1e3e8b19c8af84cec32d1bf50d7ddf2fef32c3

if (windowWidth < 800) {
    let slider = tns({
        container: '.slider__tns',
        items: 1,
        controls: false,
        mouseDrag: true,
        navContainer: '.slider__nav'
    });
} else {
    let slides = document.getElementsByClassName('slide')
    slides[0].classList.add('active');

    [].forEach.call(slides, function(slide) {
        slide.addEventListener('click', function (event) {
            let slideActive = document.getElementsByClassName('slide active')[0]
            slideActive.classList.remove('active')
            let slideActual = event.target.closest('.slide')
            slideActual.classList.add('active')
        });
    });
}
