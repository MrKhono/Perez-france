export const CHURCH = {
  name: "Perez Chapel France",
  shortName: "Perez Chapel",
  slogan: "Percer et Transformer les Générations",
  network: "Perez Chapel International",
  address: "45 rue Delizy, 1er étage, lot 101, 93500 Pantin, France",
  addressShort: "45 rue Delizy, 93500 Pantin",
  email: "contact@perezchapel.fr",
  phone: "+33 (0)0 00 00 00 00",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
}

export const FOUNDERS = {
  name: "Archevêque Charles Agyinasare & Pasteure Vivian Agyinasare",
  role: "Fondateurs de Perez Chapel International",
  bio: [
    "Visionnaires et serviteurs de Dieu, les fondateurs de Perez Chapel International ont consacré leur vie à l'annonce de l'Évangile et à la formation de générations de croyants à travers le monde.",
    "Animés par une foi inébranlable et une passion pour les âmes, ils ont bâti un ministère reconnu pour la puissance de son enseignement, son engagement missionnaire et son impact social durable.",
    "Leur héritage spirituel continue d'inspirer chaque assemblée du réseau, dont Perez Chapel France, à percer dans la prière et à transformer les générations.",
  ],
  network:
    "Perez Chapel International est un réseau d'églises présent dans de nombreuses nations, uni par une même vision : proclamer l'Évangile avec puissance et accompagner chaque personne vers une transformation complète. Perez Chapel France s'inscrit pleinement dans cet héritage, au service de la communauté de Pantin et au-delà.",
}

export type NavLink = { label: string; href: string }

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Notre Pasteur", href: "/notre-pasteur" },
  { label: "Fondateurs", href: "/fondateurs" },
  { label: "Notre équipe", href: "/notre-equipe" },
  { label: "Sermons", href: "/sermons" },
  { label: "Galerie", href: "/galerie" },
  { label: "Événements", href: "/evenements" },
  { label: "Contact", href: "/contact" },
]

export const MINISTRIES = [
  {
    id: "etude-biblique",
    title: "Étude biblique",
    description:
      "Des enseignements approfondis de la Parole de Dieu pour fortifier votre foi et votre marche quotidienne.",
    icon: "BookOpen",
  },
  {
    id: "evangelisation",
    title: "Évangélisation",
    description:
      "Annoncer la Bonne Nouvelle dans notre ville et au-delà, accompagnée de signes et de prodiges.",
    icon: "Megaphone",
  },
  {
    id: "culturel",
    title: "Culturel",
    description:
      "Valoriser les talents et les cultures au service de la communauté et du Royaume de Dieu.",
    icon: "Globe",
  },
  {
    id: "chorale",
    title: "Chorale",
    description:
      "Louer et adorer Dieu par le chant, conduire l'assemblée dans une atmosphère de présence divine.",
    icon: "Music",
  },
]

export const STATS = [
  { label: "Membres", value: 850, suffix: "+" },
  { label: "Années de présence", value: 12, suffix: "" },
  { label: "Ministères", value: 4, suffix: "" },
  { label: "Nations touchées", value: 80, suffix: "+" },
]

export const VALUES = [
  {
    title: "La Parole",
    description:
      "Nous croyons en l'autorité de la Bible comme fondement de toute vie et de tout enseignement.",
  },
  {
    title: "La Prière",
    description:
      "Nous cultivons une vie de prière intense qui ouvre la voie à la puissance et à la transformation.",
  },
  {
    title: "La Communauté",
    description:
      "Nous formons une famille spirituelle où chacun est accueilli, accompagné et édifié.",
  },
  {
    title: "La Transformation",
    description:
      "Nous œuvrons pour le bien-être spirituel, physique, économique et émotionnel des générations.",
  },
]

export type Sermon = {
  id: string
  title: string
  speaker: string
  date: string
  category: string
  duration: string
  youtubeUrl: string
  description: string
}

export const SERMONS: Sermon[] = [
  {
    id: "s1",
    title: "Percer dans la prière",
    speaker: "Ancienne Priscille Grâce",
    date: "2026-05-24",
    category: "Prière",
    duration: "48 min",
    youtubeUrl: "https://www.youtube.com/",
    description:
      "Une exhortation puissante sur la persévérance dans la prière et la percée spirituelle.",
  },
  {
    id: "s2",
    title: "Transformer les générations",
    speaker: "Ancienne Priscille Grâce",
    date: "2026-05-10",
    category: "Vision",
    duration: "52 min",
    youtubeUrl: "https://www.youtube.com/",
    description:
      "Comprendre l'appel de notre église à impacter durablement les familles et les générations.",
  },
  {
    id: "s3",
    title: "La foi qui déplace les montagnes",
    speaker: "Archevêque Charles Agyinasare",
    date: "2026-04-26",
    category: "Foi",
    duration: "61 min",
    youtubeUrl: "https://www.youtube.com/",
    description:
      "Un enseignement profond sur la nature de la foi et son rôle dans les miracles.",
  },
  {
    id: "s4",
    title: "Vivre par l'Esprit",
    speaker: "Ancienne Priscille Grâce",
    date: "2026-04-12",
    category: "Vie chrétienne",
    duration: "45 min",
    youtubeUrl: "https://www.youtube.com/",
    description:
      "Marcher quotidiennement sous la conduite du Saint-Esprit dans toutes nos décisions.",
  },
  {
    id: "s5",
    title: "Le pouvoir de l'adoration",
    speaker: "Pasteur invité",
    date: "2026-03-29",
    category: "Adoration",
    duration: "39 min",
    youtubeUrl: "https://www.youtube.com/",
    description:
      "Découvrir comment l'adoration transforme l'atmosphère et nous rapproche de Dieu.",
  },
  {
    id: "s6",
    title: "Une espérance vivante",
    speaker: "Ancienne Priscille Grâce",
    date: "2026-03-15",
    category: "Foi",
    duration: "50 min",
    youtubeUrl: "https://www.youtube.com/",
    description: "Garder l'espérance ferme au milieu des épreuves de la vie.",
  },
]

