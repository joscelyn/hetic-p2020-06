var body = document.getElementsByTagName('body')[0];




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