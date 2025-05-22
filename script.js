document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded!");

  // Create particle background
  createParticles();

  // Smooth scroll for navigation links
  initSmoothScroll();

  // Initialize fade-in animations
  initFadeInAnimations();
});

function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(particle);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

function initFadeInAnimations() {
  const fadeInElements = document.querySelectorAll('section');
  
  const fadeInOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  };

  const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInObserver.observe(element);
  });
}
