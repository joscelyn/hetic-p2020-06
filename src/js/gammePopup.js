/////////////////////
// All the functions to control the modal of Gamme section
/////////////////////

// Define all globals variables
let isModalOpen = false;
let currentProduct = false;
let jsonPath = '/js/json/popup-';
let windowWidth = window.innerWidth;

let modal = document.getElementById('popup');
let modalClose = document.getElementsByClassName('popup__close')[0];
let modalPrev = document.getElementsByClassName('popup__prev')[0];
let modalNext = document.getElementsByClassName('popup__next')[0];
let products = document.getElementsByClassName('gamme__presentation');
let productsLength = products.length;


// Open the modal when you click on a product
[].forEach.call(products, function (product) {
    product.addEventListener('click', event => {
        event.preventDefault();

        changeModal(product);
    });
});

// Change the content of the modal when you click on previous
modalPrev.addEventListener('click', event => {
    event.preventDefault();

    chooseProduct('prev');
});

// Change the content of the modal when you click on next
modalNext.addEventListener('click', event => {
    event.preventDefault();

    chooseProduct('next');
});


// Close the modal when you click on close
modalClose.addEventListener('click', event => {
    event.stopPropagation();
    closeModal();
});

// Change the status of the modal when you press some keys
document.addEventListener('keyup', event => {
    let e = event;
    let keyCode = e.keyCode;

    if (keyCode == 27) {
        closeModal();
    } else if (keyCode == 39 || keyCode == 40) {
        chooseProduct('next');
    } else if (keyCode == 37 || keyCode == 38) {
        chooseProduct('prev');
    }
});

if (windowWidth < 600) {
    modal.addEventListener('click', () => {
        chooseProduct('next');
    });
}

// Define the product that you have ton show when you want to see previous or next product
function chooseProduct(direction) {
    let productTriggeredDOM;

    // When the event act to show the a next product
    if (direction == 'next') {
        let productTriggered = currentProduct + 1;
        if (productTriggered < productsLength) {
            productTriggeredDOM = products[productTriggered];
        } else {
            productTriggeredDOM = products[0];
        }
    } else {
        let productTriggered = currentProduct - 1;
        if (productTriggered > -1) {
            productTriggeredDOM = products[productTriggered];
        } else {
            productTriggeredDOM = products[productsLength - 1];
        }
    }

    changeModal(productTriggeredDOM);
}

// Function to change the content of the modal. Content is define by the .json you call.
function changeModal(product) {
    let productName = product.dataset.produit;
    let productJson = jsonPath + productName + '.json';

    // indexOf the current product in the DOM
    currentProduct = 0;
    while ((product = product.previousElementSibling)) {
        currentProduct++;
    }

    fetch(productJson)
        .then(response => {
            return response.json();
        }).then(data => {
            document.querySelector('.popup__bigTitle p').innerHTML = data.name;
            document.querySelector('.popup__definition').innerHTML = data.def;
            document.querySelector('.--def').innerHTML = data.defContent;
            document.querySelector('.--compo').innerHTML = data.composition;
            document.querySelector('.popup__number p').innerHTML = data.number;
            document.querySelector('.popup__image img').src = data.image;
            document.querySelector('.popup__image img').srcset = data.imageset;
            document.querySelector('.popup__image img').sizes = data.sizes;

            openModal();
        }).catch(() => {
            closeModal();
            alert('Impossible de charger le produit, veuillez réesayer plus tard ou avec un autre navigateur.');
        });
}

// Add a "active" class you let the popup becoming visible
function openModal() {
    if (!isModalOpen) {
        modal.classList.add('active');
        isModalOpen = true;

        // Prevent scroll
        let scrollY = window.scrollY;
        window.onscroll = () => {
            window.scrollTo(0, scrollY);
        };
    }
}

// Remove active class to let the popup becoming invisible
function closeModal() {
    if (isModalOpen) {
        modal.classList.remove('active');
        isModalOpen = false;

        window.onscroll = () => {
        };
    }
}
