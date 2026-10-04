(() => {
  const data = window.portfolioData;
  const profile = data.profile;
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const list = (items, className = '') => `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  const pills = (items, className = 'tag-list') => `<div class="${className}">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>`;

  document.querySelectorAll('[data-profile]').forEach((element) => {
    element.textContent = profile[element.dataset.profile] || '';
  });
  document.getElementById('about-summary').textContent = `${profile.summary} I have worked across production support, infrastructure operations, cloud activities, and deployment automation, helping enterprise environments remain stable while improving delivery efficiency through scripting, monitoring, and process automation.`;
  document.getElementById('terminal-lines').innerHTML = data.terminalLines.map((line) => `<div>${escapeHtml(line)}</div>`).join('');

  document.getElementById('metrics').innerHTML = data.metrics.slice(0, 3).map((metric) => `<div class="metric-item"><strong>${escapeHtml(metric.value)}</strong><span>${escapeHtml(metric.label)}</span></div>`).join('');
  document.getElementById('impact-metrics').innerHTML = data.metrics.map((metric) => `<article class="impact-item reveal"><strong>${escapeHtml(metric.value)}</strong><h3>${escapeHtml(metric.label)}</h3><p>${escapeHtml(metric.description)}</p></article>`).join('');

  document.getElementById('experience-list').innerHTML = data.experiences.map((job, index) => `
    <article class="job-card reveal ${index % 2 ? 'job-offset' : ''}">
      <div class="job-meta"><span>${escapeHtml(job.type)}</span><time>${escapeHtml(job.period)}</time></div>
      <h3>${escapeHtml(job.title)}</h3><p class="job-company">${escapeHtml(job.company)}</p><p class="job-location">${escapeHtml(job.location)}</p>
      ${list(job.highlights, 'detail-list')}${pills(job.stack, 'tag-list job-tags')}
    </article>`).join('');

  document.getElementById('skill-groups').innerHTML = data.skillGroups.map((group) => `<article class="skill-group reveal"><h3>${escapeHtml(group.title)}</h3>${pills(group.items)}</article>`).join('');
  document.getElementById('project-cases').innerHTML = data.projectCases.map((project) => `
    <article class="project-card reveal"><div class="project-topline"><span>CASE STUDY</span><span>LIVE SYSTEMS</span></div>
      <h3>${escapeHtml(project.name)}</h3><p class="project-summary">${escapeHtml(project.summary)}</p>
      <div class="project-detail"><h4>Problem</h4><p>${escapeHtml(project.problem)}</p></div>
      <div class="project-detail"><h4>Architecture</h4>${list(project.architecture, 'compact-list')}</div>
      ${pills(project.technologies, 'tag-list project-tags')}
      <div class="project-detail outcome-detail"><h4>Outcomes</h4>${list(project.outcomes, 'compact-list outcome-list')}</div>
    </article>`).join('');
  document.getElementById('journey-stages').innerHTML = data.journeyStages.map((stage, index) => `<li class="journey-stage reveal"><span>${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtml(stage)}</strong></li>`).join('');
  document.getElementById('github-note').textContent = 'Public repository activity and profile URL were not included in the provided sources, so the profile is intentionally left configurable and ready to be filled in once the exact GitHub handle is provided.';
  document.getElementById('github-highlights').innerHTML = data.githubHighlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join('');

  const contactLinks = [
    `<a href="mailto:${encodeURIComponent(profile.email)}"><span>EMAIL</span><strong>${escapeHtml(profile.email)}</strong><b aria-hidden="true">↗</b></a>`,
    `<a href="tel:${profile.phone.replace(/\s+/g, '')}"><span>PHONE</span><strong>${escapeHtml(profile.phone)}</strong><b aria-hidden="true">↗</b></a>`,
    profile.linkedinUrl ? `<a href="${escapeHtml(profile.linkedinUrl)}" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>Connect on LinkedIn</strong><b aria-hidden="true">↗</b></a>` : ''
  ].filter(Boolean);
  document.getElementById('contact-links').innerHTML = contactLinks.join('');

  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navLinks.classList.toggle('is-open', !isOpen);
  });
  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      navLinks.classList.remove('is-open');
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }
})();