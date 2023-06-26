
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

/* MENU TOGGLER */
const menu = document.querySelector('.menu');
const zavesa = document.querySelector('.zavesa');
let active = false;
function menuToggler() {
    console.log('click');

    if (active === false) {
        menu.classList.remove('hidden');
        zavesa.classList.remove('hidden');
        document.body.classList.add("stop-scrolling");
        active = true;
    } else {
        menu.classList.add('hidden');
        zavesa.classList.add('hidden');
        document.body.classList.remove("stop-scrolling");
        active = false;
    }

}

/* CLOSE MENU */
function closeMenu() {
    if (active === true) {
        menu.classList.add('hidden');
        zavesa.classList.add('hidden');
        document.body.classList.remove("stop-scrolling");
        active = false;
    }
}
  