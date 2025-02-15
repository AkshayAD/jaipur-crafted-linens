// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

// GSAP Animations
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
});

gsap.from(".product-section", {
  scrollTrigger: {
    trigger: ".product-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});
