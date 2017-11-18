// Get the modal
let modal = document.getElementById('popup');


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("popup__close");

// Get the button that opens the modal
let btn = document.getElementById("gamme__presentation");


// When the user clicks on the button, open the modal and change the content

btn.onclick = function() {
    modal.style.display = "block";
    fetch('js/json/popup-digestif.json')
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
      });
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
