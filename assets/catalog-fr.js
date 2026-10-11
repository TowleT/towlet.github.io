// Oxford Bean Publishing — FRENCH catalogue data (used by the /fr/ pages)
//
// Load this AFTER data/catalog.js — it builds the French list from two parts:
//   1. CHIMERE_FR — the French edition of Chimera (all text in French)
//   2. the English books from BOOKS, with French genre/blurb text from
//      FR_OVERRIDES below, and marked "en anglais"
//
// Same rules as catalog.js: every text string stays on ONE line, straight
// double quotes to open/close. \u00A0 is a non-breaking space — French
// typography puts one before : ; ? ! and inside « guillemets ».
// ─────────────────────────────────────────────────────────────

const CHIMERE_FR = {
  slug: "chimere",
  title: "Chimère",
  subtitle: "La Chronique d'Hypatia",
  author: "Thomas E. Towle",
  genre: "Science-fiction littéraire",
  series: "Le Cycle d'Hypatia",
  year: 2026,
  status: "available",               // "available" | "coming-soon"
  isbn: "978-1-0678184-8-7",         // broché (paperback)
  isbnEbook: "978-1-0678184-9-4",
  cover: "fr-chimera.png",           // TOM: drop this file next to towle.html (site root, NOT inside /fr/)
  blurb: "Un monde d'après les Guerres du Carbone. Un homme plongé dans le coma qui bâtit des mondes miniatures pour résister à ses geôliers. Un fossile qui n'est peut-être pas ce que chacun croit. Et une histoire d'amour face à la plus ancienne question inscrite dans la pierre.",
  synopsis: [
    "Dans un monde d'après les Guerres du Carbone, fait de nations effondrées et de théocratie renaissante, <strong>Luchs</strong> — chasseur de fossiles, dioramiste et homme des montagnes — est plongé dans un coma artificiel, dans un hôpital contrôlé par les <strong>Précisiens</strong>, un gouvernement religieux impitoyable qui s'est emparé du pouvoir sur la côte Pacifique. Les Précisiens ne veulent qu'une chose\u00A0: l'emplacement d'un fossile préhistorique extraordinaire, la <strong>Chimère</strong>, enfoui quelque part dans les Montagnes Brillantes. Luchs est le seul à savoir où il se trouve. Et, même inconscient, il résiste — il bâtit des dioramas mentaux élaborés, des mondes miniatures assemblés de mémoire, autant de pièces verrouillées où ses geôliers ne peuvent jamais tout à fait entrer.",
    "Dans ce face-à-face survient <strong>Ben</strong>, un moine historien enrôlé de force au service des Précisiens, qui introduit clandestinement un ancien cylindre d'IA nommé <strong>Bot</strong> dans l'appareil de lecture des pensées de l'hôpital. Bot est patient, énigmatique, et poursuit un dessein obscur qui n'appartient qu'à lui. Il enregistre tout, fournit aux Précisiens de fausses coordonnées et transmet les souvenirs-dioramas de Luchs à <strong>Riel</strong>, le chef charismatique de la résistance des montagnes. Une course à trois s'engage\u00A0: les Précisiens qui extraient, Riel qui prépare un sauvetage, et Luchs — au plus profond de son coma — qui se souvient.",
    "Et ce dont il se souvient, c'est d'<strong>Hypatia</strong>. Scientifique brillante, force politique, grand amour de sa vie, Hypatia est dévorée de l'intérieur par ce qu'elle appelle la Voix de la Maladie — une présence qui a appris à parler avec sa propre cadence, qui attise ses ambitions et remplace lentement sa chaleur par la doctrine. Luchs l'aime avec la plénitude d'un homme dont le métier est de construire des mondes. Il voit sa destruction avec une parfaite lucidité, et il est impuissant à l'empêcher.",
    "Le fossile de la Chimère est l'axe autour duquel tournent toutes les factions. Pour les Précisiens, une menace à étouffer. Pour Riel et les gens des montagnes, un objet sacré que leurs légendes interdisent de jamais troubler. Pour Hypatia, la preuve d'une divergence évolutive ancienne — la preuve que l'espèce humaine recèle des voies biologiques réprimées, qui pourraient être réactivées pour assurer sa survie au-delà d'une Terre mourante. Elle croit pouvoir concevoir la prochaine étape de l'humanité. Elle a déjà commencé.",
    "Ce qu'aucun d'eux ne mesure pleinement, c'est la théorie la plus sombre de Luchs\u00A0: le fossile porterait la signature génétique de quelque chose de bien plus ancien que l'évolution — un organisme banni sur une Terre sans vie il y a des milliards d'années, qui s'est depuis insinué dans chaque forme de vie prometteuse, en attendant celle qui serait capable de le ramener vers les étoiles. Et la Voix de la Maladie qui dévore Hypatia n'est peut-être pas une maladie du tout. Ce pourrait être une arrivée.",
    "<em>Chimère</em> est un roman sur la résistance et les limites de l'amour, sur ceux qui contrôlent le passé et possèdent donc l'avenir, et sur ce que signifie construire une image fidèle du monde quand le monde lui-même est réécrit autour de soi."
  ],
  // TOM: if the translation renders Bot's line differently, paste the translator's exact wording here instead
  synopsisQuote: "«\u00A0Le fossile et moi attendons depuis aussi longtemps. Un seul de nous deux sait pourquoi.\u00A0» — Bot",
  translations: [
    { lang: "en", label: "Read in English — Chimera", url: "towle.html#book-chimera" }
  ],
  retailers: [
    { name: "Amazon.fr", format: "Broché", url: "https://www.amazon.fr/dp/1067818480" },
    { name: "Amazon.fr", format: "Kindle", url: "https://www.amazon.fr/dp/B0HMFVH8B1" }
  ]
};

