// Quote are visible when you scroll down


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
let scrollQuote = document.getElementById('quotation__text');

window.addEventListener("scroll", ()=>{

    if (isInViewport(scrollQuote)  && (isvisible==false)) {
        scrollQuote.classList.add('active');
        isvisible=true;
    }
})
