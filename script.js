'use strict';

const themeButton = document.querySelector('.theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: light)');
let manualTheme = false;
try { manualTheme = ['light', 'dark'].includes(localStorage.getItem('portfolio-theme')); } catch { /* Optional persistence. */ }
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const light = theme === 'light';
  if (themeButton) {
    themeButton.title = light ? 'Activer le mode sombre' : 'Activer le mode clair';
    themeButton.setAttribute('aria-label', light ? 'Activer le mode sombre' : 'Activer le mode clair');
    themeButton.setAttribute('aria-pressed', String(light));
  }
  document.querySelector('meta[name="theme-color"]').content = light ? '#F5F3EC' : '#07111F';
}
applyTheme(document.documentElement.dataset.theme || 'dark');
if (themeButton) {
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    manualTheme = true;
    applyTheme(theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Works without storage. */ }
  });
}
systemTheme.addEventListener('change', event => {
  if (!manualTheme) applyTheme(event.matches ? 'light' : 'dark');
});

// Links keep opening the original images when JavaScript or <dialog> is unavailable.
const lightbox = document.querySelector('.lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');
  let images = [];
  let current = 0;
  let opener;

  function render() {
    const link = images[current];
    const source = link.querySelector('img');
    image.src = link.href;
    image.alt = source.alt;
    image.width = source.width;
    image.height = source.height;
    caption.textContent = `${current + 1} / ${images.length} — ${link.closest('figure').querySelector('figcaption').textContent}`;
  }
  function move(direction) {
    current = (current + direction + images.length) % images.length;
    render();
    lightbox.querySelector('.lightbox-image').scrollTop = 0;
  }
  document.querySelectorAll('.spat-gallery a').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      images = [...link.closest('.spat-gallery').querySelectorAll('a')];
      current = images.indexOf(link);
      render();
      lightbox.showModal();
      document.body.classList.add('gallery-open');
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelectorAll('[data-direction]').forEach(button => {
    button.addEventListener('click', () => move(Number(button.dataset.direction)));
  });
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  lightbox.addEventListener('click', event => {
    const bounds = lightbox.getBoundingClientRect();
    if (event.target === lightbox && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    document.body.classList.remove('gallery-open');
    opener?.focus({ preventScroll: true });
  });
}
