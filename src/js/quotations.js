// ANIMATION APPARITION GUILLEMETS AU SCROLL

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
