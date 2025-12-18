/* script.js */

// Typed.js Initialization
var typed = new Typed(".auto-type", {
    strings: [ "Developer", "Freelancer","Graphic Designer",],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
});


// Optional but recommended: Scroll Active Link Feature
const sections = document.querySelectorAll('.main-content section');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Use a 100px offset for smoother highlighting
        if (pageYOffset >= sectionTop - 100) { 
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});