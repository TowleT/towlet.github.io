// ─────────────────────────────────────────────────────────────
// Oxford Bean Publishing — catalog data
//
// This is the ONLY file to edit when:
//   • a new book is published            → add an object to BOOKS
//   • a bookstore starts carrying a book  → add an entry to that
//                                            book's "retailers" array
//   • a book is out of print / delayed    → change its "status"
//
// index.html and towle.html both read this file and render
// themselves from it — no other HTML needs to change.
// ─────────────────────────────────────────────────────────────

const BOOKS = [
  {
    slug: "chimera",
    title: "Chimera",
    subtitle: "The Hypatia Chronicle",
    author: "Thomas E. Towle",
    genre: "Literary Science Fiction",
    series: "The Hypatia Cycle",
    year: 2026,
    status: "available",              // "available" | "coming-soon"
    isbn: "978-0-9812955-6-5",
    isbnEbook: "978-1-06-781840-1",
    cover: "bookcover.png",           // TOM: drop this file next to towle.html
    blurb: "A post-Carbon Wars world. A man in a coma building miniature worlds to resist his captors. A fossil that may not be what anyone thinks it is. And a love story set against the oldest question in the stone.",
    // Optional expandable synopsis — omit this key entirely for books that don't have one yet
    synopsis: [
      "In a post-Carbon Wars world of collapsed nations and resurgent theocracy, <strong>Luchs</strong> — fossil hunter, diorama artist, and mountain man — lies in an induced coma in a hospital controlled by the <strong>Precisians</strong>, a ruthless religious government that has seized power along the Pacific coast. The Precisians want one thing: the location of an extraordinary prehistoric fossil, the <strong>Chimera</strong>, buried somewhere in the Shining Mountains. Luchs alone knows where it lies. And even unconscious, he resists — building elaborate mental dioramas, miniature worlds assembled from memory, each one a locked room his captors cannot fully enter.",
      "Into this standoff comes <strong>Ben</strong>, a monk-historian press-ganged into Precisian service, who smuggles an ancient AI cylinder called <strong>Bot</strong> into the hospital's thought-reading apparatus. Bot is patient, cryptic, and possessed of its own obscure agenda. It records everything, feeds the Precisians false coordinates, and transmits Luchs's diorama-memories to <strong>Riel</strong>, the charismatic leader of the mountain rebel movement. A three-way race is underway: the Precisians extracting, Riel planning a rescue, and Luchs — deep in his coma — remembering.",
      "What he remembers is <strong>Hypatia</strong>. Brilliant scientist, political force, and the defining love of his life, Hypatia is being consumed from within by what she calls the Disease Voice — a presence that has learned to speak in her own cadence, that drives her ambitions and slowly replaces her warmth with doctrine. Luchs loves her with the completeness of a man who builds worlds for a living. He sees her destruction with perfect clarity, and is helpless before it.",
      "The Chimera fossil is the axis around which every faction turns. For the Precisians, a threat to suppress. For Riel and the mountain people, a sacred object their legends warn must never be disturbed. For Hypatia, proof of an ancient evolutionary divergence — evidence that the human species contains suppressed biological pathways that could be reactivated to ensure survival beyond a dying Earth. She believes she can engineer humanity's next step. She has already begun.",
      "What none of them fully reckon with is Luchs's darkest theory: that the fossil carries the genetic signature of something far older than evolution — an organism banished to a lifeless Earth billions of years ago, threading itself through every promising lifeform since, waiting for one capable of carrying it back to the stars. And that the Disease Voice consuming Hypatia may not be illness at all. It may be arrival.",
      "<em>Chimera</em> is a novel about resistance and the limits of love, about who controls the past and therefore owns the future, and about what it means to build a true picture of the world when the world itself is being rewritten around you."
    ],
    synopsisQuote: "\u201cThe fossil and I have been waiting the same amount of time. Only one of us knows what for.\u201d \u2014 Bot",
    retailers: [
      { name: "Amazon", format: "Paperback", url: "https://www.amazon.com/dp/0981295568" },
      { name: "Ingram", format: "Order via your local bookstore", url: "https://www.ingramspark.com" },
      { name: "Octopus Books, Ottawa", format: "In store", url: "https://octopusbooks.ca" }
    ]
  },
  {
    slug: "amos",
    title: "The Pilgrimage of Amos",
    subtitle: "",
    author: "Thomas E. Towle",
    genre: "Literary Fiction",
    series: "",
    year: 2026,
    status: "available",
    isbn: "978-0-9812955-0-3",
    isbnEbook: "",
    cover: "amos-cover.jpg",          // TOM: drop this file next to towle.html
    blurb: "One summer. One road. Europe was his classroom. Morocco his reckoning. A young hitchhiker's journey across Europe and North America in the 1970s — reissued under the Thomas E. Towle name.",
    retailers: [
      { name: "Ingram", format: "Order via your local bookstore", url: "https://www.ingramspark.com" }
    ]
  }

  // TOM: to add the next book, copy one of the objects above and edit every field.
  // "slug" must be unique and lowercase-with-hyphens — it becomes the #anchor on towle.html.
];
