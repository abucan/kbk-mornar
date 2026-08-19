export const locales = ['hr', 'en'] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'hr';

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

type NavLink = { title: string; path: string };
type GalleryItem = { description: string; images: string[] };
type ScheduleDay = {
  dayOfWeek: string;
  sessions: { name: string; time: string; trainer: string }[];
};
type TrainerItem = {
  id: number;
  avatar: string;
  name: string;
  title: string;
  content: string;
};

export type Dictionary = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  hreflang: {
    hr: string;
    en: string;
    xDefault: string;
  };
  navLinks: NavLink[];
  heroItems: string[];
  about: {
    title: string;
    text: string;
  };
  trainers: {
    headerTitle: string;
    headerDescription: string;
    items: TrainerItem[];
  };
  featured: {
    eyebrow: string;
    title: string;
    text: string;
    carouselDescription: string;
  };
  blog: {
    headerTitle: string;
    headerDescription: string;
    readMore: string;
    readLess: string;
    likes: string;
    comments: string;
    shares: string;
  };
  gallery: {
    headerTitle: string;
    headerDescription: string;
    scrollHint: string;
    items: GalleryItem[];
  };
  schedule: {
    headerTitle: string;
    headerDescription: string;
    days: ScheduleDay[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    whatsappLabel: string;
    methods: {
      email: string;
      phone: string;
      address: string;
    };
  };
  footer: {
    text: string;
    sponsorsTitle: string;
  };
  form: {
    labels: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    validation: {
      name: string;
      email: string;
      message: string;
      recaptcha: string;
      failed: string;
      success: string;
    };
  };
  whatsapp: {
    ariaLabel: string;
    floatingLabel: string;
    url: string;
  };
  languageSwitcher: {
    hr: string;
    en: string;
  };
};

const PLACE = ['/place/p1.jpeg', '/place/p2.jpeg', '/place/p3.jpeg', '/place/p4.jpeg', '/place/p5.jpeg', '/place/p6.jpeg', '/place/p7.jpeg', '/place/p8.jpeg', '/place/p9.jpeg', '/place/p10.jpeg', '/place/p11.jpeg', '/place/p12.jpeg', '/place/p13.jpeg', '/place/p14.jpeg', '/place/p15.jpeg', '/place/p16.jpeg', '/place/p17.jpeg', '/place/p18.jpeg', '/place/p19.jpeg', '/place/p20.jpeg'];
const GOLD_FIGHT = ['/gold-fight/gf1.jpeg', '/gold-fight/gf2.jpeg', '/gold-fight/gf3.jpeg', '/gold-fight/gf4.jpeg', '/gold-fight/gf5.jpeg', '/gold-fight/gf6.jpeg', '/gold-fight/gf7.jpeg', '/gold-fight/gf8.jpeg', '/gold-fight/gf9.jpeg', '/gold-fight/gf10.jpeg', '/gold-fight/gf11.jpeg', '/gold-fight/gf12.jpeg', '/gold-fight/gf13.jpeg', '/gold-fight/gf14.jpeg', '/gold-fight/gf15.jpeg'];
const KOSOVO = ['/kosovo/k1.jpeg', '/kosovo/k2.jpeg', '/kosovo/k3.jpeg', '/kosovo/k4.jpeg', '/kosovo/k5.jpeg', '/kosovo/k6.jpeg', '/kosovo/k7.jpeg', '/kosovo/k8.jpeg'];
const OLYMPIC_GAMES = ['/olympic-games/ol1.jpeg', '/olympic-games/ol2.jpeg', '/olympic-games/ol3.jpeg', '/olympic-games/ol4.jpeg', '/olympic-games/ol5.jpeg', '/olympic-games/ol6.jpeg', '/olympic-games/ol7.jpeg', '/olympic-games/ol8.jpeg', '/olympic-games/ol9.jpeg', '/olympic-games/ol10.jpeg', '/olympic-games/ol11.jpeg', '/olympic-games/ol12.jpeg', '/olympic-games/ol13.jpeg', '/olympic-games/ol14.jpeg'];
const GREECE = ['/greece/g1.jpeg', '/greece/g2.jpeg', '/greece/g3.jpeg', '/greece/g4.jpeg', '/greece/g5.jpeg', '/greece/g6.jpeg', '/greece/g7.jpeg', '/greece/g8.jpeg', '/greece/g9.jpeg', '/greece/g10.jpeg'];
const PORTUGAL = ['/portugal/p1.jpeg', '/portugal/p2.jpeg', '/portugal/p3.jpeg', '/portugal/p4.jpeg', '/portugal/p5.jpeg', '/portugal/p6.jpeg', '/portugal/p7.jpeg', '/portugal/p8.jpeg', '/portugal/p9.jpeg', '/portugal/p10.jpeg', '/portugal/p11.jpeg', '/portugal/p12.jpeg', '/portugal/p13.jpeg', '/portugal/p14.jpeg', '/portugal/p15.jpeg'];
const ABU_DHABI = ['/abu-dhabi/a1.jpeg', '/abu-dhabi/a2.jpeg', '/abu-dhabi/a3.jpeg', '/abu-dhabi/a4.jpeg', '/abu-dhabi/a5.jpeg', '/abu-dhabi/a6.jpeg', '/abu-dhabi/a7.jpeg', '/abu-dhabi/a8.jpeg', '/abu-dhabi/a9.jpeg', '/abu-dhabi/a10.jpeg', '/abu-dhabi/a11.jpeg', '/abu-dhabi/a12.jpeg', '/abu-dhabi/a13.jpeg'];
const THAILAND = ['/thailand/t1.jpeg', '/thailand/t2.jpeg', '/thailand/t3.jpeg', '/thailand/t4.jpeg', '/thailand/t5.jpeg', '/thailand/t6.jpeg', '/thailand/t7.jpeg'];

