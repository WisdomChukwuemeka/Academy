import videoEditingImg from "@/./public/courses/videoediting.png";
import codingImg from "@/./public/courses/coding.png";
import dataAnalysisImg from "@/./public/courses/one.png";
import graphicDesignImg from "@/./public/courses/graphic.png";
import uiUxImg from "@/./public/courses/ui.png";
// import modelingImg from "@/./public/courses/3d.png";
import aiPromptImg from "@/./public/courses/ai.png";

export const courses = [
  {
    id: 1,
    title: "Professional Video Editing",
    desc: "This Video Editing Certification Course is designed to take you from beginner to professional level in video editing. You will learn how to edit high-quality videos for social media, YouTube, film, and marketing using industry-standard tools. By the end of this course, you will confidently create engaging video content that meets professional standards.",
    img: videoEditingImg,
    content:
      "Learn video editing workflows including cutting, transitions, color grading, sound design, and motion graphics using professional editing software.",
    syllabus: [
      "Introduction to Video Editing",
      "Editing Workflow & Timeline",
      "Transitions & Effects",
      "Color Correction & Grading",
      "Audio Editing & Sound Design",
      "Motion Graphics Basics",
      "Final Project: Professional Video Edit",
    ],
    duration: "2 months",
    enrolled: 220,
    tutor: "James Carter",
    weeks: 8,
    ratings: 4.7,
    ratingsCount: 980,
    lastUpdated: "01/2026",
    totalLectures: 38,
    totalDuration: "8h 20m",
    requirements: [
      "No prior experience required",
      "A computer capable of running editing software",
      "Creativity and willingness to learn"
    ],
    profilepic: "/teachers/teacherfour.png",
    instructorBio:
      "James Carter is a professional video editor with over 10 years of experience in film, media, and digital content production."
  },

  {
    id: 2,
    title: "Full-Stack Web Development",
    desc: "This Full-Stack Web Development course is a complete guide to building modern websites and web applications. You will learn how to design responsive interfaces, develop secure backends, and deploy real-world applications. By the end of the course, you will be job ready as a professional web developer.",
    img: codingImg,
    content:
      "Build responsive websites and scalable web applications using HTML, CSS, JavaScript, React, and Django.",
    syllabus: [
      "HTML, CSS & JavaScript Fundamentals",
      "Responsive Web Design",
      "React & Modern Frontend Development",
      "Backend Development with Django",
      "APIs & Database Integration",
      "Authentication & Security",
      "Final Project: Full-Stack Web App"
    ],
    duration: "4 months",
    enrolled: 310,
    tutor: "Michael Peterson",
    weeks: 10,
    ratings: 4.8,
    ratingsCount: 1200,
    lastUpdated: "12/2025",
    totalLectures: 55,
    totalDuration: "12h",
    requirements: [
      "Basic computer knowledge",
      "Internet access",
      "Willingness to practice"
    ],
    profilepic: "/teachers/teachersix.png",
    instructorBio:
      "Michael Peterson is a senior full-stack developer with years of experience building production grade web applications."
  },

  {
    id: 3,
    title: "Microsoft Excel Mastery",
    desc: "This Excel Mastery course teaches you how to analyze data, automate tasks, and create professional reports using Microsoft Excel. Whether for business, finance, or administration, this course equips you with essential Excel skills.",
    img: dataAnalysisImg,
    content:
      "Learn Excel formulas, data analysis, pivot tables, and automation techniques for real-world business use.",
    syllabus: [
      "Excel Basics",
      "Formulas & Functions",
      "Data Cleaning",
      "Pivot Tables & Charts",
      "Excel Automation",
      "Business Reporting",
      "Final Project: Excel Dashboard"
    ],
    duration: "1 months",
    enrolled: 420,
    tutor: "Robert King",
    weeks: 6,
    ratings: 4.6,
    ratingsCount: 1600,
    lastUpdated: "01/2026",
    totalLectures: 30,
    totalDuration: "6h 45m",
    requirements: [
      "Basic computer knowledge",
      "Microsoft Excel installed",
      "Interest in data handling"
    ],
    profilepic: "/teachers/teachertwo.png",
    instructorBio:
      "Robert King is a certified Excel and Power BI expert with over 15 years of experience in business analytics."
  },

  {
    id: 4,
    title: "Graphic Design",
    desc: "This Graphic Design course teaches you how to create professional visual designs for branding, marketing, and digital media. You will learn design principles and hands-on skills using industry-standard tools.",
    img: graphicDesignImg,
    content:
      "Design logos, flyers, banners, and social media graphics using Photoshop, Illustrator, and Canva.",
    syllabus: [
      "Design Principles & Color Theory",
      "Adobe Photoshop Basics",
      "Logo & Brand Design",
      "Adobe Illustrator Essentials",
      "Social Media & Print Designs",
      "Portfolio Development",
      "Final Project: Brand Design Kit"
    ],
    duration: "2 months",
    enrolled: 280,
    tutor: "Sophia Martinez",
    weeks: 8,
    ratings: 4.7,
    ratingsCount: 1100,
    lastUpdated: "12/2025",
    totalLectures: 36,
    totalDuration: "8h",
    requirements: [
      "No prior experience required",
      "Creative mindset",
      "Access to design software"
    ],
    profilepic: "/teachers/teacherthree.png",
    instructorBio:
      "Sophia Martinez is a professional graphic designer who has worked with global brands and startups."
  },

  {
    id: 5,
    title: "UI/UX Design",
    desc: "This UI/UX Design course teaches you how to design intuitive and user-friendly digital products. You will learn the complete design process from research to prototyping and usability testing.",
    img: uiUxImg,
    content:
      "Learn user research, wireframing, prototyping, and design systems using Figma.",
    syllabus: [
      "Introduction to UI/UX",
      "User Research & Personas",
      "Wireframing",
      "Prototyping with Figma",
      "Usability Testing",
      "Design Systems",
      "Final Project: App UI Design"
    ],
    duration: "2 months",
    enrolled: 300,
    tutor: "Sarah Lee",
    weeks: 9,
    ratings: 4.8,
    ratingsCount: 1300,
    lastUpdated: "01/2026",
    totalLectures: 42,
    totalDuration: "9h 30m",
    requirements: [
      "No prior design experience required",
      "Basic computer skills",
      "Interest in user-centered design"
    ],
    profilepic: "/teachers/teacherfive.png",
    instructorBio:
      "Sarah Lee is a UI/UX designer with experience designing products used by thousands of users worldwide."
  },
  {
  id: 6,
  title: "AI Prompt Engineering",
  desc: "This AI Prompt Engineering course teaches you how to effectively communicate with AI systems to get accurate, creative, and powerful results. You will learn how to structure prompts, refine outputs, and apply AI tools across different industries.",
  img: aiPromptImg,
  content:
    "Master the art of writing effective prompts for AI tools like ChatGPT. Learn prompt structures, optimization, and real-world applications for business, content creation, and automation.",
  syllabus: [
    "Introduction to AI & Prompt Engineering",
    "How AI Understands Prompts",
    "Prompt Structures",
    "Advanced Prompt Techniques",
    "AI for Content Creation",
    "Automation & Productivity",
    "Final Project: AI Prompt System"
  ],
  duration: "1 month",
  enrolled: 0,
  tutor: "Lugard Wisdom",
  weeks: 4,
  ratings: 4.8,
  ratingsCount: 97,
  lastUpdated: "03/2026",
  totalLectures: 25,
  totalDuration: "5h",
  requirements: [
    "Basic computer knowledge",
    "Interest in AI tools",
    "No prior experience required"
  ],
  profilepic: "/teachers/ceo.png",
  instructorBio:
    "Lugard Wisdom is an AI specialist focused on prompt engineering, automation, and helping businesses leverage AI for productivity.",
  price: 50000
}
];
