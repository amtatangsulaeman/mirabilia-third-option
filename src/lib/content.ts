// Site content. Source: the client-approved copy in D:\KERJA\Discofrog\Website\Mirabilia
// (lib/data.ts and app/**/page.tsx, commit "Revisi Dari klien"), itself based on mirabilia.com.au.

export type Photo = { src: string; alt: string; w: number; h: number };

const ph = (file: string, alt: string, w = 1200, h = 800): Photo => ({ src: `/photos/${file}`, alt, w, h });
const img = (file: string, alt: string, w: number, h: number): Photo => ({ src: `/images/${file}`, alt, w, h });

export const logo = { src: "/images/logo.png", w: 1639, h: 386 };
export const logoFull = { src: "/images/logo-footer.png", w: 1639, h: 713 };

export const contact = {
  phone: "(08) 6115 0123",
  phoneHref: "tel:+61861150123",
  email: "info@mirabilia.com.au",
  hours: "6:30am to 6:30pm",
  ages: "6 weeks to 5 years",
};

export const SA_URL = "https://www.servicesaustralia.gov.au/child-care-subsidy";

/* ------------------------------------------------------------------ offer */
// Set enabled: false to hide the offer everywhere; it also hides itself after endsOn (on the next build).
export const offer = {
  // Nov 2026 revision: the client asked to remove the promo. Flip back to true to restore it everywhere.
  enabled: false,
  endsOn: "2026-12-31",
  endsLabel: "31 December",
  bar: ["Up to 4 free playdates for babies", "25% off your first month", "Ends 31 December"],
  title: "4 free playdates",
  text: "for babies 0 to 2 years, plus 25% off the first month for new enrolments.",
  nav: "Current Offer: 25% Off",
  faq: "Babies aged 0 to 2 can enjoy up to 4 free playdates, and new enrolments get 25% off. The offer ends 31 December.",
};
/** When the site was built. Static pages: the offer switches off on the first build after endsOn. */
export const builtAt = new Date(process.env.BUILD_TIME ?? "2026-01-01T00:00:00Z");
export const offerActive = (now = builtAt) => offer.enabled && now <= new Date(`${offer.endsOn}T23:59:59+08:00`);

/* -------------------------------------------------------------- photos */
export const photos = {
  heroBlocks: ph("hero-blocks.jpg", "Toddlers stacking giant building blocks in the outdoor play area", 1200, 976),
  littleChef: ph("little-chef.jpg", "A toddler in a chef’s hat stirring a pan in cooking class", 1200, 900),
  aboutGate: ph("about-gate.jpg", "An educator helping children explore the garden", 768, 512),
  sorting: ph("curriculum-sorting.jpg", "Children sorting objects into egg cartons with an educator", 1200, 1600),
  drawing: ph("curriculum-drawing.jpg", "Children drawing together around a table", 1200, 900),
  teamOutdoor: ph("team-outdoor.jpg", "An educator sitting outside with a group of toddlers", 1200, 799),
  philosophyGarden: ph("philosophy-garden.jpg", "Children holding hands in a circle outdoors", 768, 512),
  curriculumOutdoor: ph("curriculum-outdoor.jpg", "Children sitting together outdoors with an educator", 768, 512),
  teamMural: ph("team-mural.jpg", "Mirabilia team members smiling in front of the Citiplace mural", 1200, 675),
  teamTraining: ph("team-training.jpg", "A full room of Mirabilia educators at a training evening", 1200, 900),
  musicClass: ph("music-class.jpg", "An educator playing guitar with toddlers", 1200, 900),
  happyfeet1: ph("happyfeet-1.jpg", "Children dancing during a movement session", 1200, 900),
  yardSlide: ph("yard-slide.jpg", "Outdoor play yard with a curly orange slide and timber decking"),
  kitchen: ph("kitchen.jpg", "Bright centre kitchen and children’s bathroom area"),
  yardSandpit: ph("yard-sandpit.jpg", "Big sandpit with a red slide and timber fence"),
  playground: ph("centre-playground.jpg", "Grassy yard with a climbing tower and garden paths", 1200, 675),
  cavershamRoom: ph("caversham-room.jpg", "Bright playroom with low shelves"),
  byfordPergola: ph("byford-pergola.jpg", "Timber pergola over a sandpit"),
  squadDance: ph("squad-dance.jpg", "Kindergarten children dancing with maracas", 1200, 900),
  squadBoard: ph("squad-board.jpg", "A wall display of Squad program photos and children’s work", 1200, 1000),
  snackTime: ph("snack-time.jpg", "A girl enjoying a snack at the table"),
  smilingBoy: ph("smiling-boy.jpg", "A smiling boy at the lunch table", 1200, 799),
  musicShaker: ph("music-shaker.jpg", "A baby playing with a shaker", 1200, 900),
  outdoorSandpit: ph("outdoor-sandpit.jpg", "Educators and toddlers playing in the outdoor sandpit"),
  classroom: ph("classroom.jpg", "Classroom set up with trays and loose parts", 1200, 675),
};

