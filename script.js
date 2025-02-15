// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.5,
    }
  }
});

// Initialize Lottie Animations
const loadingAnim = lottie.loadAnimation({
  container: document.getElementById('loading-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/lottie/loading-animation.json'
});

const fabricFlowAnim = lottie.loadAnimation({
  container: document.getElementById('fabric-flow-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/lottie/fabric-flow.json'
});

// Hide Loading Screen
window.addEventListener('load', () => {
  gsap.to("#loading-screen", {
    opacity: 0,
    duration: 0.8,
    onComplete: () => {
      document.getElementById('loading-screen').style.display = 'none';
    }
  });
});

// Initialize Particles
particlesJS('particles-js', particlesConfig);

// GSAP Scroll Animations
gsap.utils.toArray('.process-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});
