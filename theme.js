// Apply the theme before the stylesheet paints.
(() => {
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch { /* Storage may be disabled. */ }
  document.documentElement.dataset.theme = saved === 'light' || saved === 'dark'
    ? saved : (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
})();
