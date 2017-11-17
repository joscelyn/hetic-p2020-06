//import { tns } from "tiny-slider"
import { windowWidth } from './mediaQueries'
console.log(windowWidth)

//let windowWidth = window.innerWidth;

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



