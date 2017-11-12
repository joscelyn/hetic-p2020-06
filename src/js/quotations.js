// ANIMATION APPARITION GUILLEMETS AU SCROLL


// Determine if an element is in the visible viewport
function isInViewport(element) {
 let rect = element.getBoundingClientRect();
 let html = document.documentElement;
 return (
   rect.top >= 0 &&
   rect.left >= 0 &&
   rect.bottom <= (window.innerHeight || html.clientHeight) &&
   rect.right <= (window.innerWidth || html.clientWidth)
 );
}

let isvisible= false;
let scrollPosActual = window.scrollY;
let scrollPosGuillemetsFirst = document.getElementById('quotation__quote__first');
let scrollPosGuillemetsSecond = document.getElementById('quotation__quote__second');
window.addEventListener("scroll", ()=>{

    if (isInViewport(scrollPosGuillemetsFirst)  && (isvisible==false)) {
        scrollPosGuillemetsFirst.classList.add('active');
        scrollPosGuillemetsSecond.classList.add('active');
        isvisible=true;
    }
})
