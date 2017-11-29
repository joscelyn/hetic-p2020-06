/////////////////////
// The functions that used in the slider section
/////////////////////

// Define all globals variables
let windowWidth = window.innerWidth;
let slides = document.getElementsByClassName('slide');
let petals = document.getElementsByClassName('slider__petals')[0];
let sliderContainer = document.getElementsByClassName('slider__container')[0];

// If we are in mobile size
if (windowWidth < 600) {
    let sliderNav = document.createElement('div');
    sliderNav.className = "slider__nav";
    sliderContainer.appendChild(sliderNav);

    // We create the dots of the slider
    [].forEach.call(slides, function () {
        let newLi = document.createElement('li');
        sliderNav.appendChild(newLi);
    });

    let slider = tns({
        container: '.slider__tns',
        items: 1,
        controls: false,
        mouseDrag: true,
        navContainer: '.slider__nav'
    });
} else {
    let sliderTitle = document.createElement('h2');
    sliderTitle.className = "slider__title";
    let sliderText = document.createTextNode("Fruité");
    sliderTitle.appendChild(sliderText);
    sliderContainer.appendChild(sliderTitle);

    slides[0].classList.add('active');

    // We add the events to every slides
    [].forEach.call(slides, function (slide) {
        slide.addEventListener('click', event => {
            let activeSlide = document.querySelector('.slide.active');
            if (activeSlide) {
                activeSlide.classList.remove('active')
            }

            let eventSlide = event.target.closest('.slide');
            if (eventSlide) {
                eventSlide.classList.add('active')
                petals.className = 'slider__petals ' + eventSlide.dataset.name;
                sliderTitle.innerHTML = eventSlide.dataset.title;
            }
        });
    });
}


// Closest polyfill -- ref: https://developer.mozilla.org/fr/docs/Web/API/Element/closest
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
        function (s) {
            let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i,
                el = this;
            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {
                }
                ;
            } while ((i < 0) && (el = el.parentElement));
            return el;
        };
}
