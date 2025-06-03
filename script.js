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

// Show the image at currentIndex; hide others
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
// 3) BACK TO TOP BUTTON
// ========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  // Hide navbar when scrolling down, show when scrolling up
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

// ========================================
// 4) NAVBAR SCROLL TRACKER
// ========================================
let lastScrollY = window.scrollY;