// script.js
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-60px'; // Adjust this value to the height of your navbar
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
