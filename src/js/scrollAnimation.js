// Quote are visible when you scroll down
// Determine if an element is in the visible viewport

let lastScrollPos = window.pageYOffset || document.documentElement.scrollTop;

let scrollOffset = 100;
let isEverythingActive = false;

let sectionsData = {};
let sections = document.getElementsByTagName('section');
[].forEach.call(sections, function (section) {
    sectionsData[section.className] = section.offsetTop;
});

window.addEventListener('scroll', () => {
    checkHeader();

    if (!isEverythingActive) {
        checkSections();
    }
});


checkSections();
function checkSections() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    let scrollClientPos = scrollPos + window.innerHeight - scrollOffset;

    Object.keys(sectionsData).map(key => {
        if (scrollClientPos > sectionsData[key]) {
            let sectionTriggered = document.getElementsByClassName(key)[0];
            sectionTriggered.classList.add('triggerAnimation');

            delete sectionsData[key];
        }

        if (Object.keys(sectionsData).length === 0) {
            isEverythingActive = true;
        }
    });
}


function checkHeader() {
    let scrollPos = window.pageYOffset;

    if (scrollPos > lastScrollPos) {
        document.body.classList.add('leave')
    } else if (scrollPos < 100) {
        document.body.classList.remove('leave')
    }
    lastScrollPos = scrollPos;
}
