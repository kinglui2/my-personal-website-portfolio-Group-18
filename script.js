let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x') // Toggles the 'fa-x' class on the menuIcon element when it's clicked. 
    navbar.classList.toggle('active');
}

var typed = new Typed(".typing", {
    strings: ["","Web Developer", "web Designer", "Creative Thinker"],  // Array of strings to type
    typeSpeed: 100,  // Speed of typing each character in milliseconds.
    backSpeed: 60,  // Speed of deleting characters in milliseconds.
    loop: true  // Makes the typing animation loop infinitely.
});
