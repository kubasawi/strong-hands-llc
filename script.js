/************************************************
 * Toggle mobile menu when the hamburger is clicked
 ************************************************/
const menuToggle = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('nav-links-mobile');

menuToggle.addEventListener('click', () => {
  if (mobileNav.style.display === 'flex') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'flex';
  }
});

/************************************************
 * Simple Carousel (Gallery Page)
 ************************************************/
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-container img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

/* Initialize first slide if on Gallery page */
if (slides.length > 0) {
  showSlide(0);
}

/************************************************
 * Back to Top Button
 ************************************************/
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
