//import { tns } from "tiny-slider"
//import { w } from './mediaQueries';
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
var w = document.getElementsByTagName('body')[0].innerWidth;
console.log(w)
});

var slider = tns({
    container: '.slider__tns',
    items: 1,
    controls: false,
    mouseDrag: true,
    navContainer: '.slider__nav'
});
