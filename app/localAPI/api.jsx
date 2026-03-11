export const jobs = [
  {
    id: 1,
    title: "Web Developer",
    company: "Imac Technology",
    location: "Abuja",
    amount: "₦250,000",
    email: "imac@gmail.com",
    contact: "09064583473",
    requirement: ["Next.js", "Vue.js", "Angular", "GitHub"],
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
    requirement: ["Django", "Node.js", "PostgreSQL", "API Development"],
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Appify Africa",
    location: "Ibadan",
    amount: "₦280,000",
    email: "jobs@appify.africa",
    contact: "08033445566",
    requirement: ["React Native", "Flutter", "Firebase", "Play Store Deployment"],
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "PixelCraft Studio",
    location: "Lagos",
    amount: "₦220,000",
    email: "design@pixelcraft.com",
    contact: "09011223344",
    requirement: ["Figma", "Adobe XD", "User Research", "Prototyping"],
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


export const instructor = [
    {
        id: 1,
        name: "Lugard wisdom",
        role: "Excutive Director",
        company: "Scippra Academy",
        image: "/instructors/ceo.png",
        experience: "4-5",
        location: "Port Harcourt, Nigeria",
    },
    {
        id: 2,
        name: "Jane Amaka",
        role: "Word Press Instructor",
        company: "Scippra Academy",
        image: "/instructors/jane.png",
        experience: "2-3",
        location: "Port Harcourt, Nigeria",
    },
    {
        id: 3,
        name: "Peter John",
        role: "Frontend Developer",
        company: "Scippra Academy",
        image: "/instructors/john.png",
        experience: "1-2",
        location: "Port Harcourt, Nigeria",
    },
    {
        id: 4,
        name: "Mary Smith",
        role: "Data Science Instructor",
        company: "Scippra Academy",
        image: "/instructors/mary.png",
        experience: "3-4",
        location: "Port Harcourt, Nigeria",
    },
    {
        id: 5,
        name: "David Brown",
        role: "Backend Instructor",
        company: "Scippra Academy",
        image: "/instructors/david.png",
        experience: "2-3",
        location: "Port Harcourt, Nigeria",
    },
    {
        id: 6,
        name: "Susan Lee",
        role: "Full Stack Developer",
        company: "Scippra Academy",
        image: "/instructors/susan.png",
        experience: "2-3",
        location: "Port Harcourt, Nigeria",
    },
    {
        id: 7,
        name: "Michael Johnson",
        role: "Graphic Design Instructor",
        company: "Scippra Academy",
        image: "/instructors/michael.png",
        experience: "3-4",
        location: "Port Harcourt, Nigeria",
    },
    {
        id: 8,
        name: "Danto Emmanuel",
        role: "3d modeling Instructor",
        company: "Scippra Academy",
        image: "/instructors/danto.png",
        experience: "3-4",
        location: "Port Harcourt, Nigeria",
    }
]

export const images = [
  "/change/two.png",
  "/change/three.png",
];

export const studentimages = [
  "/change/studentone.png",
  "/change/studentthree.png",
  "/change/studenttwo.png",
];

export const learningmode = [
  {
    mode: "Classroom Learning",
    img: "/home/classroomone.png",
    desc: "Immerse yourself in our expert led, interactive classes for a hands-on learning experience that goes beyond traditional methods."
  },
  {
    mode: "Online Learning",
    img: "/home/online.png",
    desc: "Discover the convenience of online learning with our courses, featuring interactive sessions and instant access to valuable resources."
  }
];

export const courses = [
  {
    id: 1,
    title: "Professional Video Editing",
    desc: "Learn professional video editing techniques using industry-standard tools to create high-quality videos.",
    img: "/courses/videoediting.png",
    content: "This course teaches video editing from beginner to advanced level using tools like Adobe Premiere Pro and After Effects. You will learn cutting, transitions, color grading, sound design, and motion graphics.",
    syllabus: [
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
    img: "/courses/coding.png",
    content: "This hands-on course covers frontend development with HTML, CSS, JavaScript, React, and backend development with Django. You’ll build   projects and deploy them online.",
    syllabus: [
      "HTML, CSS & JavaScript Fundamentals",
      "Responsive Web Design",
      "React & Component-Based UI",
      "Backend Development with Django",
      "APIs & Database Integration",
      "Authentication & Security",
      "Final Project: Full-Stack Web App"
    ],
    price: 300000,
    enrolled: 300,
    tutor: "Michael Rodriguez",
    weeks: 8
  },

  {
    id: 3,
    title: "Data Analysis with Excel",
    desc: "Master Excel from basic formulas to advanced data analysis, automation, and business reporting.",
    img: "/courses/one.png",
    content: "Learn how to analyze data, automate tasks, and create dashboards using Excel. This course is ideal for business professionals and data beginners.",
    syllabus: [
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
    weeks: 6
  },

  {
    id: 4,
    title: "Graphic Design",
    desc: "Create stunning visual designs using professional graphic design tools for marketing, and digital media.",
    img: "/courses/graphic.png",
    content: "This course covers design principles and practical skills using Adobe Photoshop, Illustrator, and Canva to produce professional graphics.",
    syllabus: [
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
    img: "/courses/ui.png",
    content: "Learn the complete UI/UX design workflow using Figma. You’ll conduct user research, create wireframes, prototypes, and design modern interfaces.",
    syllabus: [
      "Introduction to UI/UX",
      "User Research & Personas",
      "Wireframing",
      "Prototyping with Figma",
      "Usability Testing",
      "Design Systems",
      "Final Project: App UI/UX Design"
    ],
    price: 220000,
    enrolled: 280,
    tutor: "Daniel Lee",
    weeks: 9
  },

  {
    id: 6,
    title: "3D Modeling & Animation",
    desc: "Learn 3D modeling, texturing, and animation to create realistic 3D for games, films and product visualization.",
    img: "/courses/3d.png",
    content: "This course introduces 3D modeling using Blender. You’ll learn modeling, texturing, lighting, rendering, and basic animation techniques.",
    syllabus: [
      "Introduction to 3D Design",
      "Blender Interface & Tools",
      "3D Modeling Techniques",
      "Texturing & Materials",
      "Lighting & Rendering",
      "Basic Animation",
      "Final Project: 3D Model Showcase"
    ],
    price: 300000,
    enrolled: 150,
    tutor: "Ethan Brooks",
    weeks: 12
  }
];