// almirdefreitas.com.br — main.js

// Busca ao vivo nos posts
function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.card');
    let visible = 0;

    cards.forEach(card => {
      const title = card.querySelector('h2')?.textContent.toLowerCase() || '';
      const body  = card.querySelector('p')?.textContent.toLowerCase()  || '';
      const match = title.includes(q) || body.includes(q) || q === '';
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    const counter = document.getElementById('search-count');
    if (counter) {
      counter.textContent = q ? `${visible} resultado${visible !== 1 ? 's' : ''}` : '';
    }
  });
}

// Marcar nav item ativo
function markActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === path ||
        (path.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
      a.classList.add('active');
    }
  });
}

// Ano no footer
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  markActiveNav();
  setYear();
});
