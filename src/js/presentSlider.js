//import { tns } from "tiny-slider"
import { windowWidth } from './mediaQueries';

//let windowWidth = window.innerWidth;
console.log(windowWidth)

if (windowWidth < 800) {
    let slider = tns({
        container: '.slider__tns',
        items: 1,
        controls: false,
        mouseDrag: true,
        navContainer: '.slider__nav'
    });
} else {
    let slide = document.getElementsByClassName('slide');
    slide[0].classList.add('active')
}



