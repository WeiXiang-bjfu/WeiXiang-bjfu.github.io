(() => {
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  const applyProfile = () => {
    const displayName = 'Dr. Xiang, Wei';
    document.title = `${displayName} | Beijing Forestry University`;

    const siteName = document.querySelector('.site-name');
    const profileName = document.querySelector('.profile-column h1');
    const role = document.querySelector('.role');
    const secondaryRole = document.querySelector('.secondary-role');
    const biography = document.querySelectorAll('.bio-column > p');

    if (siteName) siteName.textContent = displayName;
    if (profileName) profileName.textContent = displayName;
    if (role) role.textContent = 'Full Professor · Forest Management & Modelling';
    if (secondaryRole) secondaryRole.textContent = 'Vice Dean of the Graduate School · Beijing Forestry University';

    const paragraphs = [
      'I am a Full Professor at the School of Forestry and Vice Dean of the Graduate School at Beijing Forestry University. My research focuses on forest growth modelling, forest dynamics, and the multifunctional management of natural forests.',
      'Using natural mixed forests as my primary study system, I combine statistical modelling and simulation approaches to investigate how tree competition, climate change, and silvicultural interventions affect stand growth, structural dynamics, and ecosystem multifunctionality. My work integrates multiple data sources, including long-term permanent-plot records, tree-ring data, LiDAR point clouds, and remote-sensing observations.',
      'My research integrates quantitative forest science with adaptive management to support precise, data-driven, and multifunctional management of natural and near-natural mixed forests under environmental change.'
    ];

    biography.forEach((paragraph, index) => {
      if (paragraphs[index]) paragraph.textContent = paragraphs[index];
    });

    const footerName = document.querySelector('.footer-row span:first-child');
    if (footerName) footerName.textContent = `© ${new Date().getFullYear()} ${displayName}`;
  };

  loadScript('/photo-fix.js?v=20260817')
    .then(() => loadScript('/app.js?v=20260817'))
    .then(applyProfile)
    .catch((error) => {
      console.error('Unable to load site assets:', error);
      applyProfile();
    });
})();
