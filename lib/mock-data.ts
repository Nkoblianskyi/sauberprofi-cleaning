export interface Service {
  id: string
  title: string
  description: string
  shortDescription: string
  features: string[]
  icon: string
  category: "buero" | "haushalt" | "spezial" | "industrie"
  duration?: string
  frequency?: string[]
}

export interface Testimonial {
  id: string
  name: string
  company?: string
  rating: number
  text: string
  service: string
  location: string
}

export interface Tip {
  id: string
  title: string
  category: string
  content: string
  readTime: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  founded: string
  employees: string
  experience: string
  certifications: string[]
  address: {
    street: string
    city: string
    postal: string
    country: string
  }
  contact: {
    phone: string
    email: string
    hours: string
  }
  social: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

export const companyInfo: CompanyInfo = {
  name: "SauberProfi",
  tagline: "Ihr vertrauensvoller Partner für professionelle Reinigung",
  description:
    "Seit über 15 Jahren bieten wir erstklassige Reinigungsdienstleistungen in ganz Deutschland. Unser erfahrenes Team sorgt für makellose Sauberkeit in Büros, Haushalten und Industrieanlagen.",
  founded: "2009",
  employees: "150+",
  experience: "15+ Jahre",
  certifications: ["ISO 9001:2015", "ISO 14001:2015", "HACCP", "Berufsgenossenschaft"],
  address: {
    street: "Businesspark Nederland 12",
    city: "Amsterdam",
    postal: "1101 AA",
    country: "Niederlande",
  },
  contact: {
    phone: "+31 20 699 1546",
    email: "info@sauberprofi.online",
    hours: "Mo-Fr: 7:00-19:00, Sa: 8:00-16:00",
  },
  social: {
    facebook: "https://facebook.com/sauberprofi",
    instagram: "https://instagram.com/sauberprofi",
    linkedin: "https://linkedin.com/company/sauberprofi",
  },
}

export const services: Service[] = [
  {
    id: "bueroreinigung",
    title: "Büroreinigung",
    shortDescription: "Professionelle Reinigung für Büros und Geschäftsräume",
    description:
      "Unsere Büroreinigung sorgt für eine saubere und hygienische Arbeitsumgebung. Wir reinigen Büros, Konferenzräume, Empfangsbereiche und Sanitäranlagen nach höchsten Standards.",
    features: [
      "Tägliche, wöchentliche oder monatliche Reinigung",
      "Staubsaugen und Wischen aller Böden",
      "Reinigung von Schreibtischen und Arbeitsflächen",
      "Papierkorb-Entleerung",
      "Sanitärreinigung und -desinfektion",
      "Fensterreinigung (innen)",
      "Küchen- und Pausenraumreinigung",
    ],
    icon: "building",
    category: "buero",
    duration: "1-4 Stunden",
    frequency: ["Täglich", "Wöchentlich", "Monatlich"],
  },
  {
    id: "haushaltsreinigung",
    title: "Haushaltsreinigung",
    shortDescription: "Gründliche Reinigung für Ihr Zuhause",
    description:
      "Entspannen Sie sich, während wir Ihr Zuhause zum Strahlen bringen. Unsere Haushaltsreinigung umfasst alle Räume und wird nach Ihren individuellen Wünschen durchgeführt.",
    features: [
      "Staubsaugen und Wischen aller Böden",
      "Badezimmer komplett reinigen",
      "Küche gründlich säubern",
      "Staubwischen aller Oberflächen",
      "Betten machen",
      "Mülleimer leeren",
      "Individuelle Zusatzwünsche",
    ],
    icon: "home",
    category: "haushalt",
    duration: "2-6 Stunden",
    frequency: ["Wöchentlich", "14-täglich", "Monatlich", "Einmalig"],
  },
  {
    id: "fensterreinigung",
    title: "Fensterreinigung",
    shortDescription: "Kristallklare Fenster für mehr Licht",
    description:
      "Professionelle Fensterreinigung für Privat- und Geschäftskunden. Wir sorgen für streifenfreie Sauberkeit und mehr Lichteinfall in Ihren Räumen.",
    features: [
      "Innen- und Außenreinigung",
      "Rahmen und Fensterbänke",
      "Streifenfreie Ergebnisse",
      "Auch schwer erreichbare Fenster",
      "Umweltfreundliche Reinigungsmittel",
      "Regelmäßige Termine möglich",
    ],
    icon: "window",
    category: "spezial",
    duration: "30 Min - 3 Stunden",
    frequency: ["Monatlich", "Quartalsweise", "Halbjährlich", "Einmalig"],
  },
  {
    id: "teppichreinigung",
    title: "Teppichreinigung",
    shortDescription: "Tiefenreinigung für alle Teppicharten",
    description:
      "Professionelle Teppichreinigung mit modernster Technik. Wir entfernen Flecken, Gerüche und Allergene für ein gesundes Raumklima.",
    features: [
      "Tiefenreinigung mit Heißwasser-Extraktion",
      "Fleckenbehandlung",
      "Geruchsneutralisation",
      "Allergen-Entfernung",
      "Schnelle Trocknung",
      "Alle Teppicharten",
      "Vor-Ort-Service",
    ],
    icon: "carpet",
    category: "spezial",
    duration: "1-4 Stunden",
    frequency: ["Halbjährlich", "Jährlich", "Nach Bedarf"],
  },
  {
    id: "grundreinigung",
    title: "Grundreinigung",
    shortDescription: "Intensive Reinigung für den perfekten Start",
    description:
      "Unsere Grundreinigung ist ideal für Umzüge, Renovierungen oder als Frühjahrsputz. Wir reinigen jeden Winkel gründlich und hinterlassen makellose Sauberkeit.",
    features: [
      "Komplette Wohnung/Büro",
      "Alle Oberflächen gründlich",
      "Schränke innen und außen",
      "Heizkörper und Lichtschalter",
      "Türen und Zargen",
      "Intensive Badreinigung",
      "Küche komplett entfetten",
    ],
    icon: "sparkles",
    category: "spezial",
    duration: "4-12 Stunden",
    frequency: ["Einmalig", "Jährlich", "Nach Umzug"],
  },
  {
    id: "industriereinigung",
    title: "Industriereinigung",
    shortDescription: "Spezialisierte Reinigung für Industrieanlagen",
    description:
      "Professionelle Reinigung von Produktionsstätten, Lagerhallen und Industrieanlagen. Wir erfüllen alle Hygiene- und Sicherheitsstandards.",
    features: [
      "Produktionshallen",
      "Lagerbereiche",
      "Maschinen und Anlagen",
      "Hochdruckreinigung",
      "Spezialreinigungsmittel",
      "Sicherheitsstandards",
      "24/7 Service möglich",
    ],
    icon: "factory",
    category: "industrie",
    duration: "4-24 Stunden",
    frequency: ["Täglich", "Wöchentlich", "Nach Vereinbarung"],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Michael Weber",
    company: "Weber & Partner Rechtsanwälte",
    rating: 5,
    text: "SauberProfi reinigt unsere Kanzlei seit 3 Jahren. Die Qualität ist ausgezeichnet und das Team sehr zuverlässig. Unsere Mandanten fühlen sich in den sauberen Räumen sichtlich wohl.",
    service: "Büroreinigung",
    location: "München",
  },
  {
    id: "2",
    name: "Sandra Müller",
    rating: 5,
    text: "Endlich habe ich mehr Zeit für meine Familie! Die Haushaltsreinigung ist gründlich und das Personal sehr freundlich. Kann ich nur weiterempfehlen.",
    service: "Haushaltsreinigung",
    location: "Hamburg",
  },
  {
    id: "3",
    name: "Thomas Schneider",
    company: "TechStart GmbH",
    rating: 5,
    text: "Nach unserem Umzug hat SauberProfi eine fantastische Grundreinigung gemacht. Jeder Winkel war perfekt sauber. Sehr professionell!",
    service: "Grundreinigung",
    location: "Berlin",
  },
  {
    id: "4",
    name: "Maria Rodriguez",
    rating: 4,
    text: "Die Fensterreinigung war ausgezeichnet. Alle Fenster sind streifenfrei und kristallklar. Pünktlich und sauber gearbeitet.",
    service: "Fensterreinigung",
    location: "Köln",
  },
  {
    id: "5",
    name: "Frank Bauer",
    company: "Bauer Maschinenbau",
    rating: 5,
    text: "Unsere Produktionshalle wird regelmäßig von SauberProfi gereinigt. Alle Sicherheitsstandards werden eingehalten. Top Service!",
    service: "Industriereinigung",
    location: "Stuttgart",
  },
]

export const tips: Tip[] = [
  {
    id: "1",
    title: "5 Tipps für saubere Büros im Winter",
    category: "Büro",
    content:
      "Im Winter bringen Mitarbeiter oft Schmutz und Feuchtigkeit ins Büro. Platzieren Sie Fußmatten an allen Eingängen, sorgen Sie für regelmäßiges Lüften und reinigen Sie Heizkörper häufiger.",
    readTime: "3 Min",
  },
  {
    id: "2",
    title: "Natürliche Reinigungsmittel für den Haushalt",
    category: "Haushalt",
    content:
      "Essig, Zitronensäure und Natron sind wahre Wundermittel. Essig entfernt Kalkflecken, Zitronensäure reinigt Armaturen und Natron neutralisiert Gerüche im Kühlschrank.",
    readTime: "4 Min",
  },
  {
    id: "3",
    title: "Teppiche richtig pflegen",
    category: "Teppiche",
    content:
      "Staubsaugen Sie Teppiche mindestens zweimal pro Woche. Behandeln Sie Flecken sofort mit kaltem Wasser und tupfen Sie, anstatt zu reiben. Eine professionelle Reinigung alle 12-18 Monate verlängert die Lebensdauer.",
    readTime: "5 Min",
  },
  {
    id: "4",
    title: "Fenster streifenfrei putzen",
    category: "Fenster",
    content:
      "Putzen Sie Fenster nie bei direkter Sonneneinstrahlung. Verwenden Sie destilliertes Wasser und einen Gummiwischer. Arbeiten Sie von oben nach unten und trocknen Sie die Ränder mit einem fusselfreien Tuch.",
    readTime: "3 Min",
  },
]

export const advantages = [
  {
    id: "1",
    title: "15+ Jahre Erfahrung",
    description: "Seit 2009 sorgen wir für makellose Sauberkeit in ganz Deutschland",
    icon: "award",
  },
  {
    id: "2",
    title: "Zertifizierte Qualität",
    description: "ISO 9001:2015 und ISO 14001:2015 zertifiziert für höchste Standards",
    icon: "certificate",
  },
  {
    id: "3",
    title: "Umweltfreundlich",
    description: "Wir verwenden ausschließlich ökologische Reinigungsmittel",
    icon: "leaf",
  },
  {
    id: "4",
    title: "Versichert & Bonded",
    description: "Vollständig versichert für Ihre Sicherheit und unseren Schutz",
    icon: "shield",
  },
  {
    id: "5",
    title: "Flexible Termine",
    description: "Reinigung nach Ihrem Zeitplan - auch außerhalb der Geschäftszeiten",
    icon: "clock",
  },
  {
    id: "6",
    title: "Zufriedenheitsgarantie",
    description: "100% Zufriedenheitsgarantie oder wir kommen kostenlos zurück",
    icon: "thumbs-up",
  },
]
