(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// ANIMATION APPARITION GUILLEMETS AU SCROLL

var isvisible = false;
var scrollPosActual = window.scrollY;
var scrollPosGuillemetsFirst = document.getElementById('citation__guillemets__first');
var scrollPosGuillemetsSecond = document.getElementById('citation__guillemets__second');
window.addEventListener("scroll", function () {

    if (isInViewport(scrollPosGuillemetsFirst) && isvisible == false) {
        scrollPosGuillemetsFirst.classList.add('active');
        scrollPosGuillemetsSecond.classList.add('active');
        isvisible = true;
    }
});

},{}],2:[function(require,module,exports){
'use strict';

require('./guillemets');

require('./splashScreen');

var body = document.getElementsByTagName('body')[0];

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth);
}

},{"./guillemets":1,"./splashScreen":3}],3:[function(require,module,exports){
'use strict';

var body = document.getElementsByTagName('body')[0];

// ANIMATION HEADER DIPARITION DES BRANCHES AU SCROLL

var lastScrollPos = 0;
window.addEventListener("scroll", function () {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos > lastScrollPos) {
        body.classList.add('leave');
    } else {
        if (scrollPos < 100) {
            body.classList.remove('leave');
        }
    }
    lastScrollPos = scrollPos;
}, false);

},{}]},{},[2])

//# sourceMappingURL=main.js.map