/* --------------------------------------------------------------- nav */
export type NavLink = { label: string; href: string };
export type NavEntry = { label: string; href?: string; items?: NavLink[]; groups?: { heading: string; items: NavLink[] }[] };

/* ------------------------------------------------------------------ team */
export type Person = { name: string; role: string; photo: Photo; quote: string[] };

export const people = {
  clarissa: {
    name: "Clarissa De Fretes",
    role: "Approved Provider, Mirabilia Education",
    // Higher resolution than team-clarissa.jpg (144 px wide) in the final folder.
    photo: img("6a192a5fff82912d658feead.jpeg", "Clarissa De Fretes, Approved Provider at Mirabilia Education", 1066, 1600),
    quote: [
      "As an Approved Provider, my focus is supporting the Directors, the services and the team as a community. As an early childhood educator I pride myself on providing quality care. I believe a stimulating and creative environment encourages children to feel safe, express themselves and extend on their current skills and knowledge.",
      "I lead by example, helping co-workers to enhance their learning and understanding of child care. I believe it takes a village to raise a child: home, child care, families and friends. Together we can support and nurture a child’s individual needs and ensure they have the best start in life.",
    ],
  },
  jaclyn: {
    name: "Jaclyn Pereira",
    role: "Centre Director, Mirabilia Caversham",
    photo: ph("team-jaclyn.jpg", "Jaclyn Pereira, Centre Director at Mirabilia Caversham", 568, 852),
    quote: [
      "I believe that as an early childhood educator I am responsible for providing young children with positive learning experiences. I strive to model respect, patience and care for children and adults I come in contact with.",
      "Children have the right to have their needs met and receive the proper education while in our care.",
    ],
  },
  naomi: {
    name: "Naomi Holly",
    role: "Centre Director, Mirabilia Byford",
    photo: ph("team-naomi.jpg", "Naomi Holly, Centre Director at Mirabilia Byford", 338, 510),
    quote: [
      "I believe that each child is an individual and as an educator, I will value and facilitate the development of each child’s strengths, interests, skills, abilities and knowledge to extend their learning. I believe that children learn through play and I endeavour to provide opportunities for children to explore, create, discover and imagine.",
      "Children need reassurance of being loved and cared for while they are enjoying an educational environment, so I will commit to provide a home-like environment that promotes this, further developing trusting and reciprocal relationships with them and their families.",
    ],
  },
  abbie: {
    name: "Abbie Wray",
    role: "Centre Director, Mirabilia Citiplace",
    photo: img("6a192a00ff82912d658fe7dc.jpeg", "Abbie Wray, Centre Director at Mirabilia Citiplace", 1066, 1600),
    quote: [
      "I have developed an interest in Early Childhood as I come from a large family in Ireland. As the oldest sibling, I have developed a nurturing approach towards children. As the director of Mirabilia Citiplace it is my mission to ensure each and every child in our care has the most positive, happy experience of growth through learning and playing.",
      "My goal as the centre director is to create ‘a home away from home’ for children, staff and families at Mirabilia. I thrive in helping my staff, supporting them and empowering them. “Together we can do so much.”",
    ],
  },
} satisfies Record<string, Person>;
export type TeamKey = keyof typeof people;

/* --------------------------------------------------------------- reviews */
export type Review = { name: string; centre?: string; text: string };
export const reviews = {
  gigi: { name: "Gigi", text: "The staff here are absolutely amazing! I’ve never felt this way at other centres before. The teachers here genuinely care about and support the children, and it shows. My child has learned so much since being here." },
  sudarmani: { name: "Sudarmani", text: "I highly recommend this centre. My daughter has developed a lot after joining here. Special thanks to all the staff and educators." },
  claire: { name: "Claire", centre: "byford", text: "Our kids have been attending here for just over 1 year and they are so content and settled. Great relationships with educators and so much one-on-one attention with smaller groups. The grounds are as beautiful, new and clean as the day they opened!" },
  denisa: { name: "Denisa", text: "We absolutely loved this centre and the staff here. The staff connect and bond so well with the kids and parents. They always took such good care of our boys. Cannot fault the staff here." },
  shasta: { name: "Shasta", centre: "byford", text: "The Byford Centre is wonderful! As our first daycare experience they have made it truly wonderful. Our children have thrived there and come home tired from a fun day of learning through play." },
  morwenna: { name: "Morwenna", text: "My son loves his daycare! The educators really go above and beyond." },
} satisfies Record<string, Review>;
export type ReviewKey = keyof typeof reviews;
const GENERIC: ReviewKey[] = ["gigi", "denisa", "morwenna", "sudarmani"];

