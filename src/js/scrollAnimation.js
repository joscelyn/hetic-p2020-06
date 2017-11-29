/////////////////////
// The functions to animate the header and sections
/////////////////////

// Define all globals variables
let windowWidth = window.innerWidth;
let lastScrollPos = window.pageYOffset || document.documentElement.scrollTop;

let scrollOffset = 360;
let isEverythingActive = false;

let sectionsData = {};
let sections = document.getElementsByTagName('section');
[].forEach.call(sections, function (section) {
    sectionsData[section.className] = section.offsetTop;
});


// Add the scroll event listener
window.addEventListener('scroll', () => {
    checkHeader();

    if (!isEverythingActive && windowWidth > 600) {
        checkSections();
    }
});


// Function that check if a section is in viewport
checkSections();
function checkSections() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    let scrollClientPos = scrollPos + window.innerHeight - scrollOffset;

    // Read the sections object to see if the section is in viewport
    Object.keys(sectionsData).map(key => {
        if (scrollClientPos > sectionsData[key]) {
            let sectionTriggered = document.getElementsByClassName(key)[0];
            sectionTriggered.classList.add('triggerAnimation');

            delete sectionsData[key];
        }

        // If the sections object is empty, every section have been animated
        if (Object.keys(sectionsData).length === 0) {
            isEverythingActive = true;
        }
    });
}


// Function to anime the flowers of the header
function checkHeader() {
    let scrollPos = window.pageYOffset;

    if (scrollPos > lastScrollPos) {
        document.body.classList.add('leave')
    } else if (scrollPos < 100) {
        document.body.classList.remove('leave')
    }
    lastScrollPos = scrollPos;
}
