// Load particles.js background
particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('particles.js config loaded');
});

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1200,
  once: true
});
