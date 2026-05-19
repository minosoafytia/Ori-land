// Header + footer injection + active nav + tiny chat demo
(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const header = `
    <header class="site-header">
      <div class="container row">
        <a href="index.html" class="brand">Ori<b>'</b>land</a>
        <nav class="nav">
          <a href="index.html" data-route="index.html">Accueil</a>
          <a href="regions.html" data-route="regions.html">Régions</a>
          <a href="bibliotheque.html" data-route="bibliotheque.html">Bibliothèque</a>
          <a href="foulards.html" data-route="foulards.html">Foulards</a>
          <a href="scan.html" data-route="scan.html">Scan QR</a>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container row">
        <div>
          <div class="brand" style="color:var(--sand)">Ori<b style="color:var(--ochre)">'</b>land</div>
          <small>Ny lova ho an'ny taranaka — Patrimoine pour les générations</small>
        </div>
        <div style="font-size:12px;color:rgba(245,230,211,.6);max-width:300px">
          Plateforme culturelle augmentée par l'IA — 22 régions, archives vivantes, foulards à QR codes.
        </div>
        <small>© 2026 Ori'land · Madagascar</small>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  document.querySelectorAll('.nav a').forEach(a => {
    if (a.dataset.route === path) a.classList.add('active');
  });

  // Chat demo
  const input = document.querySelector('#chat-input');
  const body = document.querySelector('#chat-body');
  if (input && body) {
    const respond = (q) => {
      const u = document.createElement('div');
      u.className = 'msg user';
      u.innerHTML = `<div class="av">👤</div><div class="bubble">${q}</div>`;
      body.appendChild(u);
      setTimeout(() => {
        const b = document.createElement('div');
        b.className = 'msg bot';
        b.innerHTML = `<div class="av">🤖</div><div><div class="bubble">D'après notre base culturelle, voici une piste autour de <strong>« ${q} »</strong> — explore les régions liées et les motifs associés.</div></div>`;
        body.appendChild(b);
        body.scrollTop = body.scrollHeight;
      }, 400);
    };
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && input.value.trim()) {
        respond(input.value.trim());
        input.value = '';
      }
    });
    document.querySelectorAll('.suggest button').forEach(btn => {
      btn.addEventListener('click', () => respond(btn.textContent));
    });
  }
})();
