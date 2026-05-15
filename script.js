const learningTracks = {
  culture: {
    label: "Module 01",
    title: "Culture, traditions et identites",
    text:
      "Un parcours pour decouvrir les pratiques, symboles, traditions, recits et identites propres aux regions de Madagascar.",
    items: ["Video culturelle", "Storytelling interactif", "Fiche tradition", "Dossier premium"],
  },
  savoirfaire: {
    label: "Module 02",
    title: "Savoir-faire, artisanat et creations locales",
    text:
      "Un module pour comprendre les techniques, les gestes, les matieres, les artisans et les creations inspirees des identites regionales.",
    items: ["Presentation d'artisans", "Fiche savoir-faire", "Galerie de creations", "Dossier premium"],
  },
  histoire: {
    label: "Module 03",
    title: "Histoire, memoire et recits locaux",
    text:
      "Un parcours pour replacer les regions, les paysages, les traditions et les symboles dans leur contexte historique et culturel.",
    items: ["Chronologie regionale", "Recit local", "Carte historique", "Archive documentaire"],
  },
  langue: {
    label: "Module 04",
    title: "Langues et variantes regionales",
    text:
      "Expressions utiles, proverbes, vocabulaire culturel et variantes regionales pour comprendre que les usages ne sont pas identiques partout a Madagascar.",
    items: ["Expressions par region", "Proverbes et mots culturels", "Quiz de comprehension", "Audio regional premium a venir"],
  },
  documentation: {
    label: "Module 05",
    title: "Documentation et recherche",
    text:
      "Un module pour consulter les archives, cartes, references, descriptions de regions et contenus educatifs centralises.",
    items: ["Archive numerique", "Carte regionale", "Bibliographie", "Documents approfondis"],
  },
};

const regionData = {
  analamanga: {
    title: "Analamanga",
    text:
      "Hautes terres, memoire royale, collines, architectures anciennes, savoir-faire urbains et recits d'origine.",
    motif: "Culture, savoir-faire, histoire, langue",
    content: "Video, carte, fiche, archive, storytelling",
    colors: ["#9f3f38", "#b38446"],
  },
  atsinanana: {
    title: "Atsinanana",
    text:
      "Cote orientale, routes maritimes, forets humides, traditions du littoral et paysages relies a l'ocean.",
    motif: "Routes, ocean, traditions, savoir-faire",
    content: "Capsule video, lexique, carte, recit touristique",
    colors: ["#55799a", "#4f8072"],
  },
  boeny: {
    title: "Boeny",
    text:
      "Ouest lumineux, baobabs, memoire des ports, paysages secs et identites graphiques fortes.",
    motif: "Baobab, ouest, memoire, territoire",
    content: "Video, archive, carte, fiche regionale",
    colors: ["#2b241b", "#b38446"],
  },
  anosy: {
    title: "Anosy",
    text:
      "Sud-est, reliefs, vents, recits de passage, symboles aloalo et patrimoines a documenter.",
    motif: "Aloalo, relief, vent, transmission",
    content: "Video courte, note culturelle, documents sources",
    colors: ["#4f8072", "#9f3f38"],
  },
};

const learningTabs = document.querySelector("[data-learning-tabs]");
const learningView = document.querySelector("[data-learning-view]");
const board = document.querySelector("[data-region-board]");
const detail = document.querySelector("[data-region-detail]");
const story = document.querySelector("[data-story]");
const loginForm = document.querySelector("[data-login-form]");
const loginNote = document.querySelector("[data-login-note]");

if (learningTabs && learningView) {
  learningTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-track]");
    if (!button) return;

    const track = learningTracks[button.dataset.track];
    if (!track) return;

    learningTabs.querySelectorAll("[data-track]").forEach((tab) => {
      tab.classList.toggle("active", tab === button);
    });

    learningView.querySelector(".panel-label").textContent = track.label;
    learningView.querySelector("h3").textContent = track.title;
    learningView.querySelector("p").textContent = track.text;
    learningView.querySelector("ul").innerHTML = track.items.map((item) => `<li>${item}</li>`).join("");
  });
}

if (board && detail) {
  board.addEventListener("click", (event) => {
    const button = event.target.closest("[data-region]");
    if (!button) return;

    const region = regionData[button.dataset.region];
    if (!region) return;

    board.querySelectorAll("[data-region]").forEach((tab) => {
      tab.classList.toggle("active", tab === button);
    });

    detail.querySelector("h3").textContent = region.title;
    detail.querySelector("p").textContent = region.text;
    detail.querySelector("dd").textContent = region.motif;
    detail.querySelectorAll("dd")[1].textContent = region.content;
    detail.querySelector(".region-pattern").style.background = `
      linear-gradient(45deg, transparent 42%, rgba(255, 253, 248, 0.6) 43% 48%, transparent 49%),
      repeating-linear-gradient(90deg, rgba(49, 39, 25, 0.16) 0 10px, transparent 10px 22px),
      linear-gradient(135deg, ${region.colors[0]}, ${region.colors[1]})
    `;
  });
}

if (loginForm && loginNote) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginNote.textContent = "Prototype: espace auditeur pret pour un futur systeme premium.";
    loginNote.classList.add("success");
  });
}

document.querySelector("[data-open-story]")?.addEventListener("click", () => {
  story.hidden = false;
});

document.querySelector("[data-close-story]")?.addEventListener("click", () => {
  story.hidden = true;
});