export const SERMON_CATEGORIES = [
  "Toutes",
  "Prière",
  "Vision",
  "Foi",
  "Vie chrétienne",
  "Adoration",
]

export type ChurchEvent = {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: string
  description: string
  image: string
}

export const EVENTS: ChurchEvent[] = [
  {
    id: "e1",
    title: "Convention annuelle « Percée 2026 »",
    date: "2026-06-20",
    time: "18:00",
    location: "45 rue Delizy, Pantin",
    category: "Convention",
    description:
      "Trois jours de prière, d'enseignement et d'adoration pour vivre une percée spirituelle collective. Invités spéciaux et moments d'intercession.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "e2",
    title: "Nuit de prière",
    date: "2026-06-06",
    time: "22:00",
    location: "45 rue Delizy, Pantin",
    category: "Prière",
    description:
      "Une nuit entière consacrée à l'intercession et à la recherche de la face de Dieu pour la ville et les nations.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "e3",
    title: "Sortie d'évangélisation",
    date: "2026-06-14",
    time: "10:00",
    location: "Centre-ville de Pantin",
    category: "Évangélisation",
    description:
      "Sortie mensuelle pour annoncer la Bonne Nouvelle dans les rues de Pantin et rencontrer la communauté.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "e4",
    title: "Concert de louange",
    date: "2026-07-05",
    time: "16:00",
    location: "45 rue Delizy, Pantin",
    category: "Louange",
    description:
      "Un après-midi de louange et d'adoration animé par la chorale et des artistes invités.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export const WEEKLY_PROGRAM = [
  {
    day: "Lundi au vendredi",
    title: "Prière matinale",
    time: "06:00 — 07:00",
  },
  {
    day: "Mercredi",
    title: "Culte d'enseignement",
    time: "19:00 — 21:00",
  },
  {
    day: "Dimanche",
    title: "Culte de célébration",
    time: "10:00 — 13:00",
  },
  {
    day: "Dernier samedi du mois",
    title: "Sortie d'évangélisation",
    time: "10:00 — 13:00",
  },
]

export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
}

export const TEAM: TeamMember[] = [
  { id: "t1", name: "Ancienne Priscille Grâce", role: "Pasteure principale", image: "/placeholder.svg?height=600&width=800" },
  { id: "t2", name: "Frère Emmanuel K.", role: "Responsable Évangélisation", image: "/placeholder.svg?height=600&width=800" },
  { id: "t3", name: "Sœur Esther M.", role: "Responsable Chorale", image: "/placeholder.svg?height=600&width=800" },
  { id: "t4", name: "Frère David T.", role: "Responsable Étude biblique", image: "/placeholder.svg?height=600&width=800" },
  { id: "t5", name: "Sœur Naomi B.", role: "Responsable Accueil", image: "/placeholder.svg?height=600&width=800" },
  { id: "t6", name: "Frère Samuel L.", role: "Responsable Culturel", image: "/placeholder.svg?height=600&width=800" },
  { id: "t7", name: "Sœur Rachel O.", role: "Responsable Jeunesse", image: "/placeholder.svg?height=600&width=800" },
  { id: "t8", name: "Frère Joseph N.", role: "Diacre", image: "/placeholder.svg?height=600&width=800" },
]

export const GALLERY_ALBUMS = [
  "Tous",
  "Cultes",
  "Événements",
  "Évangélisation",
  "Communauté",
]

export type GalleryPhoto = {
  id: string
  src: string
  album: string
  alt: string
}

export const GALLERY: GalleryPhoto[] = [
  { id: "g1", src: "/placeholder.svg?height=600&width=800", album: "Cultes", alt: "Culte du dimanche" },
  { id: "g2", src: "/placeholder.svg?height=600&width=800", album: "Cultes", alt: "Chorale en louange" },
  { id: "g3", src: "/placeholder.svg?height=600&width=800", album: "Événements", alt: "Convention annuelle" },
  { id: "g4", src: "/placeholder.svg?height=600&width=800", album: "Évangélisation", alt: "Sortie d'évangélisation" },
  { id: "g5", src: "/placeholder.svg?height=600&width=800", album: "Communauté", alt: "Repas communautaire" },
  { id: "g6", src: "/placeholder.svg?height=600&width=800", album: "Cultes", alt: "Prédication" },
  { id: "g7", src: "/placeholder.svg?height=600&width=800", album: "Événements", alt: "Cérémonie de baptême" },
  { id: "g8", src: "/placeholder.svg?height=600&width=800", album: "Communauté", alt: "Groupe de jeunes" },
  { id: "g9", src: "/placeholder.svg?height=600&width=800", album: "Événements", alt: "Nuit de prière" },
  { id: "g10", src: "/placeholder.svg?height=600&width=800", album: "Évangélisation", alt: "Action communautaire" },
  { id: "g11", src: "/placeholder.svg?height=600&width=800", album: "Cultes", alt: "Groupe de louange" },
  { id: "g12", src: "/placeholder.svg?height=600&width=800", album: "Communauté", alt: "Famille de l'église" },
]
