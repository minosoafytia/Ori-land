const pages = {
    home: `
        <div class="page active">
            <div class="hero">
                <h2>Découvrez Madagascar<br>à travers l'<em>IA</em></h2>
                <p>Ori'land centralise les richesses culturelles de Madagascar avec une plateforme intelligente.</p>
                <button class="btn btn-primary" onclick="show('explorer')">Explorer</button>
                <button class="btn btn-secondary" onclick="show('assistant')">Chat IA</button>
            </div>
            <h3>📊 Statistiques</h3>
            <div class="stats">
                <div class="stat-card"><span class="stat-num">22</span>Régions</div>
                <div class="stat-card"><span class="stat-num">247</span>Articles</div>
                <div class="stat-card"><span class="stat-num">8</span>Fonctionnalités IA</div>
                <div class="stat-card"><span class="stat-num">1,240</span>Utilisateurs</div>
            </div>
            <h3>🌍 Régions</h3>
            <div class="grid">
                <div class="card" onclick="alert('Côte Est')"><h3>🌊 Côte Est</h3><p>Traditions marines</p></div>
                <div class="card" onclick="alert('Imerina')"><h3>🌾 Imerina</h3><p>Royauté, riziculture</p></div>
                <div class="card" onclick="alert('Diego')"><h3>🌿 Diego</h3><p>Baie d'Ambaro</p></div>
                <div class="card" onclick="alert('Sakalava')"><h3>🐊 Sakalava</h3><p>Baobabs</p></div>
            </div>
            <h3>✦ Recommandations IA</h3>
            <div class="ai-panel">
                <div class="ai-item"><h4>🌊 Traditions côtières</h4><p>97% match</p></div>
                <div class="ai-item"><h4>🎭 Hira Gasy</h4><p>94% match</p></div>
                <div class="ai-item"><h4>🌿 Pharmacopée</h4><p>89% match</p></div>
                <div class="ai-item"><h4>🏺 Zafimaniry</h4><p>85% match</p></div>
            </div>
        </div>
    `,
    explorer: `
        <div class="page active">
            <h2>Explorez les 22 régions</h2>
            <div class="grid">
                <div class="card"><h3>🌊 Côte Est</h3><p>Betsimisaraka</p></div>
                <div class="card"><h3>🌾 Imerina</h3><p>Hauts Plateaux</p></div>
                <div class="card"><h3>🌿 Diego</h3><p>Nord</p></div>
                <div class="card"><h3>🐊 Sakalava</h3><p>Ouest</p></div>
                <div class="card"><h3>🎵 Betsileo</h3><p>Centre</p></div>
                <div class="card"><h3>🌵 Mahafaly</h3><p>Grand Sud</p></div>
                <div class="card"><h3>🦎 Antanosy</h3><p>Sud-Est</p></div>
                <div class="card"><h3>🌺 Zafimaniry</h3><p>Est</p></div>
            </div>
        </div>
    `,
    docs: `
        <div class="page active">
            <h2>247 Articles</h2>
            <div class="grid">
                <div class="card"><h3>🎭 Famadihana</h3><p>Rituel ancestral</p></div>
                <div class="card"><h3>🎵 Valiha</h3><p>Instrument national</p></div>
                <div class="card"><h3>🏰 Rova</h3><p>Palais royal</p></div>
                <div class="card"><h3>🌳 Baobabs</h3><p>Allée mythique</p></div>
                <div class="card"><h3>🎨 Zafimaniry</h3><p>UNESCO</p></div>
                <div class="card"><h3>🌿 Pharmacopée</h3><p>Plantes</p></div>
            </div>
        </div>
    `,
    galerie: `
        <div class="page active">
            <h2>Galerie Culturelle</h2>
            <div class="grid">
                <div class="card"><h3>🧵 Tissages</h3><p>Lamba mena</p></div>
                <div class="card"><h3>🗿 Sculptures</h3><p>Aloalo</p></div>
                <div class="card"><h3>🏺 Poteries</h3><p>Céramiques</p></div>
                <div class="card"><h3>💍 Bijoux</h3><p>Parures</p></div>
                <div class="card"><h3>🏛️ Architecture</h3><p>Maisons</p></div>
                <div class="card"><h3>📂 Plus</h3><p>Explorez</p></div>
            </div>
        </div>
    `,
    artisans: `
        <div class="page active">
            <h2>Les Artisans</h2>
            <div class="grid">
                <div class="card"><h3>👨‍🎨 Tisseurs</h3><p>Lamba</p></div>
                <div class="card"><h3>🔧 Sculpteurs</h3><p>Bois</p></div>
                <div class="card"><h3>🏺 Potiers</h3><p>Céramique</p></div>
                <div class="card"><h3>⚒️ Forgerons</h3><p>Fer</p></div>
                <div class="card"><h3>🌳 Bûcherons</h3><p>Bois</p></div>
                <div class="card"><h3>📍 Carte</h3><p>Localisation</p></div>
            </div>
        </div>
    `,
    podcast: `
        <div class="page active">
            <h2>🎙️ Podcast IA</h2>
            <div class="grid">
                <div class="card"><h3>Ep.1 - Famadihana</h3><p>25 min</p></div>
                <div class="card"><h3>Ep.2 - Valiha</h3><p>18 min</p></div>
                <div class="card"><h3>Ep.3 - Nord</h3><p>22 min</p></div>
                <div class="card"><h3>Ep.4 - Zafimaniry</h3><p>20 min</p></div>
            </div>
        </div>
    `,
    boutique: `
        <div class="page active">
            <h2>🛍️ Boutique Foulards</h2>
            <div class="grid">
                <div class="card"><h3>🌊 Côte Est</h3><p>45,000 Ar</p></div>
                <div class="card"><h3>🌾 Imerina</h3><p>55,000 Ar</p></div>
                <div class="card"><h3>🐊 Sakalava</h3><p>40,000 Ar</p></div>
                <div class="card"><h3>👑 Premium</h3><p>85,000 Ar</p></div>
                <div class="card"><h3>⭐ Limited</h3><p>120,000 Ar</p></div>
                <div class="card"><h3>🛒 Panier</h3><p>0 articles</p></div>
            </div>
        </div>
    `,
    assistant: `
        <div class="page active">
            <h2>🤖 Assistant IA</h2>
            <div class="ai-panel">
                <h3>Guide IA</h3>
                <p>Bonjour ! Je suis votre assistant culturel. Comment puis-je vous aider ?</p>
                <input type="text" placeholder="Posez une question..." style="width: 100%; padding: 0.75rem; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px; font-family: 'DM Sans';">
                <button class="btn btn-primary" onclick="alert('Famadihana')">Famadihana</button>
                <button class="btn btn-primary" onclick="alert('Cultures')">Cultures</button>
                <button class="btn btn-primary" onclick="alert('Artisanat')">Artisanat</button>
            </div>
        </div>
    `,
    analytics: `
        <div class="page active">
            <h2>📊 Analytics</h2>
            <div class="grid">
                <div class="card"><h3>Régions</h3><p>Imerina 34% • Côte Est 28%</p></div>
                <div class="card"><h3>Sessions IA</h3><p>Total: 24 • Semaine: 8</p></div>
                <div class="card"><h3>Articles favoris</h3><p>Famadihana • Zafimaniry</p></div>
                <div class="card"><h3>Recommandations</h3><p>Pertinence: 92%</p></div>
            </div>
        </div>
    `,
    profil: `
        <div class="page active">
            <h2>👤 Mon Profil</h2>
            <div class="grid">
                <div class="card"><h3>📈 Activité</h3><p>Articles: 47 • Régions: 12</p></div>
                <div class="card"><h3>💾 Préférences</h3><p>Langue: Français • Région: Imerina</p></div>
                <div class="card"><h3>✦ Insights</h3><p>Intérêt pour rituels et musique</p></div>
                <div class="card"><h3>🎁 Badges</h3><p>Explorateur: 12 régions</p></div>
            </div>
        </div>
    `
};

function show(page) {
    document.getElementById('content').innerHTML = pages[page] || pages.home;
    
    const titles = {
        home: 'Accueil',
        explorer: 'Explorer',
        docs: 'Documentation',
        galerie: 'Galerie',
        artisans: 'Artisans',
        podcast: 'Podcast',
        boutique: 'Boutique',
        assistant: 'Assistant IA',
        analytics: 'Analytics',
        profil: 'Profil'
    };
    document.getElementById('title').textContent = titles[page] || 'Ori\'land';
    
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    show('home');
});
