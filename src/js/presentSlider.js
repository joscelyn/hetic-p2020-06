//import { tns } from "tiny-slider"
//import { windowWidth } from './mediaQueries'

import { windowWidth } from './mediaQueries';

function presentSlider(windowWidth) {
    if (windowWidth < 600) {
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
}


let windowWidth = window.innerWidth;
presentSlider(windowWidth)

window.onresize = function(event) {
    windowWidth = window.innerWidth;
    presentSlider(windowWidth)
};