/** A centre's own reviews first, topped up with general ones. */
export function reviewsFor(slug?: string, count = 3): ReviewKey[] {
  const own = slug ? (Object.keys(reviews) as ReviewKey[]).filter((k) => (reviews[k] as Review).centre === slug) : [];
  return [...own, ...GENERIC.filter((k) => !own.includes(k))].slice(0, count);
}

/* --------------------------------------------------------------- centres */
export type Centre = {
  slug: string;
  name: string;
  street: string;
  suburb: string;
  card: Photo;
  hero: Photo;
  gallery: Photo[];
  director: TeamKey;
  isNew?: boolean;
  welcome: string;
  intro: string;
  title: string;
  video?: string;
};

export const centres: Centre[] = [
  {
    slug: "caversham",
    name: "Caversham",
    street: "1 Mavro Street",
    suburb: "Caversham WA 6055",
    card: ph("centre-caversham.jpg", "Rainbow Mirabilia banner on the front wall of the Caversham centre"),
    hero: ph("caversham-yard.jpg", "Outdoor play area with a shade sail, cubby house and red slide"),
    gallery: [
      ph("caversham-room.jpg", "Bright playroom with low shelves and small tables"),
      ph("caversham-room-2.jpg", "Long sunny room set up with activity tables"),
      ph("caversham-sign.jpg", "Mirabilia sign in the Caversham entrance"),
      ph("caversham-visit.jpg", "An educator playing guitar while children listen", 1200, 900),
    ],
    director: "jaclyn",
    title: "Caversham Childcare, Early Learning & Kindy",
    welcome: "Welcome to Mirabilia Caversham",
    intro: "Nestled close to the beauty of the Swan Valley, our Caversham centre is a nurturing space where children are free to explore, play and discover. Our dedicated educators build close, caring relationships with every child and family, creating a true sense of belonging from the very first day.",
  },
  {
    slug: "byford",
    name: "Byford",
    street: "2 Walters Road",
    suburb: "Byford WA 6122",
    card: ph("centre-byford.jpg", "Colourful Mirabilia sign on the stone wall at the Byford centre"),
    hero: ph("byford-pergola.jpg", "Byford outdoor area with a timber pergola and sandpit"),
    gallery: [
      ph("byford-room.jpg", "Byford playroom with rugs and open shelves"),
      ph("byford-yard.jpg", "Shade sail over the Byford play yard and slide"),
      ph("byford-room-2.jpg", "Learning room with sensory tables"),
      ph("byford-room-3.jpg", "Classroom with an easel and art corner"),
    ],
    director: "naomi",
    title: "Byford Childcare, Early Learning & Kindy",
    welcome: "Welcome to Mirabilia Byford",
    intro: "Our Byford centre reflects the friendly, family-focused spirit of the community it serves. With inspiring learning spaces and educators who genuinely care, we help children grow in confidence, curiosity and independence in a setting that feels like an extension of home.",
  },
  {
    slug: "citiplace",
    name: "Citiplace",
    street: "16/378 Wellington Street",
    suburb: "Perth WA 6000",
    card: ph("centre-citiplace.jpg", "Mirabilia entrance with a painted river mural at Citiplace"),
    hero: ph("citiplace-room.jpg", "Citiplace room with teal shelves and small wooden tables"),
    gallery: [
      ph("centre-citiplace.jpg", "Citiplace entrance with a painted mural"),
      ph("classroom.jpg", "Classroom set up with trays and loose parts", 1200, 675),
    ],
    director: "abbie",
    title: "Childcare & Kindy Perth CBD, near Perth Station",
    welcome: "Welcome to Mirabilia Citiplace",
    intro: "Conveniently located in the city, our Citiplace centre is perfect for busy families looking for care that fits seamlessly into the working day. Our calm, welcoming environment gives children a place to learn, create and connect, while giving parents peace of mind that their child is in caring hands.",
  },
  {
    slug: "champion-lakes",
    name: "Champion Lakes",
    street: "4 McNeill Road",
    suburb: "Champion Lakes WA 6111",
    card: ph("champion-2.jpg", "Timber furniture and play areas inside the Champion Lakes centre", 1280, 960),
    hero: ph("champion-1.jpg", "New playroom at Mirabilia Champion Lakes", 1280, 960),
    gallery: [
      ph("champion-3.jpg", "Champion Lakes room with natural timber furniture", 1280, 960),
      ph("champion-4.jpg", "Reading nook and soft play corner", 1280, 960),
      ph("champion-5.jpg", "Activity tables ready for the day", 1280, 960),
      ph("champion-6.jpg", "Bright learning space at Champion Lakes", 1280, 960),
    ],
    director: "clarissa",
    isNew: true,
    title: "New Childcare & Kindy in Champion Lakes WA",
    welcome: "Welcome to Mirabilia Champion Lakes",
    intro: "Close to the open spaces and natural surrounds of Champion Lakes, our centre encourages children to connect with the world around them. Through play-based learning and meaningful experiences, our educators nurture every child’s growth, creativity and love of learning.",
    video: "https://storage.googleapis.com/msgsndr/XDHN7sE5DvFvyioov4Uk/media/6940e99eab2594052930e5a8.mp4",
  },
];
export const getCentre = (slug: string) => centres.find((c) => c.slug === slug)!;
export const directionsUrl = (c: Centre) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${c.street} ${c.suburb}`)}`;
export const tourVideo = "https://storage.googleapis.com/msgsndr/XDHN7sE5DvFvyioov4Uk/media/66f671a1d192e47acf3b50f3.mp4";

