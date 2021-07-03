let navbar = document.querySelector('#mainNavbar');

window.addEventListener('scroll', () => {

    let windowPosition = window.scrollY > 100;

    navbar.classList.toggle('scrollNav', windowPosition);



})