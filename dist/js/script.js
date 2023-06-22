const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const fixedNav = header.offsetTop;



// Scroll sections active link
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      header.classList.add('navbar-fixed');
    } else if (top == 0) {
      header.classList.remove('navbar-fixed');
    }

  });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#menu-navbar');
let isMenuOpen = false;

menuIcon.onclick = () => {
  if (isMenuOpen) {
    navbar.classList.add('hidden');
    menuIcon.src = '/dist/img/bx-menu.svg';
  } else {
    menuIcon.src = '/dist/img/bx-x.svg';
    navbar.classList.remove('hidden');
  }
  
  isMenuOpen = !isMenuOpen
};

// scrollReveal

ScrollReveal({ 
  // reset: true,
  distance: '50px',
  duration: 2000,
  delay:200
 });

 ScrollReveal().reveal('#home, #about, #services, #portofolio, #contact', { origin: 'top' });
 ScrollReveal().reveal('h2, #home-img', { origin: 'bottom' });
 ScrollReveal().reveal('h1, #about-img', { origin: 'left' });
 ScrollReveal().reveal('p', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['Fronted Developer', 'Youtuber', 'Blogger', 'Editor Video',],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

function readMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    moreText.classList.add('hidden');
    btnText.innerHTML = "Read more"; 
  } else {
    dots.classList.add('hidden');
    btnText.innerHTML = "Read less"; 
    moreText.classList.remove('hidden');
  }
}

// // Handle mouseenter and mouseleave events for the header
// header.addEventListener('mouseenter', () => {
//   isMouseOverHeader = true;
//   if (window.pageYOffset <= fixedNav) {
//     header.classList.add('navbar-fixed');
//   }
// });

// header.addEventListener('mouseleave', () => {
//   isMouseOverHeader = false;
//   if (!window.scrollY) {
//     header.classList.remove('navbar-fixed');
//   }
// });

// Timer to remove navbar-fixed after a delay when scrolling stops
// let scrollTimer;
// const scrollDelay = 2500; // Waktu mundur (dalam milidetik)

// window.addEventListener('scroll', () => {
//   clearTimeout(scrollTimer);
//   scrollTimer = setTimeout(() => {
//     if (!isMouseOverHeader) {
//       header.classList.remove('navbar-fixed');
//     }
//   }, scrollDelay);
// });