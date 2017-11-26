//Determine if an element is in the visible viewport
function isInViewport(element) {
 let rect = element.getBoundingClientRect();
 const html = document.documentElement;
 return (
   rect.top >= 0 &&
   rect.left >= 0 &&
   rect.bottom <= (window.innerHeight || html.clientHeight) &&
   rect.right <= (window.innerWidth || html.clientWidth)
 )
}

let isvisible= false;
let scrollPosActual = window.scrollY;
let ElementTitle = document.getElementById("product");
window.addEventListener("scroll", (e)=>{
    e.preventDefault();
    if (isInViewport(ElementTitle)  && (isvisible==false)) {
        ElementTitle.classList.add('visible');
        isvisible=true;
    }
})
