const revealItems = document.querySelectorAll('.metric-card, .path-item, .map-node');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
  revealObserver.observe(item);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.add('has-navigated');
  });
});