export const bring = ["Breast milk or formula", "A sterilised bottle from home", "A bucket hat", "A bag of spare clothes"];

export const centreFaq = (c: Centre): [string, string][] => [
  [`What are the opening hours at Mirabilia ${c.name}?`, `Mirabilia ${c.name} is open ${contact.hours}, Monday to Friday.`],
  [`What ages does Mirabilia ${c.name} care for?`, `We care for children from ${contact.ages}, with rooms grouped by age so every child has friends at the same stage.`],
  ["Can I get the Child Care Subsidy?", "Most families using approved care are eligible. The subsidy is paid straight to us and comes off your fees. Our team can help you check your eligibility."],
  ["Can I choose which days my child attends?", "Yes. Tell us the days you need when you book a tour or enquire, and we will let you know what is available in your child’s room."],
  ["How will I know how my child’s day went?", "Educators share photos, stories and learning notes through Storypark, a secure app. Every family gets its own login."],
  ["How do I enrol?", "Book a tour first so you can see the rooms and meet the team. After the tour we will help you with the enrolment form and your CCS details."],
];

/* -------------------------------------------------------------- programs */
export type Program = {
  slug: string;
  name: string;
  short: string;
  cover: Photo;
  tagline: string;
  photos: [Photo, Photo];
  gallery: Photo[];
  intro: string[];
  blocks: [string, string][];
  why: [string, string][];
  join: string;
};

