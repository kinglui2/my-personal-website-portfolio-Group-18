let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active');
}

var typed = new Typed(".typing", {
    strings: ["","Web Developer", "web Designer", "Creative Thinker"],  // Array of strings to type
    typeSpeed: 100,  
    backSpeed: 60,  
    loop: true  
});
