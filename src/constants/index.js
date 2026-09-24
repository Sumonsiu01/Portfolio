import {
  food,
  ehome,
  disease,
  redis,
  celery,
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
    name: "Github Action",
    icon: Ci,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Celery",
    icon: celery,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "ICPC Dhaka Regional",
    company_name: " ",
    icon: icpc2020,
    iconBg: "#383E56",
    date: "January-2020 (Ranked 115th)",
    points: [
      "First appearance in ICPC Dhaka Regional & Solved 2 problems",
    ],
  },
  {
    title: "ICPC Dhaka Regional",
    company_name: " ",
    icon: icpc,
    iconBg: "#E6DEDD",
    date: "December-2024 (Ranked 91st)",
    points: [
      "Second appearance in ICPC Dhaka Regional & Solved 4 problems",
    ],
  },
  {
    title: "MU IUPC",
    company_name: " ",
    icon: iupc,
    iconBg: "#383E56",
    date: "November-2024 (Ranked 7th)",
    points: [
      "Participated in the Intra University Programming Contest (IUPC) organized by Metropolitan University, securing 7th position.",
    ],
  },
  {
    title: "HackerRank",
    company_name: " ",
    icon: Hack,
    iconBg: "#E6DEDD",
    date: "5★ Rated",
    points: [
      "Achieved a 5-star rating on HackerRank, demonstrating algorithm design and problem-solving proficiency.",
    ],
  },
  {
    title: "Intra University Math Olympiad",
    company_name: " ",
    icon: math,
    iconBg: "#E6DEDD",
    date: "2nd Runner-up",
    points: [
      "Secured 2nd runner-up position in the University Math Olympiad.",
    ],
  },
  {
    title: "Competitive Programming Instructor",
    company_name: " ",
    icon: cp,
    iconBg: "#E6DEDD",
    date: "Instructor",
    points: [
      "Led multiple programming workshops, mentoring juniors in algorithms, data structures, and problem-solving techniques.",
    ],
  },
];

const testimonials = [];

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
      "Modern E-commerce Website using Django & React.js with DRF.",
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
  {
    name: "Mr.Doctor",
    description:
      "AI Disease Predictor & Medicine Suggestion platform.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Django", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "MachineLearning", color: "pink-text-gradient" },
    ],
    image: disease,
    source_code_link: "https://github.com/Sumonsiu01/dieseasePrediction",
    live_link: "https://your-tripguide-live-link.com",
  },
  {
    name: "Food Online",
    description:
      "A food delivery web application built with Django and React, allowing users to order food online with real-time order tracking and secure payment integration.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Django", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "MachineLearning", color: "pink-text-gradient" },
    ],
    image: food,
    source_code_link: "https://github.com/Sumonsiu01/foodonline",
    live_link: "https://your-tripguide-live-link.com",
  },
  {
    name: "IntellLearn",
    description:
      "A comprehensive online learning platform that leverages AI to provide personalized learning experiences with courses, interactive quizzes, and progress tracking.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Django", color: "blue-text-gradient" },
      { name: "Reactjs", color: "green-text-gradient" },
      { name: "DRF", color: "pink-text-gradient" },
      { name: "geminiAPi", color: "blue-text-gradient" }
    ],
    image: ehome,
    source_code_link: "https://github.com/Sumonsiu01/Elearning/tree/master",
    live_link: "https://your-tripguide-live-link.com",
  },
];

const competitiveProfiles = [
  {
    platform: "LeetCode",
    username: "Selim_Al_Sumon",
    profileLink: "https://leetcode.com/u/Selim_Al_Sumon/",
    metricLabel: "Problems Solved",
    metricValue: "250+",
    highlight: "Top Topics: Arrays, DP, Trees",
    status: "Active Solver",
    badge: "top 20% in contests",
    color: "#FFA116",
    glow: "rgba(255, 161, 22, 0.15)",
  },
  {
    platform: "Codeforces",
    username: "Selim_Al_Sumon",
    profileLink: "https://codeforces.com/profile/Selim_Al_Sumon",
    metricLabel: "Max Rating",
    metricValue: "Newbie",
    highlight: "Div. 2 & Div. 3 Contests",
    status: "Competitive",
    badge: "Contestant",
    color: "#1890FF",
    glow: "rgba(24, 144, 255, 0.15)",
  },
  {
    platform: "HackerRank",
    username: "selimalsumon",
    profileLink: "https://www.hackerrank.com/selimalsumon/",
    metricLabel: "Problem Solving",
    metricValue: "5 Stars ★★★★★",
    highlight: "Python & Problem Solving Skills",
    status: "Verified Badges",
    badge: "5* Rated Coder",
    color: "#00EA64",
    glow: "rgba(0, 234, 100, 0.15)",
  },
  {
    platform: "CodeChef",
    username: "sumon0_100",
    profileLink: "https://www.codechef.com/users/sumon0_100",
    metricLabel: "Problem Solving",
    metricValue: "2★ / Div 3",
    highlight: "Starters & Long Challenges",
    status: "Contestant",
    badge: "verified profile",
    color: "#5B4638",
    glow: "rgba(91, 70, 56, 0.2)",
  },
];

export { 
  services, 
  technologies, 
  experiences, 
  testimonials, 
  projects, 
  competitiveProfiles ,
};