// French text for the English-language books (keyed by slug).
// A blurb of "" hides the description for that book on the French site.
const FR_OVERRIDES = {
  "chimera": {
    genre: "Science-fiction littéraire", series: "Le Cycle d'Hypatia",
    langNote: "Édition originale en anglais",
    blurb: "L'édition originale anglaise de <em>Chimère</em>, en broché et en numérique."
  },
  "amos": {
    genre: "Fiction littéraire", langNote: "En anglais",
    blurb: "Un été. Une route. L'Europe pour école, le Maroc pour épreuve de vérité. Le voyage d'un jeune auto-stoppeur à travers l'Europe et l'Amérique du Nord dans les années 1970 — réédité sous le nom de Thomas E. Towle."
  },
  "flymph": { genre: "Fiction littéraire", langNote: "En anglais", blurb: "" },
  "nova-georgic": { genre: "Fiction littéraire", langNote: "En anglais", blurb: "" },
  "slumber-queen": {
    genre: "Récit de voyage", langNote: "En anglais",
    blurb: "Un désert desséché ne guérit pas peu à peu — il se noie dans les éclairs fous d'une mousson et reverdit en une nuit. Soma espère, sans le dire, le même miracle."
  }
};

const BOOKS_FR = [CHIMERE_FR].concat(BOOKS.map(function (b) {
  const fr = Object.assign({}, b, FR_OVERRIDES[b.slug] || { langNote: "En anglais" });
  fr.synopsis = null;          // English synopses stay on the English site
  fr.synopsisQuote = null;
  fr.translations = null;
  // hide placeholder samples ("TOM: paste…") on the French site
  if (fr.excerpt && fr.excerpt.length && /^TOM:/.test(fr.excerpt[0])) fr.excerpt = null;
  // French retailer labels
  fr.retailers = (b.retailers || []).map(function (r) {
    const map = { "Paperback": "Broché", "Read Sample": "Feuilleter", "Kindle": "Kindle",
                  "Order via your local bookstore": "Commander chez votre libraire", "In store": "En magasin" };
    return Object.assign({}, r, { format: map[r.format] || r.format });
  });
  return fr;
}));
