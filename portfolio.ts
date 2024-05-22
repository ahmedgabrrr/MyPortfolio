import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Ahmed Gabr",
  title: "Hi all, I'm Ahmed",
  description:
    "I'm a passionate Frontend web developer with experience developing web applications with React.js,. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1jdGxVjKBazRrYExNuC0defDiRAu0WC6O/view",
};

export const openSource = {
  githubUserName: "ahmedgabrrr",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "https://agabr6532@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-gabr-a54806214",
  github: "https://github.com/ahmedgabrrr",
  // instagram: "",
  // facebook: '',
  // twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Dealing with APIS"),
      ],
      softwareSkills: [
        {
          skillName: "",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "SASS",
          iconifyTag: "vscode-icons:file-type-scss",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Typescript",
          iconifyTag: "vscode-icons:file-type-typescript",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Responsive Design",
    progressPercentage: "100",
  },
  {
    Stack: " APIs",
    progressPercentage: "85",
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Mansoura University",
    subHeader: "Bachelor Of Computer Science And Information Sciences",
    duration: "September 2020 - August 2024",
    desc: "",
    grade: "",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "ATHR Company",
    companyLogo: "/img/icons/common/images.png",
    date: "Aug 2023 - May 2024",
    desc: "",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Blazo",
    desc: "An Ecommerce Platform, where you can buy what you need and complete your order with payment gateway.",
    github: "https://github.com/ahmedgabrrr/Blazo-e-commerce",
    link: "https://6638fd5c456725ee7ca1a6ef--glittery-mousse-c58487.netlify.app/",
  },
  {
    name: "Atlas",
    desc: "Landing page built with react.js and bootstrap",
    github: "https://github.com/ahmedgabrrr/atlas",
    link: "https://ahmedgabrrr.github.io/atlas/",
  },
  {
    name: "Book Store",
    desc: "A Ecommerce Platform, done using :- React js - Node js - Express js - Tailwind css - Flowbite - MongoDB.",
    github: "https://github.com/ahmedgabrrr/Book-Store",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Sayed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Ahmed is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Abdo Elrahman Khaled",
    role: "Project Manager at ATHR",
    feedback:
      "Ahmed has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Ahmed is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Ahmed Gabr for any Full Stack Node js, React.js and I wish him all the best in his future endeavors.",
  },
  {
    name: "Ahmed Saeed",
    role: "CEO at Fintech",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of React and he's always ready to handle any challenges thrown at him.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Ahmed Gabr",
  description: greetings.description,
  author: "Ahmed Gabr",
  image: "https://www.instagram.com/p/C5kdLuvCQ-Z/?igsh=djg3eTVucDdsbWhz",
  url: "https://www.instagram.com/p/C5kdLuvCQ-Z/?igsh=djg3eTVucDdsbWhz",
  keywords: [
    "Ahmed",
    "Ahmed Gabr",
    "@ahmedgabrrr",
    "ahmedgabrrr",
    "Portfolio",
    "Ahmed Portfolio ",
    "Ahmed Gabr Portfolio",
  ],
};
