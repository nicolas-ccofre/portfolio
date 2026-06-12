// NAV scroll effect + back to top visibility
const nav = document.getElementById('nav');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('visible', window.scrollY > 600);
});

// Back to top click
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Catalog filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.catalog__item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
      if (match) {
        item.style.animation = 'none';
        requestAnimationFrame(() => {
          item.style.animation = 'fadeUp 0.4s ease forwards';
        });
      }
    });
  });
});

// Intersection Observer for fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.team__card, .catalog__item, .pricing__card, .section__header').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = '✓ Mensaje enviado';
  btn.style.background = '#34d399';
  btn.style.color = '#111';
  setTimeout(() => {
    btn.textContent = 'Enviar mensaje →';
    btn.style.background = '';
    btn.style.color = '';
    contactForm.reset();
  }, 3000);
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
