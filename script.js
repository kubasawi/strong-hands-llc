document.addEventListener('DOMContentLoaded', () => {
  // Toggle the mobile menu
  const menuToggle = document.getElementById('mobile-menu');
  const mobileNav = document.getElementById('nav-links-mobile');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Carousel navigation
  const carouselImages = document.querySelectorAll('.carousel-container img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function updateCarousel() {
    carouselImages.forEach((img, idx) => {
      img.classList.toggle('active', idx === currentIndex);
    });
  }

  if (carouselImages.length > 0) {
    updateCarousel();
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
      updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % carouselImages.length;
      updateCarousel();
    });
  }

  // Back to Top & Navbar hide/show
  const backToTopBtn = document.getElementById('backToTop');
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    // Show/hide back-to-top
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }

    // Hide navbar when scrolling down any amount, show when scrolling up
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 1) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Update footer year if present
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
  }
});