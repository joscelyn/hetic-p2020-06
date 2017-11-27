let windowWidth = window.innerWidth;

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
            if (document.querySelector('.slide.active')) {
                document.querySelector('.slide.active').classList.remove('active')
            }
            if (event.target.closest('.slide')) {
                event.target.closest('.slide').classList.add('active')
            }
        });
    });
}

