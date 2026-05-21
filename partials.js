// Shared header, footer, active nav, search toast, and assistant demo.
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const header = `
    <header class="site-header">
      <div class="container row">
        <a href="index.html" class="brand">Ori<b>'</b>land</a>
        <nav class="nav">
          <a href="index.html" data-route="index.html">Accueil</a>
          <a href="regions.html" data-route="regions.html">Regions</a>
          <a href="bibliotheque.html" data-route="bibliotheque.html">Documentation</a>
          <a href="foulards.html" data-route="foulards.html">Creations</a>
          <a href="scan.html" data-route="scan.html">Scan</a>
          <a href="auditeurs.html" data-route="auditeurs.html">Auditeurs</a>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container row">
        <div>
          <div class="brand footer-brand">Ori<b>'</b>land</div>
          <small>Patrimoine, data et transmission culturelle</small>
        </div>
        <div class="footer-note">
          Une experience culturelle augmentee par l'IA, la data,
          la documentation et les parcours d'apprentissage.
        </div>
        <small>2026 Ori'land</small>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.dataset.route === path) link.classList.add("active");
  });

  let toastTimer;
  window.showToast = function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  };

  const searchInput = document.querySelector("[data-semantic-search]");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim();
      if (query.length > 2) {
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          window.showToast(`Recherche semantique lancee pour "${query}"`);
        }, 600);
      }
    });
  }

  const input = document.querySelector("#chat-input");
  const body = document.querySelector("#chat-body");
  const send = document.querySelector(".send");

  function answer(query) {
    if (!query || !body) return;
    const user = document.createElement("div");
    user.className = "msg user";
    user.innerHTML = `<div class="av">U</div><div class="bubble">${query}</div>`;
    body.appendChild(user);

    setTimeout(() => {
      const bot = document.createElement("div");
      bot.className = "msg bot";
      const q = query.toLowerCase();
      let response = "J'ai relie votre demande au centre de documentation, aux regions proches, aux ressources d'apprentissage et aux contenus audio disponibles.";
      if (q.includes("mer") || q.includes("marine") || q.includes("chaude")) {
        response = "Parcours recommande: zone cotiere, couleurs chaudes, symboles de navigation, recits audio courts et ressources associees.";
      } else if (q.includes("scan") || q.includes("motif")) {
        response = "Le scan ouvre une fiche augmentee: origine du motif, contexte culturel, traduction, audio court et ressources liees.";
      } else if (q.includes("data") || q.includes("tendance")) {
        response = "Les donnees montrent les zones les plus consultees, les motifs les plus scannes et les couleurs qui performent le mieux.";
      }
      bot.innerHTML = `<div class="av">IA</div><div><div class="bubble">${response}</div></div>`;
      body.appendChild(bot);
      body.scrollTop = body.scrollHeight;
    }, 420);
  }

  if (input && body) {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && input.value.trim()) {
        answer(input.value.trim());
        input.value = "";
      }
    });
  }

  if (send && input) {
    send.addEventListener("click", () => {
      answer(input.value.trim());
      input.value = "";
    });
  }

  document.querySelectorAll(".suggest button").forEach((button) => {
    button.addEventListener("click", () => answer(button.textContent));
  });
})();
