// ========================================
// 1) MOBILE MENU: Toggle the “open” class
// ========================================
const menuToggle = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('nav-links-mobile');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// ========================================
// 2) CAROUSEL NAVIGATION
// ========================================
const carouselImages = document.querySelectorAll('.carousel-container img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Show only the image at currentIndex
function updateCarousel() {
  carouselImages.forEach((img, idx) => {
    img.classList.toggle('active', idx === currentIndex);
  });
}

updateCarousel(); // show first image on load

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel();
});

// ========================================
// 3) BACK TO TOP BUTTON & NAVBAR HIDE/SHOW
// ========================================
const backToTopBtn = document.getElementById('backToTop');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  // Back-to-top visibility
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  // Navbar hide on scroll-down, show on scroll-up
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    document.querySelector('.navbar').classList.add('hidden');
  } else {
    document.querySelector('.navbar').classList.remove('hidden');
  }
  lastScrollY = currentScrollY;
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});