import {
  ecommerce,
  cp,
  mysql,
  Ci,
  django,
  NameLogo,
  math,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
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
  ride,
  NEUB,
  aston,
  docker,
  flask,
  drf
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
    title: "Flask Developer",
    icon: web,
  },
  {
    title: "Django Developer",
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
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "DRF",
    icon: drf,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "CI/CD",
    icon: Ci,
  },
  {
    name: "Docker",
    icon:docker,
  },
  /* {
    name: "MongoDB",
    icon: mongodb,
  }, */
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "git",
    icon: git,
  },
  /* {
    name: "figma",
    icon: figma,
  }, */
 /*  {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
  /* {
    
    title: "Aston University London",
    company_name: " ",
    icon: aston,
    iconBg: "#383E56",
    date: "October 2025",
    points: [
      "Cyber Security Management",
    ],
  }, */
 /*  {
    
    title: "North East University Bangladesh",
    company_name: " ",
    icon: NEUB,
    iconBg: "#383E56",
    date: "October 2020",
    points: [
      "Computer Science & Engineering",
    ],
  }, */
  {
    
    title: "ICPC Dhaka Regional",
    company_name: " ",
    icon: icpc2020,
    iconBg: "#383E56",
    date: "January-2020(ranked-115th)",
    points: [
      "First appearance in ICPC Dhaka Reginal & Solved 3 problems",
    ],
  },
  {
    title: "ICPC Dhaka Regional",
    company_name: " ",
    icon: icpc,
    iconBg: "#E6DEDD",
    date: "December-2024(ranked-91th)",
    points: [
      "Last appearance & My team solved there 3 problems & ranked 91th ",
    ],
  },
  {
    title: "MU IUPC",
    company_name: " ",
    icon: iupc,
    iconBg: "#383E56",
    date: "November-2024(ranked 7th)",
    points: [
      "Metropolitan University IUPC & We Ranked 7th.We solved 5 Problems",
    ],
  },
  {
    title: "HackerRank",
    company_name: " ",
    icon: Hack,
    iconBg: "#E6DEDD",
    date: "5* rated",
    points: [
      "I started problem-solving at the beginning of my university life and have solved a significant number of problems since then.",
    ],
  },
  {
    title: "Intra University Math Olympiad",
    company_name: " ",
    icon: math,
    iconBg: "#E6DEDD",
    date: "2nd runners-up",
    points: [
      "My last Math Olympiad",
    ],
  },
  {
    title: "Competitive Porgramming Instructor",
    company_name: " ",
    icon: cp,
    iconBg: "#E6DEDD",
    date: "Instructor",
    points: [
      "Led multiple programming workshops at my university, mentoring more than 5,000 students in problem solving, algorithms, and programming fundamentals.",
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
      "AI powered web application built with React and Context API.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Context Api", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: gemini,
    source_code_link: "https://github.com/Sumonsiu01/Gemini",
    live_link: "https://your-gemini-live-link.com",
  },
  {
    name: "Ride Sharing Application",
    description:
      "Full stack ride sharing platform with REST API integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: ride,
    source_code_link: "https://github.com/Sumonsiu01/RideSharing",
    live_link: "https://your-ride-live-link.com",
  },
  {
    name: "GMart",
    description:
      "Modern E-commerse Website using django & Reactjs",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Django", color: "blue-text-gradient" },
      { name: "Reactjs", color: "green-text-gradient" },
      { name: "DRF", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Sumonsiu01/E-Commerse",
    live_link: "https://your-tripguide-live-link.com",
  },
];
export { services, technologies, experiences, testimonials, projects };
