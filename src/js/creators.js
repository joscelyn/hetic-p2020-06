let speed = 4;
let creatorsContainer = document.getElementsByClassName('creators')[0];
let creatorsImg = document.getElementsByClassName('creators__image')[0];

creatorsContainer.addEventListener('mousemove', event => {
    let mouseX = event.clientX - creatorsContainer.clientWidth / 2;
    let mouseY = event.clientY - creatorsContainer.clientHeight;


    let translateX = mouseX / 100 * speed;
    let translateY = mouseY / 100 * speed * 2;

    console.log(translateY);

    creatorsImg.style.transform = "translate(" + translateX + "px, " + translateY + "px)";
});