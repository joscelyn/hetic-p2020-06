var body = document.getElementsByTagName('body')[0];


// ANIMATION HEADER DIPARITION DES BRANCHES AU SCROLL

var lastScrollPos = 0;
window.addEventListener("scroll", function(){
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos > lastScrollPos){
        body.classList.add('leave')
    } else {
        if (scrollPos < 100) {
            body.classList.remove('leave')
        }
    }
    lastScrollPos = scrollPos;
}, false);

// ANIMATION APPARITION GUILLEMETS AU SCROLL

let isvisible= false;
let scrollPosActual = window.scrollY;
let scrollPosGuillemetsFirst = document.getElementById('citation__guillemets__first');
let scrollPosGuillemetsSecond = document.getElementById('citation__guillemets__second');
window.addEventListener("scroll", function(){

  if (isInViewport(scrollPosGuillemetsFirst)  && (isvisible==false)) {
    scrollPosGuillemetsFirst.classList.add('active');
    scrollPosGuillemetsSecond.classList.add('active');
    isvisible=true;
  }
})

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
