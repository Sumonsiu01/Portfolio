import {
  NameLogo,
  math,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  icpc2020,
  icpc2024,
  Hack,
  icpc,
  iupc,
  gemini,
  ride
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "NextJs Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  /* {
    name: "Node JS",
    icon: nodejs,
  }, */
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 /*  {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
  {
    title: "ICPC Dhaka Regional",
    company_name: " ",
    icon: icpc2020,
    iconBg: "#383E56",
    date: "February-2020(ranked-115th)",
    points: [
      "It was my first ICPC When I was in first year of my university Life.We solve 2 problem & ranked 115th",
    ],
  },
  {
    title: "ICPC Dhaka Regional",
    company_name: " ",
    icon: icpc,
    iconBg: "#E6DEDD",
    date: "December-2024(ranked-91th)",
    points: [
      "My last ICPC.WE solved there 3 problems & ranked 91th ",
    ],
  },
  {
    title: "MU IUPC",
    company_name: " ",
    icon: iupc,
    iconBg: "#383E56",
    date: "November-2024(ranked 7th)",
    points: [
      "This ICPC was took place in Sylhet & We Ranked 7th.We solved 5 Problems",
    ],
  },
  {
    title: "HackerRank",
    company_name: " ",
    icon: Hack,
    iconBg: "#E6DEDD",
    date: "5* rated",
    points: [
      "I start there problem solving from the begining of my University Life.By the grace of Allmighty I solved there a handsome number of problem",
    ],
  },
  {
    title: "Intra University Math Olympiad",
    company_name: " ",
    icon: math,
    iconBg: "#E6DEDD",
    date: "2nd runners-up",
    points: [
      "I am a math loving person.Always try to perticipate in several olympiad",
    ],
  },
];

const testimonials = [
 /*  */
];

const projects = [
  {
    name: "Gemini 2.0",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Context Api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ride Sharing Application",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ride,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
