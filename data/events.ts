import type { KewEvent } from "@/types/events";

/**
 * Centralized event data for /events and /events/[slug].
 *
 * To add an event, append an entry below. Place its photography in
 * /public/images/events/<slug>/ (WebP preferred) and reference it by path.
 * Slugs must be unique and URL-safe.
 */
export const events: KewEvent[] = [
  {
    id: "evt-ceematech-2019",
    slug: "ceematech-2019",
    title: "CEEMATECH-18",
    category: "industrial-exhibition",
    startDate: "2019-02-08",
    endDate: "2019-02-10",
    location: "Pune",
    venue: "Auto Cluster, Chinchwad",
    shortDescription:
      "An electrical-industry exhibition connecting consulting electrical engineers, contractors, suppliers and manufacturers.",
    introduction:
      "CEEMATECH 2019 was organized by CEEAMA, the Consulting Electrical Engineers Association of Maharashtra, as a platform for electrical industry professionals to connect and collaborate.",
    description: [
      "The event brought together consulting electrical engineers, contractors, suppliers and manufacturers from across the electrical industry. It served as a comprehensive showcase for electrical products, technologies and solutions.",
      "CEEMATECH provided opportunities for technical discussions, product demonstrations and networking among industry professionals working in power generation, transmission and distribution sectors.",
    ],
    involvement: [
      "KEW Electricals participated in CEEMATECH-18, showcasing its range of switchgear, fusegear and power distribution products to consulting engineers and industry professionals.",
      "The exhibition stand featured product displays and technical consultations with visitors interested in KEW's electrical protection and distribution solutions.",
    ],
    participation: [
      { label: "Format", value: "Exhibition stand" },
      { label: "Product focus", value: "Switchgear and fusegear" },
    ],
    coverImage: {
      src: "/images/factory-floor.webp",
      alt: "KEW exhibition stand at CEEMATECH-18 with switchgear and fusegear displays",
      position: "center 40%",
    },
    gallery: [
      {
        src: "/images/factory-floor.webp",
        alt: "KEW exhibition stand at CEEMATECH-18",
        caption: "KEW stand at CEEMATECH-18",
      },
      {
        src: "/images/team-event.webp",
        alt: "Product display boards at CEEMATECH-18",
        caption: "Product display",
      },
      {
        src: "/images/industrial-hero.webp",
        alt: "Switchgear products showcased",
        caption: "Switchgear range",
      },
    ],
    highlights: [
      {
        type: "Industry interaction",
        title: "Consulting engineer meetings",
        description:
          "Direct engagement with consulting electrical engineers from Maharashtra and across India.",
      },
      {
        type: "Product showcase",
        title: "Complete product range",
        description:
          "Display of KEW's switchgear, fusegear and distribution board solutions.",
      },
    ],
  },
  {
    id: "evt-elecrama-2014",
    slug: "elecrama-2014",
    title: "ELECRAMA-14",
    category: "international-exhibition",
    startDate: "2014-01-08",
    endDate: "2014-01-12",
    location: "Bengaluru",
    venue: "Bangalore International Exhibition Centre",
    shortDescription:
      "IEEMA's flagship exhibition for the electrical and industrial electronics industry, bringing together manufacturers, suppliers, utilities and contractors.",
    introduction:
      "ELECRAMA is IEEMA's flagship exhibition and one of Asia's largest events for the electrical and industrial electronics industry. The 2014 edition was held at the Bangalore International Exhibition Centre.",
    description: [
      "ELECRAMA brings together manufacturers, suppliers, utilities, contractors and other power-sector professionals from across the globe. It serves as a comprehensive platform for showcasing developments in electricity generation, transmission, distribution and related technologies.",
      "The exhibition features electrical equipment, power systems, industrial electronics and emerging technologies, making it a key event for industry networking and business development.",
    ],
    involvement: [
      "KEW Electricals participated in ELECRAMA-14, presenting its range of electrical protection and distribution products to an international audience of industry professionals.",
      "The event provided opportunities to connect with utilities, contractors and specifiers from India and abroad, showcasing KEW's commitment to quality and innovation in switchgear solutions.",
    ],
    participation: [
      { label: "Format", value: "International exhibition" },
      { label: "Product focus", value: "Switchgear and distribution" },
    ],
    coverImage: {
      src: "/images/team-event.webp",
      alt: "KEW exhibition stand at ELECRAMA-14",
      position: "center 70%",
    },
    gallery: [
      {
        src: "/images/team-event.webp",
        alt: "KEW stand at ELECRAMA-14",
        caption: "ELECRAMA-14 exhibition",
      },
      {
        src: "/images/factory-floor.webp",
        alt: "Product displays at ELECRAMA-14",
        caption: "Product showcase",
      },
      {
        src: "/images/industrial-hero.webp",
        alt: "Switchgear products",
        caption: "Switchgear range",
      },
    ],
    highlights: [
      {
        type: "Industry interaction",
        title: "International networking",
        description:
          "Connections with utilities and contractors from multiple countries.",
      },
      {
        type: "Product showcase",
        title: "Complete product portfolio",
        description:
          "Display of KEW's full range of electrical protection solutions.",
      },
    ],
  },
  {
    id: "evt-elecrama-2016",
    slug: "elecrama-2016",
    title: "ELECRAMA-16",
    category: "international-exhibition",
    startDate: "2016-02-13",
    endDate: "2016-02-17",
    location: "Bengaluru",
    venue: "Bangalore International Exhibition Centre",
    shortDescription:
      "Showcasing developments in electricity generation, transmission, distribution, electrical equipment and power systems.",
    introduction:
      "ELECRAMA 2016 was held at the Bangalore International Exhibition Centre from 13-17 February. The exhibition showcased the latest developments in electricity generation, transmission, distribution and electrical equipment.",
    description: [
      "The event featured electrical equipment, power systems and related technologies, serving as an international networking and business platform for electrical-industry participants. It brought together manufacturers, suppliers, utilities and contractors from across the globe.",
      "ELECRAMA 2016 focused on emerging trends in power generation, transmission and distribution, with special emphasis on power electronics, automation and energy technologies.",
    ],
    involvement: [
      "KEW Electricals participated in ELECRAMA-16, showcasing its advanced switchgear, fusegear and power distribution products to industry professionals and international visitors.",
      "The exhibition stand featured product demonstrations and technical discussions with utilities, contractors and specifiers interested in KEW's electrical solutions.",
    ],
    participation: [
      { label: "Format", value: "International exhibition" },
      { label: "Product focus", value: "Switchgear and distribution" },
    ],
    coverImage: {
      src: "/images/industrial-hero.webp",
      alt: "KEW exhibition stand at ELECRAMA-16",
    },
    gallery: [
      {
        src: "/images/industrial-hero.webp",
        alt: "KEW stand at ELECRAMA-16",
        caption: "ELECRAMA-16 exhibition",
      },
      {
        src: "/images/product-focus.webp",
        alt: "Switchgear products on display",
        caption: "Product display",
      },
      {
        src: "/images/factory-floor.webp",
        alt: "Exhibition hall overview",
        caption: "Exhibition view",
      },
    ],
    highlights: [
      {
        type: "Industry interaction",
        title: "Global networking",
        description:
          "Engagement with international utilities and power sector professionals.",
      },
      {
        type: "Product showcase",
        title: "Advanced switchgear solutions",
        description:
          "Display of latest KEW switchgear and distribution technologies.",
      },
    ],
  },
  {
    id: "evt-elecrama-2020",
    slug: "elecrama-2020",
    title: "ELECRAMA-2020",
    category: "international-exhibition",
    startDate: "2020-01-18",
    endDate: "2020-01-22",
    location: "Greater Noida",
    venue: "India Expo Mart, Greater Noida, NCR Delhi",
    shortDescription:
      "The 14th edition covering power generation, transmission, distribution, power electronics, renewable energy, electric mobility, energy storage and automation.",
    introduction:
      "ELECRAMA 2020, the 14th edition of this flagship exhibition, was held from 18-22 January at India Expo Mart, Greater Noida, NCR Delhi. It covered the entire spectrum of the electrical industry.",
    description: [
      "The event focused on power generation, transmission, distribution, power electronics, renewable energy, electric mobility, energy storage and automation. It brought together manufacturers, suppliers, utilities and professionals from across the power sector.",
      "Concurrent initiatives included World Utility Summit, eTechNxt, ChangeXchange, Rail Urja and other industry pavilions, making it a comprehensive platform for knowledge exchange and business development.",
    ],
    involvement: [
      "KEW Electricals participated in ELECRAMA 2020, presenting its complete range of switchgear, fusegear and power distribution products to utilities, contractors and industry professionals.",
      "The exhibition stand featured product displays, technical consultations and demonstrations of KEW's latest electrical protection and distribution solutions.",
    ],
    participation: [
      { label: "Format", value: "International exhibition" },
      { label: "Product focus", value: "Switchgear and distribution" },
    ],
    coverImage: {
      src: "/images/factory-floor.webp",
      alt: "KEW exhibition stand at ELECRAMA 2020",
      position: "center 40%",
    },
    gallery: [
      {
        src: "/images/factory-floor.webp",
        alt: "KEW stand at ELECRAMA 2020",
        caption: "ELECRAMA 2020 exhibition",
      },
      {
        src: "/images/team-event.webp",
        alt: "Product displays",
        caption: "Product showcase",
      },
      {
        src: "/images/industrial-hero.webp",
        alt: "Switchgear range",
        caption: "Switchgear products",
      },
    ],
    highlights: [
      {
        type: "Industry interaction",
        title: "Utility sector engagement",
        description:
          "Meetings with power utilities and distribution companies.",
      },
      {
        type: "Product showcase",
        title: "Complete product ecosystem",
        description:
          "Display of KEW's full range of electrical protection and distribution solutions.",
      },
    ],
  },
  {
    id: "evt-elecrama-2018",
    slug: "elecrama-2018",
    title: "ELECRAMA 2018",
    category: "international-exhibition",
    startDate: "2018-03-10",
    endDate: "2018-03-14",
    location: "Greater Noida, Delhi NCR",
    venue: "India Expo Mart, Greater Noida",
    shortDescription:
      "The 13th edition bringing together manufacturers and professionals across the electrical industry.",
    introduction:
      "ELECRAMA 2018, the 13th edition, was held from 10-14 March at India Expo Mart, Greater Noida, Delhi NCR. It brought together manufacturers and professionals across the electrical industry.",
    description: [
      "The event focused on generation, transmission, distribution, power electronics, renewable energy, automation and energy technologies. It provided opportunities for industry networking, knowledge exchange and business development.",
      "ELECRAMA 2018 served as a platform for manufacturers to showcase their latest products and technologies to utilities, contractors, specifiers and other industry professionals from India and abroad.",
    ],
    involvement: [
      "KEW Electricals participated in ELECRAMA 2018, showcasing its switchgear, fusegear and power distribution products to electrical industry professionals and international visitors.",
      "The exhibition stand featured product displays and technical discussions with utilities, contractors and specifiers interested in KEW's electrical solutions.",
    ],
    participation: [
      { label: "Format", value: "International exhibition" },
      { label: "Product focus", value: "Switchgear and distribution" },
    ],
    coverImage: {
      src: "/images/team-event.webp",
      alt: "KEW exhibition stand at ELECRAMA 2018",
      position: "center 70%",
    },
    gallery: [
      {
        src: "/images/team-event.webp",
        alt: "KEW stand at ELECRAMA 2018",
        caption: "ELECRAMA 2018 exhibition",
      },
      {
        src: "/images/factory-floor.webp",
        alt: "Product displays",
        caption: "Product showcase",
      },
      {
        src: "/images/industrial-hero.webp",
        alt: "Switchgear products",
        caption: "Switchgear range",
      },
    ],
    highlights: [
      {
        type: "Industry interaction",
        title: "Professional networking",
        description:
          "Engagement with electrical industry professionals and specifiers.",
      },
      {
        type: "Product showcase",
        title: "Comprehensive product range",
        description:
          "Display of KEW's switchgear and distribution solutions.",
      },
    ],
  },
  {
    id: "evt-elecrama-2012",
    slug: "elecrama-2012",
    title: "ELECRAMA-12",
    category: "international-exhibition",
    startDate: "2012-01-18",
    endDate: "2012-01-22",
    location: "Mumbai",
    venue: "Bombay Exhibition Centre",
    shortDescription:
      "The 10th edition, a major platform for the power transmission and distribution industry.",
    introduction:
      "ELECRAMA 2012, the 10th edition, was held from 18-22 January at Bombay Exhibition Centre, Mumbai. It was a major platform for the power transmission and distribution industry.",
    description: [
      "The event featured electrical and industrial electronics equipment, industry discussions, networking and business opportunities. It brought together manufacturers, industry leaders, utilities and international participants.",
      "ELECRAMA-12 served as a key platform for showcasing products and technologies in power transmission, distribution and related sectors, facilitating business development and knowledge exchange.",
    ],
    involvement: [
      "KEW Electricals participated in ELECRAMA-12, presenting its switchgear, fusegear and power distribution products to industry professionals, utilities and international visitors.",
      "The exhibition stand featured product displays and technical consultations with contractors, specifiers and industry leaders interested in KEW's electrical solutions.",
    ],
    participation: [
      { label: "Format", value: "International exhibition" },
      { label: "Product focus", value: "Switchgear and distribution" },
    ],
    coverImage: {
      src: "/images/industrial-hero.webp",
      alt: "KEW exhibition stand at ELECRAMA-12",
    },
    gallery: [
      {
        src: "/images/industrial-hero.webp",
        alt: "KEW stand at ELECRAMA-12",
        caption: "ELECRAMA-12 exhibition",
      },
      {
        src: "/images/product-focus.webp",
        alt: "Product displays",
        caption: "Product showcase",
      },
      {
        src: "/images/factory-floor.webp",
        alt: "Exhibition hall",
        caption: "Exhibition view",
      },
    ],
    highlights: [
      {
        type: "Industry interaction",
        title: "Industry leader meetings",
        description:
          "Engagement with industry leaders and utility representatives.",
      },
      {
        type: "Product showcase",
        title: "Power distribution solutions",
        description:
          "Display of KEW's switchgear and distribution products.",
      },
    ],
  },
  {
    id: "evt-iess-2012",
    slug: "iess",
    title: "IESS – International Engineering Sourcing Show",
    category: "engineering-exhibition",
    startDate: "2012-03-22",
    endDate: "2012-03-24",
    location: "Mumbai",
    venue: "Bombay Exhibition Centre",
    shortDescription:
      "An international engineering sourcing platform connecting Indian engineering manufacturers with international buyers.",
    introduction:
      "The first IESS edition was held from 22-24 March 2012 at Bombay Exhibition Centre, Mumbai. It was organized as an international engineering sourcing platform.",
    description: [
      "IESS connected Indian engineering manufacturers with international buyers, sourcing professionals and industry representatives. The exhibition promoted engineering exports, manufacturing capabilities and international business opportunities.",
      "The event served as a bridge between Indian manufacturers and global markets, facilitating partnerships and showcasing India's engineering prowess across various sectors.",
    ],
    involvement: [
      "KEW Electricals participated in IESS 2012, showcasing its engineering and manufacturing capabilities in switchgear and electrical distribution products to international buyers and sourcing professionals.",
      "The exhibition stand featured product displays and discussions with international buyers interested in KEW's electrical engineering solutions and manufacturing quality.",
    ],
    participation: [
      { label: "Format", value: "Engineering exhibition" },
      { label: "Product focus", value: "Switchgear and distribution" },
    ],
    coverImage: {
      src: "/images/factory-floor.webp",
      alt: "KEW exhibition stand at IESS 2012",
      position: "center 40%",
    },
    gallery: [
      {
        src: "/images/factory-floor.webp",
        alt: "KEW stand at IESS 2012",
        caption: "IESS 2012 exhibition",
      },
      {
        src: "/images/team-event.webp",
        alt: "Product displays",
        caption: "Product showcase",
      },
      {
        src: "/images/industrial-hero.webp",
        alt: "Engineering products",
        caption: "Engineering solutions",
      },
    ],
    highlights: [
      {
        type: "Industry interaction",
        title: "International buyer meetings",
        description:
          "Engagement with international buyers and sourcing professionals.",
      },
      {
        type: "Product showcase",
        title: "Manufacturing capabilities",
        description:
          "Display of KEW's engineering and manufacturing excellence.",
      },
    ],
  },
];
