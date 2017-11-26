import './splashScreen';
import './quotations';
import './parallaxProduit';
import './presentSlider';
import './popup';

let rellax = new Rellax('.rellax');

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