export const programs: Program[] = [
  {
    slug: "cooking-class",
    name: "Cooking Class",
    short: "Washing, mixing and tasting. Little chefs learn about healthy food with real recipes.",
    cover: ph("cooking-class.jpg", "Children in gloves helping an educator with a recipe", 1200, 900),
    tagline: "Inspiring little chefs to explore, create and taste!",
    photos: [ph("cooking-toddler.jpg", "A toddler mixing ingredients in a bowl", 1200, 900), ph("little-chef.jpg", "A toddler in a chef’s hat stirring a pan", 1200, 900)],
    gallery: [
      ph("cooking-class.jpg", "Children in gloves gathered around a mixing bowl", 1200, 900),
      ph("cooking-play.jpg", "A boy pretending to cook at a play kitchen", 1200, 900),
      ph("cooking-tray.jpg", "Two children with chef hats holding a baking tray", 1200, 900),
      ph("water-pouring.jpg", "Children pouring water into a pot at the outdoor kitchen", 1600, 1068),
    ],
    intro: [
      "At Mirabilia, our Cooking Class is more than a fun activity. It’s a hands-on learning experience that introduces children to the joys of cooking and the importance of healthy eating.",
      "Little chefs put on their aprons and step into a world of creativity, flavour and adventure. From mixing ingredients to tasting their own creations, every session is a delightful and educational journey.",
    ],
    blocks: [
      ["What we offer", "A structured yet flexible program that encourages children to engage with food in a positive way. Children learn about different ingredients, basic kitchen skills and essential safety practices, with each class planned to suit different ages and skill levels."],
      ["Learning through play", "Children explore textures, smells and tastes while learning life skills like measuring, mixing and following instructions. Sessions foster creativity, build motor skills and boost confidence as children make their own snacks, meals and treats."],
      ["Health & nutrition", "We talk about healthy eating habits, food groups and a balanced diet, with fruits, vegetables, grains and proteins. Children also try dishes from different cuisines, celebrating cultural diversity."],
    ],
    why: [
      ["Hands-on experience", "Children take part in every step, from prepping ingredients to plating dishes."],
      ["Qualified instructors", "Educators trained in both childcare and culinary skills keep sessions safe and engaging."],
      ["Safety first", "Children learn to handle kitchen tools and equipment with care."],
      ["Creative & fun", "Every session includes games, stories and crafts linked to the dish."],
    ],
    join: "At Mirabilia, we believe every child is a little chef in the making, ready to explore a world of taste and creativity!",
  },
  {
    slug: "music-class",
    name: "Music Class",
    short: "Singing, drums and shakers, with simple rhythm games for every age.",
    cover: ph("music-class.jpg", "An educator playing guitar for a group of toddlers", 1200, 900),
    tagline: "Discover the joy of music & sound!",
    photos: [ph("music-drums.jpg", "A toddler playing a hand drum", 1200, 900), ph("music-shaker.jpg", "A baby shaking a musical instrument", 1200, 900)],
    gallery: [
      ph("music-class.jpg", "An educator playing guitar with toddlers", 1200, 900),
      ph("music-babies.jpg", "Babies playing with a floor piano mat", 1200, 900),
      ph("music-circle.jpg", "Children sitting in a circle for a guitar sing-along", 1200, 900),
      ph("caversham-visit.jpg", "Children listening to live guitar", 1200, 900),
    ],
    intro: [
      "Our Music Class is a joyful journey into rhythm, melody and sound. Designed for children of all ages, it introduces the basics of music in a playful, engaging way.",
      "We believe music is a universal language that inspires creativity, encourages emotional expression and brings joy to every child.",
    ],
    blocks: [
      ["What makes it special", "Music is a tool for holistic development. Children sing, dance, play instruments and explore sound, with sessions tailored to each age group and developmental stage."],
      ["Benefits of music", "Music supports cognitive development, memory, and social and emotional skills. Children learn about different genres, try various instruments and explore concepts like beat, tempo and pitch, while practising teamwork and cooperation."],
      ["Interactive & fun", "Singing, dancing and instrument play keep everyone engaged. From tambourines to maracas, every session is a new adventure in sound, with simple music theory taught through games."],
    ],
    why: [
      ["Inclusive", "Open to all children, whatever their musical background or ability."],
      ["Expert educators", "Experienced music teachers who love nurturing young talent."],
      ["Well-rounded", "Singing, instruments, rhythm and melody, all in one program."],
      ["Emotional expression", "A safe, creative space for children to express their feelings."],
    ],
    join: "Let your child explore the magical world of music, discover new sounds, make new friends and develop a lifelong love for music!",
  },
  {
    slug: "sports-class",
    name: "Sports Class",
    short: "Ball games, obstacle courses and running that build coordination and teamwork.",
    cover: ph("sports-outdoor.jpg", "Toddlers playing with hoops and balls outside", 1200, 900),
    tagline: "Active kids, healthy futures!",
    photos: [ph("sports-cones.jpg", "Children kicking soccer balls around cones", 1200, 900), ph("sports-basketball.jpg", "A girl lifting a basketball towards the hoop", 1200, 900)],
    gallery: [
      ph("sports-outdoor.jpg", "Toddlers playing with hoops and balls outside", 1200, 900),
      ph("sports-ladder.jpg", "Children stepping through an agility ladder", 1200, 900),
      ph("sports-screen.jpg", "Children following a movement video", 1200, 900),
      ph("sports-basketball.jpg", "A toddler shooting hoops indoors", 1200, 900),
    ],
    intro: [
      "Mirabilia Sports Class promotes physical activity, teamwork and a love for sport in a fun, encouraging environment.",
      "Tailored to children of all ages, it focuses on motor skills, coordination and a positive attitude to fitness, while teaching the value of exercise, healthy competition and teamwork.",
    ],
    blocks: [
      ["About the program", "From team sports like soccer and basketball to running and gymnastics, each session suits different ages and skill levels. A mix of structured lessons and free play builds both skills and a love of staying active."],
      ["Benefits of being active", "Regular activity builds strength, coordination, balance and agility. We introduce basic sports skills and rules, promote fair play, and build confidence through positive encouragement."],
      ["Social skills & teamwork", "Children learn to work as a team, make new friends, take turns, and handle winning and losing with grace. These lessons build lifelong social skills."],
    ],
    why: [
      ["Lots to try", "From ball games to obstacle courses, there’s something for every child."],
      ["Professional coaches", "Qualified instructors who are passionate about sport."],
      ["Everyone joins in", "All children are encouraged to take part, whatever their ability."],
      ["Fun first", "A supportive environment for learning new skills and enjoying it."],
    ],
    join: "Give your child the chance to stay active, healthy and happy, and build friendships through sport!",
  },
  {
    slug: "happy-feet",
    name: "Happy Feet",
    short: "Dance and movement sessions that get everyone wiggling, jumping and grooving.",
    cover: ph("happy-feet.jpg", "A Happy Feet presenter with a finger puppet and a smiling toddler", 1200, 900),
    tagline: "Dance, movement and joy for every little one!",
    photos: [ph("happyfeet-3.jpg", "Children holding the edge of a colourful parachute", 1200, 900), ph("happy-feet.jpg", "A Happy Feet presenter with a puppet and a toddler", 1200, 900)],
    gallery: [
      ph("happyfeet-1.jpg", "Children dancing around the room", 1200, 900),
      ph("happyfeet-2.jpg", "Children following dance moves on a mat", 1200, 900),
      ph("squad-dance.jpg", "Kindergarten children dancing with maracas", 1200, 900),
      ph("music-circle.jpg", "Children sitting in a circle for a sing-along", 1200, 900),
    ],
    intro: [
      "Happy Feet is all about getting children moving and grooving to the rhythm of fun! This dance and movement class combines music, rhythm and play to build fitness and creative expression.",
      "It’s perfect for children who love to dance, jump and wiggle, or who simply enjoy moving to the beat.",
    ],
    blocks: [
      ["About the program", "A dynamic dance and movement program tailored to different age groups, mixing basic dance steps, movement games and creative expression. Sessions are inclusive and encourage children to move in their own unique way."],
      ["Physical development", "Happy Feet builds gross motor skills, coordination, balance and flexibility. Each session supports muscle development, posture and physical health, making fitness a fun part of the routine."],
      ["Creativity & confidence", "Exploring different dance styles and music helps children interpret rhythm in their own way, building self-esteem, social skills and a real sense of achievement."],
    ],
    why: [
      ["Engaging curriculum", "Ballet, jazz, hip-hop and contemporary keep things fresh and exciting."],
      ["Experienced instructors", "Qualified dance educators who love teaching children."],
      ["Fun & safe", "Safe classes with the right measures in place to prevent injuries."],
      ["Whole-child growth", "Supports emotional, social and cognitive development too."],
    ],
    join: "Watch your child’s love for dance and movement flourish as they make friends, build confidence and stay active!",
  },
  {
    slug: "elderly-visit",
    name: "Elderly Visit",
    short: "Songs, stories and games shared with seniors at local aged care homes.",
    cover: ph("elderly-2.jpg", "Children sitting with elderly friends during a visit", 1200, 900),
    tagline: "Connecting generations with love & care",
    photos: [ph("elderly-1.jpg", "Children doing crafts with elderly residents", 1200, 900), ph("elderly-3.jpg", "Toddlers playing on the floor while seniors watch", 1200, 900)],
    gallery: [
      ph("elderly-2.jpg", "Children and seniors sitting together in a circle", 1200, 900),
      ph("elderly-4.jpg", "A group singing session with elderly friends", 1200, 900),
      ph("caversham-visit.jpg", "A visitor sitting with children", 1200, 900),
      ph("elderly-1.jpg", "Crafts with elderly friends", 1200, 900),
    ],
    intro: [
      "We believe in fostering empathy, kindness and community spirit from a young age. Our Elderly Visit Squad Program bridges the generational gap by bringing children and seniors together.",
      "Through regular visits to local aged care homes, children connect with elderly friends, learning valuable life lessons while spreading joy and companionship.",
    ],
    blocks: [
      ["About the program", "Visits are carefully planned so every interaction is meaningful and positive. Children and seniors read stories, play games, sing songs and simply spend time together, forming friendships and lasting memories."],
      ["Benefits for children", "Children develop empathy, compassion and a sense of community. They learn about different life experiences, history and the value of kindness and respect, and gain an understanding of ageing."],
      ["Benefits for the elderly", "Children bring joy, energy and companionship. Many seniors look forward to these visits for the social connection and a happy break from routine."],
    ],
    why: [
      ["Building empathy", "Children learn kindness, respect and understanding."],
      ["Creating connections", "Meaningful relationships between young and old."],
      ["Emotional growth", "Children grow their emotional intelligence and social skills."],
      ["Fun together", "Activities that children and seniors can enjoy side by side."],
    ],
    join: "Help your child become part of something special. Together we can build a compassionate, connected community, one visit at a time.",
  },
];
export const getProgram = (slug: string) => programs.find((p) => p.slug === slug)!;

