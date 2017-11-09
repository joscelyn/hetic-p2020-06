// ANIMATION APPARITION GUILLEMETS AU SCROLL

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}

let isvisible= false;
let scrollPosActual = window.scrollY;
let scrollPosGuillemetsFirst = document.getElementById('citation__guillemets__first');
let scrollPosGuillemetsSecond = document.getElementById('citation__guillemets__second');
window.addEventListener("scroll", ()=>{

    if (isInViewport(scrollPosGuillemetsFirst)  && (isvisible==false)) {
        scrollPosGuillemetsFirst.classList.add('active');
        scrollPosGuillemetsSecond.classList.add('active');
        isvisible=true;
    }
})
