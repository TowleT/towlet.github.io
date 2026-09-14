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
//
// IMPORTANT — a note on quotes in this file:
// Every text field here is a JavaScript string, which means it must
// stay on ONE line in the source and use straight double quotes " "
// to open/close it. If you paste text that contains an actual line
// break, or a literal backslash \, it will break the ENTIRE file
// (not just that book) and the whole catalogue will fail to load.
// Curly "smart quotes" and apostrophes inside the text are fine —
// only a literal newline or an unescaped backslash breaks things.
// For multi-paragraph text, split it into an ARRAY of one-line
// strings (see "synopsis" and "excerpt" below) rather than one
// string with line breaks in it.
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
      { name: "Amazon", format: "Read Sample", url: "https://www.amazon.com/dp/0981295568?asin=0981295568&revisionId=&format=4&depth=1" },
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
      { name: "Amazon", format: "Paperback", url: "https://www.amazon.com/dp/0981295509" },
      { name: "Amazon", format: "Read Sample", url: "https://www.amazon.com/dp/0981295509?asin=0981295509&revisionId=&format=4&depth=1" },
      { name: "Ingram", format: "Order via your local bookstore", url: "https://www.ingramspark.com" }
    ]
  },
  {
    slug: "flymph",
    title: "Flymph",
    subtitle: "",
    author: "Thomas E. Towle",
    genre: "Literary Fiction",
    series: "",
    year: 2026,                // TOM: confirm publication year
    status: "available",
    isbn: "978-0-9812955-3-4",
    isbnEbook: "",
    cover: "flymph-cover.jpg",        // TOM: drop this file next to towle.html
    blurb: "TOM: paste the real back-cover copy for Flymph here.",
    excerpt: [
      "TOM: paste your Flymph writing sample here, one paragraph per array entry."
    ],
    retailers: [
      { name: "Amazon", format: "Paperback", url: "https://www.amazon.com/dp/0981295533" },
      { name: "Amazon", format: "Read Sample", url: "https://www.amazon.com/dp/0981295533?asin=0981295533&revisionId=&format=4&depth=1" }
      // TOM: add a Kindle/ebook link here if one exists.
    ]
  },
  {
    slug: "nova-georgic",
    title: "Nova Georgic",
    subtitle: "",
    author: "Thomas E. Towle",
    genre: "Literary Fiction",
    series: "",
    year: 2026,                // TOM: confirm publication year
    status: "available",
    isbn: "978-1-06-781843-2",
    isbnEbook: "",
    cover: "nova-georgic-cover.jpg",  // TOM: drop this file next to towle.html
    // TOM: replace with real jacket copy — I couldn't pull the description from Amazon (blocked to bots).
    blurb: "TOM: paste the real back-cover copy for Nova Georgic here.",
    excerpt: [
      "TOM: paste your Nova Georgic writing sample here, one paragraph per array entry."
    ],
    retailers: [
      { name: "Amazon", format: "Paperback", url: "https://www.amazon.com/dp/106781843X" },
      { name: "Amazon", format: "Read Sample", url: "https://www.amazon.com/dp/106781843X?asin=B0HFNV27TZ&revisionId=cd1cf698&format=3&depth=1" },
      { name: "Amazon", format: "Kindle", url: "https://www.amazon.com/dp/B0HFNV27TZ" }
    ]
  },
  {
    slug: "slumber-queen",
    title: "Travels with a Slumber Queen",
    subtitle: "",
    author: "Thomas E. Towle",
    genre: "Travel Memoir",
    series: "",
    year: 2026,                // TOM: confirm publication year for this reissue
    status: "available",
    isbn: "978-1-06-781844-9",
    isbnEbook: "978-1-06-781847-0",
    cover: "slumberqueen-cover.jpg",  // TOM: drop this file next to towle.html — not in the repo yet, so the placeholder box will show until you do
    blurb: "A parched desert doesn't heal by inches — it drowns in the crazed lightning of a monsoon and turns green overnight. Soma is quietly hoping for the same miracle.",
    // Optional expandable synopsis — omit this key entirely for books that don't have one yet
    synopsis: [
      "Travels with a Slumber Queen: Tales of the Southwest is the latest chapter in Thomas E. Towle's ongoing chronicle of his restless alter ego, Soma — first introduced decades earlier in The Pilgrimage of Amos. Freshly grieving the death of his ninety-nine-year-old mother and the collapse of a long, difficult relationship, Soma retreats to the one place that has never turned him away: the Sonoran Desert, in the seat of his rickety 1987 motorhome, the Slumber Queen.",
      "What he finds there is not an untouched Eden. The Colorado River runs dry before it reaches the sea, drained for lettuce and cotton and subsidized crops. RV parks bloom like white fibreglass tumors across land that once belonged to nobody. Old growth is bulldozed for gated communities named for the very wilderness they replaced. Soma watches the desert being scoured down the same slow, careless way his own life has been scoured down — by age, by loss, by the years he gave to people who left anyway. The wound in the land and the wound in the man start to look like the same wound.",
      "But the desert Soma has come to love doesn't merely survive — it resurrects. Ground that looks dead and cracked for months explodes green in a single night of monsoon lightning; a dry wash that hasn't run in years will roar for an hour and leave the whole valley blooming for a month. It is a landscape built on rebirth, not just endurance, and hiking its ancient peaks with two old friends — Boswell, an incorrigible romantic, and Petrovich, quietly fighting cancer — chasing a half-serious rumor of wild peyote that might cure him, Soma starts to wonder if a life can do the same thing: whether his own thirst for friendship, for company, for one more chance at love, might come rushing back just as suddenly and completely as a summer storm. He collects a string of desert characters along the way who seem to prove it possible: Stan, an aging beatnik outrunning an ordinary life since the 1950s; Maverick, a machete-carrying guide who reads the land like scripture; a lonely man who swims calmly among Pacific sharks; a diner waitress who is a dead ringer for the girl who broke Soma's heart forty years ago.",
      "Every hike becomes a small negotiation with mortality — his friend's, his mother's, his own. And slowly, without ever quite admitting it, Soma starts to take his cues from the land itself: how a place can be scoured to bare rock and still, given the right storm, come back green. By the time the trip ends — at his mother's bedside, and later at the edge of a state park being swallowed by ever-bigger motorhomes — Soma hasn't fixed anything. But he has felt, at least once, that same crazed lightning-strike of a thirst answered: for life, for friends, for love, rushing back all at once like a desert in bloom.",
      "Travels with a Slumber Queen is a picaresque, deeply personal travel memoir dressed as a novel — equal parts Edward Abbey and love letter to the monsoon season, and proof that even a life scoured down to bare rock can green up again, given the right storm."
    ],
    // Array of paragraphs (each one becomes its own <p>) — split from the pasted text,
    // which had raw line breaks and unescaped backslashes that broke the file.
    excerpt: [
      "SWIMMING WITH SHARKS",
      "/\u201D\u201D\\/\u201D\u201D\\__/\u201D\u201D\u201D\u201D\u201D\\",
      "The desert was growing hot. After a month of hiking the lure of the dusty trail was fading so I turned the lil Rig towards to West Coast to feel and taste the Pacific. Boswell had returned north but said he may meet me in LA later. Petrovich was busy on a programming problem but I was still on the road. I had begun to dig deep into my solitude. Being alone doesn't mean you have to be lonely. Now I could reflect on events, my thoughts and meet new experiences unencumbered by old shleck.",
      "Call it fate or call it particle entanglement. There is just this queerness about the goddess of luck and the insane daring to bet on a quantum theory of particle entanglement as my next encounter was to prove.",
      "And so it was that I met a man who swam with sharks. Not the kind of men and women you might watch on a nature documentary but just some guy. No, he did not swim with them on purpose—he swam and there were sharks in the waters sometimes; but he swam in the ocean and he knew there were sharks in the waters. Had been for millions and millions of years. Big ones. Big Whites in the cold Pacific coastal waters running offshore from Los Angeles. He swam out from the tourist town of Avalon on Catalina Island. He swam out about a mile and then swam back and forth parallel to the shoreline for a two to three hours each day.",
      "\u201CI guess you feel safe if you get used to them,\u201D he had said to me as we met and began a recurring conversation over a couple days of chance interaction. There are few roads and no cars on the island so it is not hard to meet the same people day after day.",
      "I met him while he was walking a dog down from Mr. Gum and struck up a conversation. He was from back East and lived alone in a condo that had no pool. He named all the other condos that had pools in the quaint island resort an hour from Los Angeles by ferry—6 a day on weekends!",
      "\u201CDel Ray condos. They have a swimming pool. And Monterrey Place has a great pool. And that Greek looking colony with the condos on the hill outside of town too. I got to swim there once when my friend lived there. But he moved.\u201D",
      "I didn't believe him when he described the sharks that he sometimes saw. Big whites, 17 feet long some of them. Even his ex-wife had seen one and screamed but he told her to be quiet, settle down and keep swimming. She never swam with him again. He was alone now in the condo. Staring at the rectangular painted walls with fake pictures of fake flowers. He looked out the patio door but there was no pool but there was the ocean roiling past the town beach. And such an ocean with warm water clear as an aquarium.",
      "Perhaps driven by a sense of desperation, or boredom, others did the same. Pushed up against the steep hills of Catalina perhaps the sea was the only outlet.",
      "He really wanted to tell me about the newspaper article he read a few years ago. Seemed like he had to get it off his chest, so I listened attentively though I noticed his dog was wandering off.",
      "\u201CI read this article about this guy who had his whole side, his hip chewed off by a shark. The guy died in the boat in the arms of his brother and his family. It was a few years ago and I was so blown away I had to show it to somebody, so I took the paper and read it to the checkout kid at Vons grocery here. I read him the article. I had to read it to him. And of all the people in the world.\u201D",
      "He stopped now and looked around helplessly I thought or maybe for dramatic effect, but it was like he was far away in another place.",
      "\u201CThis kid looked at me and pointed at the young teenager in the newspaper picture that accompanied the article about the shark attack, and he told me \u201CThat is me in the picture. That was my uncle and I was there and saw it all.\u201D Well you can imagine my surprise, my utter and complete shock. Of all the people in the world. I saw him quite often after that. Avalon is a small town, really a village. Not like New \u2026\u201D",
      "He never finished his sentence. I was sure it was either NY or New Jersey. I imagined maybe he was an ex mobster hiding out, put on ice in this remote area after doing a hit. He didn't seem to work. He just existed. Maybe he was a day trader or writer or just someone with good investments. He was not 50 I am sure of it. Tough build compact like a boxer maybe or a hit man. There I go again with the imagination.",
      "I told him about the quantum theory of entanglement, how atoms can exist at different points in time and space and he nodded as he looked out to the bright blue sea.",
      "I never have seen such clear clean water as off Catalina Island. It is perfect like a well-maintained aquarium with shafts of light lighting up the depths. It is the deep Pacific currents that keep the water pristine he had told me. Colourful red, green and purple blue seaweed flutter with giant golden goldfish.",
      "\u201CYeah you'll see me out there tomorrow if you take the ferry back.\u201D",
      "Or maybe not, I thought and imagined seeing a bright blot of red spreading out from a shark attack.",
      "He realised his dog was gone and had to go find it. A friend's dog really, he said. That he had been walking as a favour.",
      "Strangers meet and exchange stories. Like all the human tide that races west and is crushed up against the Pacific Ocean, so he was smashed against the glass of the aquarium called civilisation and I suppose to him, to swim in the ocean was freedom.",
      "I imagined swimming alongside a 17-ft. shark in those clear waters.",
      "\u201CI never think of it really,\u201D he had said.",
      "\u201CWhat are you going to do?\u201D he asked shrugging his wide shoulders.",
      "Go swim at a friend's condo pool I thought. But on reflection, I could see the dangerous attraction of swimming in the ocean. The freedom of it. The loneliness of land by immersing oneself in the ocean, that great connecting fluid of the planet. And I could see that it made sense. He got used to the sharks.",
      "Familiarity breeds contempt or at least complacency but then suddenly without warning like a cloud passing it could strike. Or it could be a heart attack or a cramp or a motorboat or a woman crushing your heart and taking your children away\u2026could be anything really.",
      "Or it could be the cruel sad truth of your wasted life and wasted dreams and misguided talent gone and lost in that salton-cracker sea we all swim in.",
      "The finality of such an event is agreeable in a way if you are facing death anyway which we all are. The sheer luck of it but then there is that dam theory of entanglement question. How or why are these events tied? Why am I entangled with other people and their problems or dreams, and how did they derail my dreams so completely or that other guy in my brain who keeps sabotaging my life and dreams.",
      "Is it love of children, love of a mate or friendship or just mere chance? My atoms are born in a certain place and grow up with other atoms and jingle along just by mere geographic chance in the matrix of time and space. Why can't we connect with brighter lighter beings? With angels maybe but then I don't believe in such goblins.",
      "Maybe the swimmer has a guardian angel on his side watching over him. Do I? I always thought I did but lately I am starting to doubt it.",
      "Guilt and shame are sharks too in a way.",
      "The ferry left several times a day back to LA. It landed at Long Beach where the container ships line up to deliver the desires of America. I took the mid-day just in case I might see the swimmer. I had a can of IPA beer and soon the gentle rocking put me into a dream state. He might have died that day for all I know.",
      "THE TERRIBLE GRIM LONELINESS OF MR. GUM",
      "Before leaving Catalina Island I decided I had to pay homage to Mr. Gum."
    ],
    retailers: [
      { name: "Amazon", format: "Paperback", url: "https://www.amazon.com/dp/1067818448" },
      { name: "Amazon", format: "Read Sample", url: "https://www.amazon.com/dp/1067818448?asin=1067818448&revisionId=&format=4&depth=1" }
    ]
  }

  // TOM: to add the next book, copy one of the objects above and edit every field.
  // "slug" must be unique and lowercase-with-hyphens — it becomes the #anchor on towle.html.
];