/* --------------------------------------------------------------- navigation */
// Nov 2026 revision: the sitemap agreed with the client.
export const nav: NavEntry[] = [
  { label: "Our Centres", items: [{ label: "All Centres", href: "/centres" }, ...centres.map((c) => ({ label: `Mirabilia ${c.name}`, href: `/${c.slug}` }))] },
  {
    label: "Curriculum & Programs",
    items: [
      { label: "Philosophy", href: "/our-philosophy" },
      { label: "Learning Journeys", href: "/our-curriculum" },
      { label: "Squad Programs", href: "/squad-programs" },
      { label: "A Day at Mirabilia", href: "/a-day-at-mirabilia" },
      { label: "Learning Spaces & Child Safety", href: "/our-spaces" },
    ],
  },
  {
    label: "Families",
    items: [
      { label: "Child Care Subsidy (CCS)", href: "/childcare-subsidy" },
      { label: "Inclusive Care", href: "/inclusive-care" },
      { label: "Family Benefits", href: "/family-benefits" },
    ],
  },
  { label: "Our Story", href: "/our-story" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/** The header's main call to action ("Explore Now"). */
export const ctaLinks: NavLink[] = [
  { label: "Book a Tour", href: "/book-a-tour" },
  { label: "Make an Enquiry", href: "/enquire-now" },
];

export const navLinks = (e: NavEntry): NavLink[] =>
  e.groups?.flatMap((g) => g.items) ?? e.items ?? (e.href ? [{ label: e.label, href: e.href }] : []);

/* ----------------------------------------------------------------- misc */
export const day = [
  { title: "Morning hello", text: "A warm welcome, breakfast for early arrivals and time to settle into the room.", note: "good morning!" },
  { title: "Explore & learn", text: "Group time, projects and play, indoors and out, shaped by what children are curious about.", note: "what’s this?" },
  { title: "Lunch & rest", text: "Meals together at the table, then a sleep or quiet rest to recharge.", note: "yum… then zzz" },
  { title: "Create & go home", text: "Art, music and outdoor play until pick-up, with a quick chat about the day.", note: "see you tomorrow!" },
];

export const acknowledgement =
  "Mirabilia acknowledges the traditional owners of all lands across Australia. We recognise and celebrate the contributions of Aboriginal and Torres Strait Islander people as the First Australians, including their role in the education and care of children. We acknowledge and pay our respects to the Elders of the past, present and emerging. We thank you for sharing and caring for the land we learn and play on. We endeavour to continue to respect, share and care for this beautiful land.";

/* --------------------------------------------------------------- photos added in the Nov 2026 revision */
export const newPhotos = {
  outdoorDiscover: ph("outdoor-discover.jpg", "Three children in sun hats exploring a discovery tray on the grass", 1600, 1068),
  homeCornerStory: ph("home-corner-story.jpg", "An educator reading a picture book to children in the home corner", 1600, 1068),
  educatorPuzzle: ph("educator-puzzle.jpg", "An educator doing a peg puzzle with a toddler", 1600, 1068),
  waterPouring: ph("water-pouring.jpg", "Children pouring water into a pot at the outdoor kitchen", 1600, 1068),
  tablePlay: ph("table-play.jpg", "An educator playing with children at a small table", 1600, 1068),
};

/* --------------------------------------------------------------- leadership (Our Story)
 * New staff photos are being taken, so cards show a neutral placeholder.
 * The client asked not to reuse the old team photos.
 */
export type Leader = { name: string; role: string; photo?: Photo };
export const leadership: { key: string; title: string; text: string; people: Leader[] }[] = [
  {
    key: "senior",
    title: "Senior Management Team",
    text: "Our Senior Management Team sets the vision and direction for Mirabilia. With deep experience in early childhood education and a shared passion for quality, they lead with purpose, so that every decision we make puts children and families first.",
    people: [
      { name: "Clarissa de Fretes", role: "Approved Provider & Principal Director" },
      { name: "Ditya Kusuma", role: "Approved Provider" },
      { name: "Anrivi Aryoputro", role: "Finance Director" },
    ],
  },
  {
    key: "centre",
    title: "Centre Managers",
    text: "Our Centre Managers are the heart of each centre. They lead their teams with warmth and professionalism, build strong relationships with families and create welcoming environments where children feel safe, valued and inspired to learn.",
    people: [
      { name: "Jaclyn Pereira", role: "Caversham" },
      { name: "Naomi Holly", role: "Byford and Champion Lakes" },
      { name: "Abbie Wray", role: "Citiplace" },
    ],
  },
  {
    key: "shared",
    title: "Shared Services Team",
    text: "Our Shared Services team makes sure every family’s experience with Mirabilia is seamless, from your very first inquiry to enrolment and beyond. They’re here to answer your questions, guide you through fees and CCS, and support each centre behind the scenes. Through clear communication, efficient systems and a genuine commitment to service, they help our centres run smoothly, so that families feel supported and educators can focus on what matters most: the children in their care.",
    people: [
      { name: "Madelyn Villa", role: "Client Services" },
      { name: "Pazia Faisal", role: "Human Resources" },
      { name: "Reinhard Welan", role: "Operations" },
    ],
  },
];

/* --------------------------------------------------------------- Squad topics (SEO pages, kept out of the menu) */
export type SquadTopic = { slug: string; name: string; officer: string; photo: Photo; summary: string; body: string[] };
export const squadTopics: SquadTopic[] = [
  {
    slug: "physical-literacy-wellbeing",
    name: "Physical Literacy & Wellbeing",
    officer: "KIDDO Physical Literacy Officer & Wellness and Wellbeing Officer",
    photo: ph("sports-cones.jpg", "Children kicking soccer balls around cones", 1200, 900),
    summary: "Fundamental movement skills, emotional literacy and mindfulness, woven into every room each week.",
    body: [
      "Our KIDDO Physical Literacy Officer champions fundamental movement skills, such as balancing, throwing, catching, and agility, through fun, evidence-based play that builds lifelong physical confidence.",
      "Alongside them, our Wellness & Wellbeing Officer nurtures emotional literacy, mindfulness, sensory calm, and resilience, helping children recognise their feelings and develop healthy coping tools.",
    ],
  },
  {
    slug: "reconciliation-action-plan",
    name: "Reconciliation Action Plan",
    officer: "RAP (Reconciliation Action Plan) Officer",
    photo: ph("outdoor-discover.jpg", "Three children exploring a discovery tray on the grass", 1600, 1068),
    summary: "Authentic, respectful engagement with Aboriginal and Torres Strait Islander cultures every week.",
    body: [
      "Our RAP Officer leads authentic, respectful engagement with Aboriginal and Torres Strait Islander cultures, stories, languages, and connections to Country every week.",
      "This work sits alongside our daily Acknowledgement of Country, Dreaming stories, NAIDOC Week, and National Reconciliation Week.",
    ],
  },
  {
    slug: "cultural-linguistic-diversity",
    name: "Cultural & Linguistic Diversity",
    officer: "CALD (Culturally & Linguistically Diverse) Officer",
    photo: ph("home-corner-story.jpg", "An educator reading a picture book to children", 1600, 1068),
    summary: "Celebrating the rich multicultural heritage of our families and local communities.",
    body: [
      "Our CALD Officer celebrates the rich multicultural heritage of our families and local Western Australian communities, ensuring every child sees their culture, home language, and traditions valued.",
      "Playful language classes and family traditions shared in our rooms spark cognitive flexibility, cultural curiosity, and respect for our diverse world.",
    ],
  },
  {
    slug: "sustainability",
    name: "Sustainability",
    officer: "Sustainability Officer",
    photo: ph("water-pouring.jpg", "Children pouring water at the outdoor kitchen", 1600, 1068),
    summary: "Worm farming, composting, conservation and hands-on care for our edible gardens.",
    body: [
      "Our Sustainability Officer inspires environmental stewardship through worm farming, composting, water and energy conservation, recycling, and hands-on care for our edible gardens.",
      "Through seed-to-plate experiences, children help plant, water, and harvest herbs and produce, discovering where real food comes from and developing genuine pride in caring for our environment.",
    ],
  },
];
export const getSquadTopic = (slug: string) => squadTopics.find((t) => t.slug === slug);

export const storypark =
  "Your child’s day doesn’t have to be a mystery. Through Storypark, our secure family communication platform, you’ll receive updates, photos and learning stories that capture their discoveries and milestones. It’s a window into their world, and a simple way to share in their learning journey wherever you are.";
