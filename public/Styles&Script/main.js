
/* HEADER */
const header = document.querySelector('header');
const navbar = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

window.addEventListener("scroll", function() {

    if (window.scrollY > header.offsetTop) {
        header.classList.add('header-bg');
    }else{
        header.classList.remove('header-bg');
    }

  });

  