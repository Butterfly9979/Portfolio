// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Ruis Sander",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "A highly skilled Full-Stack Developer with over 5 years of experience in designing, developing, and deploying web applications. Expertise in both front-end and back-end technologies with a strong ability to create scalable and efficient solutions. Adept at collaborating with teams, optimizing performance, and applying best practices in software development",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "C Language",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
  },
  { name: "TypeScript", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Express", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },
  { name: "NodeJS", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Postman", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Dart", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Flutter", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" },
  { name: "React Native", link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },
  { name: "HTML", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
  { name: "Bootstrap", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Redux", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
  { name: "Sass", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },
  { name: "Javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "MySQl", link: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "Mongo DB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "Heroku", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" },
  { name: "Next.js", link: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  { name: "Vue", link: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  { name: "Firebase", link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Python", link: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Django", link: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
  { name: "Php", link: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  { name: "WordPress", link: "https://seeklogo.com/vector-logo/299143/wordpress-icon" }
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    id: "project1",
    name: "Smart School",
    skills: ["PHP ,HTML, CSS, JS"],
    url: "https://smart-school.in/",
    img: "Smart School.jpg"
  },
  {
    id: "project2",
    name: "Sitemagic",
    skills: ["CMS ,HTML, CSS, JS"],
    url: "https://sitemagic.org/",
    img: "Site Magic.jpg"
  },
  {
    id: "project3",
    name: "e107 CMS",
    skills: ["CMS ,HTML, CSS, JS"],
    url: "https://e107.org/",
    img: "e107.jpg"
  },
  {
    id: "project4",
    name: "MyRank",
    skills: ["Laravel ,HTML, CSS, JS"],
    url: "https://myrank.co.in/",
    img: "My Rank.jpg"
  },
  {
    id: "project5",
    name: "Contentoo",
    skills: ["Vue.js, PHP"],
    url: "https://www.contentoo.com/",
    img: "Contentoo.jpg"
  },
  {
    id: "project6",
    name: "Eoniq",
    skills: ["Angular, Node.js"],
    url: "https://www.eoniq.co/",
    img: "Eoniq.jpg"
  },
  {
    id: "project7",
    name: "Florida Antiquarian Book Fair",
    skills: ["HTML, CSS, JavaScript, WordPress"],
    url: "https://www.floridaantiquarianbookfair.com/",
    img: "Florida.jpg"
  },
  {
    id: "project8",
    name: "Easel.ly",
    skills: ["D3.js, PHP"],
    url: "https://easel.ly/",
    img: "Easely.jpg"
  },
  {
    id: "project9",
    name: "Kudobuzz",
    skills: ["React, Node.js"],
    url: "https://kudobuzz.com/",
    img: "Kudobuzz.jpg"
  },
  {
    id: "project10",
    name: "Afternic",
    skills: ["HTML, CSS, JavaScript, C#"],
    url: "https://www.afternic.com/",
    img: "Afternic.jpg"
  },
  {
    id: "project11",
    name: "Flexiple",
    skills: ["React, Node.js"],
    url: "https://flexiple.com/",
    img: "Flexiple.jpg"
  },
  {
    id: "project12",
    name: "UXTH",
    skills: ["HTML, CSS, JavaScript, C#"],
    url: "https://www.afternic.com/",
    img: "Conference.jpg"
  },
  {
    id: "project13",
    name: "Listings Unlimited",
    skills: ["HTML, CSS, JavaScript, C#"],
    url: "https://www.listingsunlimited.com/",
    img: "Listingsunlimited.jpg"
  },
  {
    id: "project14",
    name: "DefectDojo",
    skills: ["Python ,Vue.js"],
    url: "https://defectdojo.com/",
    img: "DefectDojo.jpg"
  },
  {
    id: "project15",
    name: "Viewflow",
    skills: ["HTML, CSS, JavaScript, C#"],
    url: "https://viewflow.io/",
    img: "Viewflow.jpg"
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Please do not hesitate to contact us regarding any issues that arise. ---> ruissander9@gmail.com",
  copyright: "Ruis Sander",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
