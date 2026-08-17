(() => {
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  loadScript('photo-fix.js?v=20260817')
    .then(() => loadScript('app.js?v=20260817'))
    .catch((error) => console.error('Unable to load site assets:', error));
})();
