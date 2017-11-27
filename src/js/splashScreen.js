const body = document.body;


// ANIMATION HEADER DIPARITION DES BRANCHES AU SCROLL

let lastScrollPos = 0;
window.addEventListener("scroll", () => {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos > lastScrollPos) {
        body.classList.add('leave')
    } else {
        if (scrollPos < 100) {
            body.classList.remove('leave')
        }
    }
    lastScrollPos = scrollPos;
}, false);
