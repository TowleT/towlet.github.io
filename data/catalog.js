// ─────────────────────────────────────────────────────────────
// Oxford Bean Publishing — catalog data
//
// This is the ONLY file to edit when:
//   • a new book is published            → add an object to BOOKS
//   • a bookstore starts carrying a book  → add an entry to that
//                                            book's "retailers" array
//   • a book is out of print / delayed    → change its "status"
//   • a book club guide is ready          → add a "bookClub" array
//                                            of question strings
//                                            (omit the key if none yet)
//   • a writing sample is ready           → add an "excerpt" array
//                                            of paragraph strings
//                                            (omit the key if none yet)
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
    // Optional — omit these keys entirely for a book with no book club guide yet
    bookClubIntro: "Centuries from now, a salvage team recovers a manuscript from a ruined abbey — the chronicle of Luchs, a master builder of museum dioramas held in an induced coma by a theocratic regime that is mining his memories for the location of the Chimera fossil: evidence of a second lineage hidden inside human DNA. His resistance is construction itself — he builds remembered worlds faster than his captors can strip them. Around him gather a monk who chronicles, a machine that waits, a resistance in the mountains, and Hypatia — the brilliant geneticist he loves, who is being consumed from within by an illness with a name and an inheritance far older than either of them.",
    bookClub: [
      "The novel reaches us through the letters of Lt. Navarrete, a far-future officer presenting the recovered manuscript to his superior — praising it, comparing it to the classics, and deciding what his Lordship should think of it before we read a word. How does receiving the story through a censor's cover letter change what you trust? Have you read the book he read?",
      "Luchs resists the machines strip-mining his mind by building — dioramas, remembered rooms, whole mountains. What does the novel suggest about memory as something constructed rather than stored? Is there a difference between remembering and making?",
      "The Professor's theory holds that women are a separate, perhaps parasitic species. The novel puts this idea in the mouths of men — cranks, captives, and unreliable narrators. Whose account of Hypatia did you trust, and at what point did you decide? What is the book doing by making its most dangerous idea a story men tell?",
      "At the council fire, Hypatia finally speaks entirely for herself — the longest and most commanding speech in the novel. Does the book give her the last word, or take it back? Did her speech change your reading of everything the men had said about her before it?",
      "Hypatia's anorexia is personified — an illness with a name, a voice, and demands. What does naming an illness do to its power, in the novel and in life? Where does the book draw the line between Hypatia's illness and the ancient thing in her genome — and does it want that line to be clear?",
      "Bot, the decommissioned machine, speaks rarely — and lands every word: 'The fossil and I have been waiting the same amount of time. Only one of us knows what for.' What does Bot understand that the humans don't? What is the novel doing with a witness that cannot forget, cannot leave, and barely speaks?",
      "The Leader preaches work, grace, and order — sermons the novel gives real length and real force. Did you find him persuasive before you found him monstrous, or the reverse? What makes a theocracy attractive to the people inside it?",
      "Luchs's return to Chrissy — 'Wash up. Supper's on' — is one of the quietest scenes in the book, and one of the most affecting. The novel sets a grand doomed romance against an ordinary reconciliation of mending, kindling, and children's boots by the door. Which love does the book believe in? Which did you?",
      "Ben the scribe assembles the chronicle we are reading — an act of preservation that is also, arguably, a betrayal of the man whose mind it exposes. When is recording someone's story an act of faith, and when is it theft? Who owns the memories of a man in a coma?",
      "The Chimera fossil promises proof that humanity was never one thing. Every faction at the council wants it — to reveal it, bury it, or weaponize it. What would such a discovery actually change? Why is an old bone more dangerous than any weapon in the book?",
      "The novel is set after a collapse, among the ruins of our own world — museums, dioramas, salvaged machines, a weathered pack sack. What does Chimera suggest survives of a civilization? What deserves to?",
      "The ending withholds resolution — deliberately, with more promised. What did the novel refuse to resolve, and was that refusal earned? What do you think happens next — and what do you hope doesn't?"
    ],
    bookClubOutro: "Thanks for choosing my novel for your club — I appreciate it more than you know. I wrote Chimera after years of watching and reading a lot of science fiction, some of it amazing, and after a stretch of life that sent me into the mountains: the American Southwest, the Camino de Santiago, Cornwall's coast path, the Rockies. I find storytelling on the trail the best kind, and I'd genuinely like to hear what your group made of this one — the arguments especially. If your club would like me to join your discussion by video call — or in person if you're anywhere near Ottawa, or along my travels in the Southwest — reach out through towlet.github.io. Better yet, let's take a hike. — Thomas E. Towle",
    // Optional — omit entirely until you have a sample ready.
    // Array of paragraphs (each one becomes its own <p>); HTML like <em> is fine inside a string.
    excerpt: [
      "TOM: paste your Chimera writing sample here, one paragraph per array entry."
    ],
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
    excerpt: [
      "TOM: paste your Amos writing sample here, one paragraph per array entry."
    ],
    retailers: [
      { name: "Ingram", format: "Order via your local bookstore", url: "https://www.ingramspark.com" }
    ]
  }

  // TOM: to add the next book, copy one of the objects above and edit every field.
  // "slug" must be unique and lowercase-with-hyphens — it becomes the #anchor on towle.html.
];
