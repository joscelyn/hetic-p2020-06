// Get the modal
let modal = document.getElementById('popup');


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("popup__close")[0];


// Get the button that opens the modal
let btn = document.getElementById("gamme__presentation");

//lets now wich product you have click on
// btn.onclick = function () {
//   const cl = this.classList
//   console.log(cl)
// }

//if click on class XX get file XX as var file.
let file = 'js/json/popup-digestif.json';

// When the user clicks on the button, open the modal and change the content


btn.onclick = function() {
    modal.style.display = "block";
    writeContent();
}

function writeContent() {
  fetch(file)
    .then(response => response.json())
    .then((data) => {
      document.querySelector('.popup__bigTitle p').innerHTML = data.name
      document.querySelector('.popup__definition').innerHTML = data.def
      document.querySelector('.--def').innerHTML = data.defContent
      document.querySelector('.--compo').innerHTML = data.composition
      document.querySelector('.popup__number p').innerHTML = data.number
      document.querySelector('.popup__image img').src= data.image
      document.querySelector('.popup__image img').srcset= data.imageset
      document.querySelector('.popup__image img').alt= data.name
    })
}

// When the user clicks on <span> (x), close the modal and erase the content
span.onclick = function() {
    modal.style.display = "none";
    document.querySelector('.popup__bigTitle p').innerHTML = ""
    document.querySelector('.popup__definition').innerHTML = ""
    document.querySelector('.--def').innerHTML = ""
    document.querySelector('.--compo').innerHTML = ""
    document.querySelector('.popup__number p').innerHTML = ""
    document.querySelector('.popup__image img').src= ""
    document.querySelector('.popup__image img').srcset= ""
    document.querySelector('.popup__image img').alt= ""
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
