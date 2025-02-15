// animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.from(".hero-content h2", {
  duration: 1.5,
  opacity: 0,
  y: 100,
  ease: "power4.out"
});

gsap.from(".hero-content p", {
  duration: 1.2,
  opacity: 0,
  y: 50,
  delay: 0.3,
  ease: "expo.out"
});

// Product Card Animations
gsap.from(".product-card", {
  scrollTrigger: {
    trigger: ".product-section",
    start: "top 80%"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// Artisan Story Animations
gsap.from(".artisan-card", {
  scrollTrigger: {
    trigger: ".artisan-section",
    start: "top 80%"
  },
  duration: 1,
  scale: 0.8,
  opacity: 0,
  stagger: 0.3,
  ease: "elastic.out(1, 0.5)"
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out"
  });
});

document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 2, backgroundColor: "rgba(197, 162, 110, 0.5)" });
  });
  element.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, backgroundColor: "transparent" });
  });
});