const commonTrainers = [
  {
    id: 2,
    avatar: '/trainers/dario.JPG',
    name: 'Dario Jurisic',
  },
  {
    id: 3,
    avatar: '/trainers/tabak.PNG',
    name: 'Ivan Tabak',
  },
  {
    id: 4,
    avatar: '/trainers/petar.PNG',
    name: 'Petar Pastuovic',
  },
  {
    id: 5,
    avatar: '/trainers/mate.PNG',
    name: 'Mate Grcic',
  },
  {
    id: 6,
    avatar: '/trainers/anton.JPG',
    name: 'Anton Zanko',
  },
  {
    id: 7,
    avatar: '/trainers/gordan.JPG',
    name: 'Gordan Vukman',
  },
] as const;

const hrDictionary: Dictionary = {
  locale: 'hr',
  meta: {
    title: 'KBK Mornar',
    description: 'Kickboxing / Muaythai Mornar Split',
  },
  hreflang: {
    hr: '/',
    en: '/en',
    xDefault: '/',
  },
  navLinks: [
    { title: 'O nama', path: '/#about-us' },
    { title: 'Treneri', path: '/#trainers' },
    { title: 'Novosti', path: '/#blog' },
    { title: 'Galerija', path: '/#gallery' },
    { title: 'Raspored', path: '/#schedule' },
    { title: 'Kontakt', path: '/#contact' },
  ],
  heroItems: ['Teretana', 'Sauna', 'Masaze', 'Treninzi'],
  about: {
    title: 'O nama',
    text: 'Dobrodosli na stranicu Kluba borilackih sportova Mornar Split. Nas klub, s iskusnim trenerima, pruza vrhunsku obuku u kickboxingu, muay thai i boksu. Ponosni smo ne samo nasim vrhunskim sportskim uspjesima, nego i njegovanju zajednistva, moralnih vrijednosti, discipline, antistresa i zdrave prehrane. KBK Mornar Split otvoren je za sve uzraste i razine iskustva, nudeci programe prilagodene vasim ciljevima. Pridruzite nam se i postanite dio nase sportske obitelji!',
  },
  trainers: {
    headerTitle: 'Upoznajte nase trenere',
    headerDescription:
      'Nasi iskusni i certificirani treneri predani su vasem napretku, pruzajuci strucnu podrsku i motivaciju na svakom koraku vaseg sportskog puta.',
    items: [
      {
        ...commonTrainers[0],
        title: 'Trener',
        content:
          'Dario Jurisic zavrsio je Ekonomski fakultet, kao i strucno usavrsavanje za trenera borilackog sporta na Kinezioloskom fakultetu u Zagrebu. U svijetu borilackih sportova prisutan je od 1998. godine, gdje je prvo izgradio uspjesnu natjecateljsku karijeru. Kao visestruki prvak Hrvatske i clan nacionalne reprezentacije, postigao je zapazene rezultate na domacoj i medunarodnoj sceni.\n\nNakon zavrsetka natjecateljske karijere, Dario se posvetio trenerskom radu i strucnom razvoju kluba. Pod njegovim vodstvom klub je ostvario iznimne uspjehe, ukljucujuci brojne medalje s europskih i svjetskih natjecanja, cime se pozicionirao medu najuspjesnije klubove u Hrvatskoj i sire.\n\nNjegova strucnost, iskustvo i posvecenost osiguravaju kvalitetan razvoj sportasa svih uzrasta, od pocetnika do vrhunskih natjecatelja. Dario je posvecen promociji sporta, timskog duha i vrhunskih rezultata, uvijek s ciljem podizanja standarda u borilackom sportu.',
      },
      {
        ...commonTrainers[1],
        title: 'Trener',
        content:
          'Ivan Tabak\nRoden 26.09. 1992 u Splitu\nInstruktor fitnesa i trener u Kickboxing klubu Mornar.\nBivsi natjecatelj u kickboxingu i muay thaiu, a sada trener sa visegodisnjim iskustvom u radu s rekreativcima i sportasima.',
      },
      {
        ...commonTrainers[2],
        title: 'Trener',
        content:
          'Petar Pastuovic, trener koji je u kickboxing klub Mornar krocio jos davne 2001. godine i ta strast za borilackim sportom traje sve do danas. Kao i 2001., tako i danas doprinosi nasem klubu i mladim uzrastima gdje odgajanjem jedne sportske obitelji i natjecateljskog duha stvaramo vrhunske natjecatelje.\n\nPrvih 6 godina bio je aktivni natjecatelj i hrvatski reprezentativac, s iskustvom na drzavnim, europskim i svjetskim prvenstvima uz velik broj zlatnih odlicja. Aktivno bavljenje sportom kasnije je uskladio s obrazovanjem i stekao zvanje inzenjera gradevine.\n\nSvoju ljubav i znanje prema borilackom sportu vrlo brzo je poceo primjenjivati na sljedece narastaje i u ulozi trenera se prvi put nalazi 2006/2007., a potpuno se trenerskom radu posvecuje od 2010.\n\nDanas, kao suprug i otac dvoje djece, aktivno sudjeluje u stvaranju vrhunskih sportasa koji pod bojama KBK Mornar nizu uspjehe.',
      },
      {
        ...commonTrainers[3],
        title: 'Trener',
        content:
          'Mate Grcic, roden 2. sijecnja 1994. u Splitu, magistar je kineziologije i trener Bocarskog kluba osoba s invaliditetom Sveti Duje. Takoder je predsjednik kluba i dopredsjednik Hrvatskog saveza bocanja osoba s invaliditetom. Ima visegodisnje iskustvo u radu s djecom i sportasima s invaliditetom te sudjeluje u projektima Sportskog saveza invalida grada Splita i Hrvatskog paraolimpijskog odbora.',
      },
      {
        ...commonTrainers[4],
        title: 'Trener',
        content:
          'Anton Zanko, student 3. godine Kinezioloskog fakulteta (smjer kineziterapija), donosi svoje znanje i iskustvo u kickboxing klub Mornar kroz sportske i terapeutske masaze te funkcionalne treninge.\n\nUz razumijevanje pokreta i rehabilitacije, Anton kroz individualan pristup prilagodava masaze i treninge vasim potrebama - bilo da se zelite osloboditi napetosti, ubrzati oporavak ili poboljsati tjelesnu funkcionalnost.',
      },
      {
        ...commonTrainers[5],
        title: 'Trener',
        content:
          'Gordan Vukman je student magisterskog sveucilisnog studija na Kinezioloskom fakultetu u Splitu, s ciljem stjecanja zvanja magistra kineziologije. Sportom se bavi cijeli zivot, a s kickboxingom se upoznao sa 15 godina kao clan KBK Mornar.\n\nKao certificirani trener s pet godina iskustva, specijaliziran je za rehabilitaciju ozljeda prednjeg kriznog ligamenta (ACL) te radi u Smart Training Centru u Splitu, gdje sportasima pomaze u oporavku i poboljsanju performansi.',
      },
    ],
  },
  featured: {
    eyebrow: 'Najuspjesnija sportasica Hrvatske u neolimpijskim sportovima za 2024.',
    title: 'Helena Jurisic',
    carouselDescription: 'Helena Jurisic',
    text:
      'Godina 2024. ostat ce zapamcena kao jedna od najvaznijih u povijesti hrvatskog borilackog sporta, zahvaljujuci izvanrednim uspjesima nase Helene Jurisic.\n\nOsvajanjem naslova svjetske i europske prvakinje u muay thaiu, Helena je dokazala svoju iznimnu predanost, nepopustljivu volju i duboku strast prema ovom sportu.\n\nKao kruna uspjeha u 2024. godini, Helena je dobila priznanje Hrvatskog olimpijskog odbora i proglasena najboljom sportasicom Hrvatske u neolimpijskim sportovima.\n\nOvaj povijesni uspjeh pripada cijelom timu, klubu, savezu, obitelji i svima koji su je podrzavali. Zajedno nastavljamo dalje, jaci i odlucniji nego ikada.',
  },
  blog: {
    headerTitle: 'Novosti iz kluba',
    headerDescription:
      'Pogledajte najnovije informacije iz kluba i saznajte vise o aktivnostima.',
    readMore: 'Procitaj vise',
    readLess: 'Procitaj manje',
    likes: 'Svida mi se',
    comments: 'Komentari',
    shares: 'Dijeljenja',
  },
  gallery: {
    headerTitle: 'Galerija',
    headerDescription:
      'Pregledajte trenutke iz nasih treninga, dogadanja i svakodnevnih aktivnosti. Inspirirajte se nasom energijom i zajednistvom!',
    scrollHint: '<- Povuci za vise ->',
    items: [
      { description: 'Suvremeno opremljeni prostor', images: PLACE },
      { description: 'Golden Fight - Osijek 2024.', images: GOLD_FIGHT },
      {
        description:
          'Europsko seniorsko prvenstvo u tajlandskom boksu, Pristina (Kosovo) 2024.',
        images: KOSOVO,
      },
      { description: 'Olimpijske igre Pariz 2024.', images: OLYMPIC_GAMES },
      {
        description:
          'Svjetsko seniorsko prvenstvo u tajlandskom boksu, Patras (Grcka) 2024.',
        images: GREECE,
      },
      {
        description: 'Svjetsko prvenstvo kickboxing Albufeira (Portugal) 2023.',
        images: PORTUGAL,
      },
      {
        description:
          'Svjetsko prvenstvo u tajlandskom boksu Abu Dhabi (UAE) 2022.',
        images: ABU_DHABI,
      },
      {
        description: 'Svjetsko prvenstvo tajlandski boks Bangkok (Tajland) 2021.',
        images: THAILAND,
      },
    ],
  },
  schedule: {
    headerTitle: 'Raspored treninga',
    headerDescription: 'Pogledajte raspored treninga i pronadite najbolji termin za sebe.',
    days: [
      {
        dayOfWeek: 'Ponedjeljak',
        sessions: [
          { name: 'Funkcionalni rekreativni kickboxing za zene', time: '18:00', trainer: 'Mate Grcic' },
          { name: 'Kickboxing rekreacija', time: '19:00', trainer: 'Petar Pastulovic' },
          { name: 'Kickboxing & muay thai advanced', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Kickboxing basic (D2)', time: '20:30', trainer: '' },
          { name: 'Functional Strength', time: '21:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Utorak',
        sessions: [
          { name: 'Skola kickboxa & muay thai-a', time: '19:00', trainer: 'Gabrijel Ojdanic' },
          { name: 'Kickboxing advanced (dvorana 2)', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Functional Strength', time: '20:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Srijeda',
        sessions: [
          { name: 'Funkcionalni rekreativni kickboxing za zene', time: '18:00', trainer: 'Mate Grcic' },
          { name: 'Kickboxing rekreacija', time: '19:00', trainer: 'Petar Pastulovic' },
          { name: 'Kickboxing & muay thai advanced', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Kickboxing basic (D2)', time: '20:30', trainer: '' },
          { name: 'Functional Strength', time: '21:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Cetvrtak',
        sessions: [
          { name: 'Skola kickboxa & muay thai-a', time: '19:00', trainer: 'Gabrijel Ojdanic' },
          { name: 'Kickboxing advanced (dvorana 2)', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Functional Strength', time: '20:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Petak',
        sessions: [
          { name: 'Funkcionalni rekreativni kickboxing za zene', time: '18:00', trainer: 'Mate Grcic' },
          { name: 'Kickboxing rekreacija', time: '19:00', trainer: 'Petar Pastulovic' },
          { name: 'Kickboxing & muay thai advanced', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Kickboxing basic (D2)', time: '20:30', trainer: '' },
          { name: 'Functional Strength', time: '21:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Subota',
        sessions: [
          { name: 'Skola kickboxa & muay thai-a', time: '18:30', trainer: 'Gabrijel Ojdanic' },
          { name: 'Functional Strength', time: '20:00', trainer: 'Gordan Vukman' },
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Dodatne informacije',
    title: 'Posaljite nam poruku!',
    description:
      'Kontaktirajte nas u slucaju bilo kakvih pitanja. Ispunite formu i posaljite nam poruku. Odgovorit cemo u najkracem mogucem roku.',
    whatsappLabel: 'WhatsApp',
    methods: {
      email: 'dariojurisic@kbk-mornar.hr',
      phone: '091 540 1195',
      address: 'Poljud, Split, Hrvatska',
    },
  },
  footer: {
    text: 'Posveceni smo vasem uspjehu u borilackim sportovima. Pridruzite nam se i postanite dio nase zajednice. Za vise informacija, kontaktirajte nas.',
    sponsorsTitle: 'Donatori/Sponzori',
  },
  form: {
    labels: {
      name: 'Ime i prezime',
      email: 'Email',
      message: 'Poruka',
      send: 'Posalji',
    },
    placeholders: {
      name: 'Unesite ime i prezime',
      email: 'Unesite email',
      message: 'Unesite poruku',
    },
    validation: {
      name: 'Unesite ime i prezime',
      email: 'Unesite email.',
      message: 'Unesite poruku.',
      recaptcha: 'Molimo potvrdite da niste bot.',
      failed: 'Doslo je do greske. Pokusajte ponovno.',
      success: 'Poruka je uspjesno poslana.',
    },
  },
  whatsapp: {
    ariaLabel: 'Kontakt putem WhatsAppa',
    floatingLabel: 'WhatsApp',
    url: 'https://wa.me/385915401195?text=Bok,%20zelim%20se%20pridruziti%20treningu',
  },
  languageSwitcher: {
    hr: 'HR',
    en: 'EN',
  },
};

const enDictionary: Dictionary = {
  locale: 'en',
  meta: {
    title: 'KBK Mornar',
    description: 'Kickboxing / Muay Thai Mornar Split',
  },
  hreflang: {
    hr: '/',
    en: '/en',
    xDefault: '/',
  },
  navLinks: [
    { title: 'About', path: '/#about-us' },
    { title: 'Coaches', path: '/#trainers' },
    { title: 'News', path: '/#blog' },
    { title: 'Gallery', path: '/#gallery' },
    { title: 'Schedule', path: '/#schedule' },
    { title: 'Contact', path: '/#contact' },
  ],
  heroItems: ['Gym', 'Sauna', 'Massage', 'Training'],
  about: {
    title: 'About us',
    text: 'Welcome to the website of KBK Mornar Split. With experienced coaches, our club provides top-level kickboxing, muay thai and boxing training. We are proud not only of our results, but also of our community, discipline, values and healthy lifestyle. KBK Mornar Split is open to all ages and experience levels, with programs tailored to your goals. Join us and become part of our sports family!',
  },
  trainers: {
    headerTitle: 'Meet our coaches',
    headerDescription:
      'Our experienced and certified coaches are dedicated to your progress, providing expert guidance and motivation every step of the way.',
    items: [
      {
        ...commonTrainers[0],
        title: 'Coach',
        content:
          'Dario Jurisic graduated from the Faculty of Economics and completed specialized coaching education in martial arts at the Faculty of Kinesiology in Zagreb. He has been active in combat sports since 1998, first building a successful competitive career.\n\nAfter competition, Dario focused on coaching and club development. Under his leadership, the club achieved outstanding results, including numerous medals at European and World competitions.',
      },
      {
        ...commonTrainers[1],
        title: 'Coach',
        content:
          'Ivan Tabak\nBorn on 26 September 1992 in Split.\nFitness instructor and coach at Kickboxing Club Mornar.\nFormer kickboxing and muay thai competitor, now a coach with years of experience working with recreational and professional athletes.',
      },
      {
        ...commonTrainers[2],
        title: 'Coach',
        content:
          'Petar Pastuovic joined Kickboxing Club Mornar back in 2001, and that passion for combat sports continues today. He has played a key role in developing young athletes and building a strong team culture.\n\nAfter an active competitive career, he continued his education and became a civil engineer, while staying dedicated to coaching and athlete development.',
      },
      {
        ...commonTrainers[3],
        title: 'Coach',
        content:
          'Mate Grcic, born in Split on 2 January 1994, holds a master degree in kinesiology. He is also active in adaptive sports and has extensive experience working with children and athletes with disabilities.',
      },
      {
        ...commonTrainers[4],
        title: 'Coach',
        content:
          'Anton Zanko, a 3rd-year kinesiology student (kinesiotherapy track), brings practical knowledge through sports and therapeutic massages and functional training programs tailored to each athlete.',
      },
      {
        ...commonTrainers[5],
        title: 'Coach',
        content:
          'Gordan Vukman is a graduate kinesiology student in Split. As a certified coach with five years of experience, he specializes in ACL rehabilitation and performance improvement for athletes.',
      },
    ],
  },
  featured: {
    eyebrow: 'Most successful Croatian athlete in non-olympic sports for 2024',
    title: 'Helena Jurisic',
    carouselDescription: 'Helena Jurisic',
    text:
      'The year 2024 will be remembered as one of the most important in Croatian combat sports, thanks to the outstanding success of Helena Jurisic.\n\nBy winning the World and European Muay Thai titles, Helena demonstrated exceptional dedication and passion.\n\nAs the crown of her 2024 season, she received recognition from the Croatian Olympic Committee and was named Croatia’s best athlete in non-olympic sports.\n\nThis achievement belongs not only to Helena, but to the entire team, club, federation, family and supporters.',
  },
  blog: {
    headerTitle: 'Club news',
    headerDescription:
      'Check out the latest updates from the club and learn more about our activities.',
    readMore: 'Read more',
    readLess: 'Read less',
    likes: 'Likes',
    comments: 'Comments',
    shares: 'Shares',
  },
  gallery: {
    headerTitle: 'Gallery',
    headerDescription:
      'Browse moments from our training sessions, events and everyday activities. Get inspired by our energy and team spirit!',
    scrollHint: '<- Scroll to see more ->',
    items: [
      { description: 'Modern training facility', images: PLACE },
      { description: 'Golden Fight - Osijek 2024', images: GOLD_FIGHT },
      {
        description:
          'European Senior Muay Thai Championship, Pristina (Kosovo) 2024',
        images: KOSOVO,
      },
      { description: 'Olympic Games Paris 2024', images: OLYMPIC_GAMES },
      {
        description:
          'World Senior Muay Thai Championship, Patras (Greece) 2024',
        images: GREECE,
      },
      { description: 'World Kickboxing Championship Albufeira 2023', images: PORTUGAL },
      { description: 'World Muay Thai Championship Abu Dhabi 2022', images: ABU_DHABI },
      { description: 'World Muay Thai Championship Bangkok 2021', images: THAILAND },
    ],
  },
  schedule: {
    headerTitle: 'Training schedule',
    headerDescription: 'Browse our weekly schedule and find the best time for you.',
    days: [
      {
        dayOfWeek: 'Monday',
        sessions: [
          { name: 'Functional recreational kickboxing for women', time: '18:00', trainer: 'Mate Grcic' },
          { name: 'Kickboxing recreation', time: '19:00', trainer: 'Petar Pastulovic' },
          { name: 'Kickboxing & muay thai advanced', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Kickboxing basic (Hall 2)', time: '20:30', trainer: '' },
          { name: 'Functional Strength', time: '21:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        sessions: [
          { name: 'Kickboxing & muay thai school', time: '19:00', trainer: 'Gabrijel Ojdanic' },
          { name: 'Kickboxing advanced (Hall 2)', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Functional Strength', time: '20:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        sessions: [
          { name: 'Functional recreational kickboxing for women', time: '18:00', trainer: 'Mate Grcic' },
          { name: 'Kickboxing recreation', time: '19:00', trainer: 'Petar Pastulovic' },
          { name: 'Kickboxing & muay thai advanced', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Kickboxing basic (Hall 2)', time: '20:30', trainer: '' },
          { name: 'Functional Strength', time: '21:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        sessions: [
          { name: 'Kickboxing & muay thai school', time: '19:00', trainer: 'Gabrijel Ojdanic' },
          { name: 'Kickboxing advanced (Hall 2)', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Functional Strength', time: '20:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Friday',
        sessions: [
          { name: 'Functional recreational kickboxing for women', time: '18:00', trainer: 'Mate Grcic' },
          { name: 'Kickboxing recreation', time: '19:00', trainer: 'Petar Pastulovic' },
          { name: 'Kickboxing & muay thai advanced', time: '20:00', trainer: 'Dario Jurisic, Ivan Tabak' },
          { name: 'Kickboxing basic (Hall 2)', time: '20:30', trainer: '' },
          { name: 'Functional Strength', time: '21:30', trainer: 'Gordan Vukman' },
        ],
      },
      {
        dayOfWeek: 'Saturday',
        sessions: [
          { name: 'Kickboxing & muay thai school', time: '18:30', trainer: 'Gabrijel Ojdanic' },
          { name: 'Functional Strength', time: '20:00', trainer: 'Gordan Vukman' },
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Additional info',
    title: 'Send us a message!',
    description:
      'Contact us with any questions. Fill in the form and send us a message. We will reply as soon as possible.',
    whatsappLabel: 'WhatsApp',
    methods: {
      email: 'dariojurisic@kbk-mornar.hr',
      phone: '091 540 1195',
      address: 'Poljud, Split, Croatia',
    },
  },
  footer: {
    text: 'We are dedicated to your success in combat sports. Join our community and train with us. Contact us for more information.',
    sponsorsTitle: 'Donors / Sponsors',
  },
  form: {
    labels: {
      name: 'Full name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
    },
    placeholders: {
      name: 'Enter full name',
      email: 'Enter email',
      message: 'Enter message',
    },
    validation: {
      name: 'Please enter your full name.',
      email: 'Please enter your email.',
      message: 'Please enter your message.',
      recaptcha: 'Please confirm that you are not a bot.',
      failed: 'Something went wrong. Please try again.',
      success: 'Your message has been sent successfully.',
    },
  },
  whatsapp: {
    ariaLabel: 'Contact via WhatsApp',
    floatingLabel: 'WhatsApp',
    url: "https://wa.me/385915401195?text=Hi,%20I%27d%20like%20to%20join%20a%20class",
  },
  languageSwitcher: {
    hr: 'HR',
    en: 'EN',
  },
};

const dictionaries: Record<Locale, Dictionary> = {
  hr: hrDictionary,
  en: enDictionary,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];

export const getLocalizedHref = (href: string, locale: Locale) => {
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('tel:')) {
    return href;
  }

  if (href.startsWith('#')) {
    return locale === 'en' ? `/en/${href}` : `/${href}`;
  }

  if (locale === 'en') {
    return href === '/' ? '/en' : `/en${href}`;
  }

  if (href.startsWith('/en/')) {
    return href.replace('/en', '');
  }

  if (href === '/en') {
    return '/';
  }

  return href;
};

export const getLocaleFromPathname = (pathname: string | null): Locale =>
  pathname?.startsWith('/en') ? 'en' : 'hr';
