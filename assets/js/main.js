document.addEventListener('DOMContentLoaded', function () {
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = newsletterForm.elements['email'].value;
      alert(`Thank you for subscribing with ${email}! Enjoy 10% off your first purchase.`);
      newsletterForm.reset();
    });
  }

  // Instagram feed placeholder
  const instaFeed = document.getElementById('insta-feed');
  if (instaFeed) {
    instaFeed.innerHTML = '<p>Instagram feed integration coming soon.</p>';
  }

  // Lottie Animation for Spinning Charkha
  const lottieContainer = document.getElementById('lottie-charkha');
  if (lottieContainer && typeof lottie !== 'undefined') {
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/lottie/spinning-charkha.json'
    });
  }
});
