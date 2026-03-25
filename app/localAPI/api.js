// localAPI/api.js

// ==========================================
// 1. IMPORT ALL LOCAL IMAGES HERE
// This allows Next.js to pre-calculate sizes,
// compress them, and generate instant blur placeholders.
// ==========================================

// Instructors
import ceoImg from "@/./public/instructors/ceo.png";
import janeImg from "@/./public/instructors/jane.png";
import johnImg from "@/./public/instructors/john.png";
import maryImg from "@/./public/instructors/mary.png";
import davidImg from "@/./public/instructors/david.png";
import susanImg from "@/./public/instructors/susan.png";
import michaelImg from "@/./public/instructors/michael.png";
import dantoImg from "@/./public/instructors/danto.png";

// Hero & Student Images
import slideTwo from "@/./public/change/two.png"
import slideThree from "@/./public/change/three.png";
import studentOne from "@/./public/change/studentone.png";
import studentTwo from "@/./public/change/studenttwo.png";
import studentThree from "@/./public/change/studentthree.png";

// Learning Modes
import classroomImg from "@/./public/home/classroomone.png";
import onlineImg from "@/./public/home/online.png";

// Courses
import videoEditingImg from "@/./public/courses/videoediting.png";
import codingImg from "@/./public/courses/coding.png";
import dataAnalysisImg from "@/./public/courses/one.png";
import graphicDesignImg from "@/./public/courses/graphic.png";
import uiUxImg from "@/./public/courses/ui.png";
import modelingImg from "@/./public/courses/3d.png";
import aiPromptImg from "@/./public/courses/ai.png";


// ==========================================
// 2. EXPORT YOUR DATA USING THE IMPORTED VARIABLES
// ==========================================

