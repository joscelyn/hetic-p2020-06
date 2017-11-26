// Get the modal
let modal = document.getElementById('popup');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('popup__close')[0];

// Get the button that opens the modal
let products = document.getElementsByClassName('gamme__presentation');

let buttons = document.getElementsByClassName('popup__button');
let buttonUp = document.getElementsByClassName('popup__button--first');
let buttonDown = document.getElementsByClassName('popup__button--second');

function writeContent(file) {
  fetch(file)
    .then(response => response.json())
    .then((data) => {
      document.querySelector('.popup__bigTitle p').innerHTML = data.name;
      document.querySelector('.popup__definition').innerHTML = data.def;
      document.querySelector('.--def').innerHTML = data.defContent;
      document.querySelector('.--compo').innerHTML = data.composition;
      document.querySelector('.popup__number p').innerHTML = data.number;
      document.querySelector('.popup__image img').src = data.image;
      document.querySelector('.popup__image img').srcset = data.imageset;
      document.querySelector('.popup__image img').alt = data.name;
      document.querySelector('.popup__image img').sizes = data.sizes;

    });

  //document.querySelector('.popup__text').style.transform='tr'
}

let i = 0;
let y = 0;
let z = 0;
let key = 0;

while (i < products.length) {
  let product = products[i];
  product.addEventListener('click', (event) => {
      event.preventDefault();

      let productName = product.getAttribute('data-produit');
      key = product.getAttribute('data-key');
      let file = 'js/json/popup-' + productName + '.json';

      //Let's show the modal with the right content
      modal.style.display = 'block';
      writeContent(file);

      // In the modal, when you click on the arrow down
      while (y < buttonDown.length) {

        let button = buttonDown[y];

        //EVENT
        button.addEventListener('click', (event) => {

          event.preventDefault();

          if (key < 1) {
            key = 5;
          } else {
            key--;
          }

          let product = products[key];
          let productName = product.getAttribute('data-produit');
          let file = 'js/json/popup-' + productName + '.json';
          writeContent(file);

        });

        // Increment Y for the buttonUp event
        y++;
      }

      // In the modal, when you click on the arrow up
      while (z < buttonUp.length) {
        let button = buttonUp[z];

        //EVENT
        button.addEventListener('click', (event) => {

          event.preventDefault();

          if (key > 4) {
            key = 0;
          } else {
            key++;
          }

          let product = products[key];
          let productName = product.getAttribute('data-produit');
          let file = 'js/json/popup-' + productName + '.json';

          //Let's show the modal with the right content
          writeContent(file);

        });

        // Increment z for the buttonUp event
        z++;
      }
    }
    );
  i++;

}

span.onclick = () => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Lets activate the touch or swipe on mobile to change the content of the modal.

if (window.matchMedia('(max-width: 600px)').matches) {
  /* When on mobile device */
  // listen to events and change the content just like the arrox
  modal.addEventListener('click', (event) => {
      event.preventDefault();

      if (key > 4) {
        key = 0;
      } else {
        key++;
      }

      let product = products[key];
      let productName = product.getAttribute('data-produit');
      let file = 'js/json/popup-' + productName + '.json';
      writeContent(file);

    });
}