export const jobs =[
  {
    id: 1,
    title: "Web Developer",
    company: "Imac Technology",
    location: "Abuja",
    amount: "₦250,000",
    email: "imac@gmail.com",
    contact: "09064583473",
    requirement:["Next.js", "Vue.js", "Angular", "GitHub"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "TechNova Ltd",
    location: "Lagos",
    amount: "₦300,000",
    email: "hr@technova.com",
    contact: "08123456789",
    requirement: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "CodeWave Solutions",
    location: "Remote",
    amount: "₦350,000",
    email: "careers@codewave.io",
    contact: "07099887766",
    requirement:["Django", "Node.js", "PostgreSQL", "API Development"],
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Appify Africa",
    location: "Ibadan",
    amount: "₦280,000",
    email: "jobs@appify.africa",
    contact: "08033445566",
    requirement:["React Native", "Flutter", "Firebase", "Play Store Deployment"],
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "PixelCraft Studio",
    location: "Lagos",
    amount: "₦220,000",
    email: "design@pixelcraft.com",
    contact: "09011223344",
    requirement:["Figma", "Adobe XD", "User Research", "Prototyping"],
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Abuja",
    amount: "₦320,000",
    email: "recruitment@insight.com",
    contact: "08166778899",
    requirement: ["Python", "SQL", "Power BI", "Excel"],
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudNet Systems",
    location: "Remote",
    amount: "₦450,000",
    email: "devops@cloudnet.io",
    contact: "07044556677",
    requirement: ["Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    id: 8,
    title: "Digital Marketing Specialist",
    company: "GrowthHub",
    location: "Port Harcourt",
    amount: "₦200,000",
    email: "marketing@growthhub.com",
    contact: "08055667788",
    requirement: ["SEO", "Google Ads", "Content Strategy", "Analytics"],
  },
];

export const instructor =[
  {
    id: 1,
    name: "Lugard wisdom",
    role: "Excutive Director",
    company: "Scippra Academy",
    image: ceoImg,
    experience: "4-5",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 2,
    name: "Jane Amaka",
    role: "Word Press Instructor",
    company: "Scippra Academy",
    image: janeImg,
    experience: "2-3",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 3,
    name: "Peter John",
    role: "Frontend Developer",
    company: "Scippra Academy",
    image: johnImg,
    experience: "1-2",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 4,
    name: "Mary Smith",
    role: "Data Science Instructor",
    company: "Scippra Academy",
    image: maryImg,
    experience: "3-4",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 5,
    name: "David Brown",
    role: "Backend Instructor",
    company: "Scippra Academy",
    image: davidImg,
    experience: "2-3",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 6,
    name: "Susan Lee",
    role: "Full Stack Developer",
    company: "Scippra Academy",
    image: susanImg,
    experience: "2-3",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 7,
    name: "Michael Johnson",
    role: "Graphic Design Instructor",
    company: "Scippra Academy",
    image: michaelImg,
    experience: "3-4",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 8,
    name: "Danto Emmanuel",
    role: "3d modeling Instructor",
    company: "Scippra Academy",
    image: dantoImg,
    experience: "3-4",
    location: "Port Harcourt, Nigeria",
  }
];

export const images =[
  slideThree,
  slideTwo,
];

export const studentimages =[
  studentOne,
  studentThree,
  studentTwo,
];

export const learningmode =[
  {
    mode: "Classroom Learning",
    img: classroomImg,
    desc: "Immerse yourself in our expert led, interactive classes for a hands-on learning experience that goes beyond traditional methods."
  },
  {
    mode: "Online Learning",
    img: onlineImg,
    desc: "Discover the convenience of online learning with our courses, featuring interactive sessions and instant access to valuable resources."
  }
];

export const courses =[
  {
    id: 1,
    title: "Professional Video Editing",
    desc: "Learn professional video editing techniques using industry-standard tools to create high-quality videos.",
    img: videoEditingImg,
    content: "This course teaches video editing from beginner to advanced level using tools like Adobe Premiere Pro and After Effects. You will learn cutting, transitions, color grading, sound design, and motion graphics.",
    syllabus:[
      "Introduction to Video Editing",
      "Adobe Premiere Pro Basics",
      "Cutting & Transitions",
      "Color Correction & Grading",
      "Audio Editing & Sound Design",
      "Motion Graphics with After Effects",
      "Final Project: Professional Video Edit"
    ],
    price: 200000,
    enrolled: 220,
    tutor: "James Carter",
    weeks: 8
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    desc: "Design, build, and deploy modern websites and web applications using frontend and backend technologies.",
    img: codingImg,
    content: "This hands-on course covers frontend development with HTML, CSS, JavaScript, React, and backend development with Django. You’ll build projects and deploy them online.",
    syllabus:[
      "HTML, CSS & JavaScript Fundamentals",
      "Responsive Web Design",
      "React & Component-Based UI",
      "Backend Development with Django",
      "APIs & Database Integration",
      "Authentication & Security",
      "Final Project: Full-Stack Web App"
    ],
    price: 400000,
    enrolled: 300,
    tutor: "Michael Rodriguez",
    weeks: 16
  },
  {
    id: 3,
    title: "Data Analysis with Excel",
    desc: "Master Excel from basic formulas to advanced data analysis, automation, and business reporting.",
    img: dataAnalysisImg,
    content: "Learn how to analyze data, automate tasks, and create dashboards using Excel. This course is ideal for business professionals and data beginners.",
    syllabus:[
      "Excel Interface & Basics",
      "Formulas & Functions",
      "Data Cleaning & Analysis",
      "Pivot Tables & Charts",
      "Excel Automation",
      "Business Reporting",
      "Final Project: Excel Dashboard"
    ],
    price: 100000,
    enrolled: 400,
    tutor: "Robert Klein",
    weeks: 4
  },
  {
    id: 4,
    title: "Graphic Design",
    desc: "Create stunning visual designs using professional graphic design tools for marketing, and digital media.",
    img: graphicDesignImg,
    content: "This course covers design principles and practical skills using Adobe Photoshop, Illustrator, and Canva to produce professional graphics.",
    syllabus:[
      "Design Principles & Color Theory",
      "Adobe Photoshop Essentials",
      "Logo & Brand Design",
      "Adobe Illustrator Basics",
      "Social Media & Print Designs",
      "Design Portfolio Creation",
      "Final Project: Brand Design Kit"
    ],
    price: 180000,
    enrolled: 260,
    tutor: "Sophia Martinez",
    weeks: 8
  },
  {
    id: 5,
    title: "UI/UX Design",
    desc: "Design intuitive and user-friendly digital products through research, wireframing, prototyping, and testing.",
    img: uiUxImg,
    content: "Learn the complete UI/UX design workflow using Figma. You’ll conduct user research, create wireframes, prototypes, and design modern interfaces.",
    syllabus:[
      "Introduction to UI/UX",
      "User Research & Personas",
      "Wireframing",
      "Prototyping with Figma",
      "Usability Testing",
      "Design Systems",
      "Final Project: App UI/UX Design"
    ],
    price: 250000,
    enrolled: 280,
    tutor: "Daniel Lee",
    weeks: 8
  },
  {
    id: 6,
    title: "AI Prompt Engineering",
    desc: "Learn how to effectively communicate with AI tools to generate high-quality content, automate tasks, and boost productivity.",
    img: aiPromptImg,
    content: "This course teaches how to craft powerful prompts for AI tools like ChatGPT and other generative AI platforms. You will learn prompt structures, optimization techniques, and real-world use cases.",
    syllabus:[
      "Introduction to AI & Prompting",
      "Understanding How AI Responds",
      "Prompt Structures & Frameworks",
      "Advanced Prompt Techniques",
      "AI for Content Creation",
      "Automation & Productivity Workflows",
      "Final Project: AI-Powered Solution"
    ],
    price: 50000,
    enrolled: 0,
    tutor: "Alex Morgan",
    weeks: 4
  }
];


export const cohortinstructor =[
  {
    id: 1,
    name: "Lugard wisdom",
    role: "Excutive Director",
    company: "Scippra Academy",
    image: ceoImg,
    experience: "4-5",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 2,
    name: "Jane Amaka",
    role: "Word Press Instructor",
    company: "Scippra Academy",
    image: janeImg,
    experience: "2-3",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 3,
    name: "Peter John",
    role: "Frontend Developer",
    company: "Scippra Academy",
    image: johnImg,
    experience: "1-2",
    location: "Port Harcourt, Nigeria",
  }
]