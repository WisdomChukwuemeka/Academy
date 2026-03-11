"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "./faq";
import { motion } from "framer-motion"; // keep this for the span
import CodePlayground from "../editor/page";
import Instructorpage from "./instructors";
import { 
  ArrowRight, 
  Users, 
  Globe, 
  BookOpen, 
  Laptop, 
  CheckCircle2, 
  ChevronRight,
  Star,
  Award
} from "lucide-react";

const images = [
  "/change/two.png",
  "/change/three.png",
];

const studentimages = [
  "/change/studentone.png",
  "/change/studentthree.png",
  "/change/studenttwo.png",
];

const learningmode = [
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

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full bg-white">

        {/* HERO SECTION */}
        <section>

          {/* background blobs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">

            {/* IMAGE SLIDER */}
            <div className="relative rounded-xs w-full overflow-hidden shadow-2xl h-[600px]">

              {images.map((src, index) => (
                <Image
              key={src}
              src={src}
              alt="Slideshow image"
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
              ))}

              <div className="absolute inset-0 bg-black/60 z-10"></div>

              <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start text-center md:text-left">

                <div className="px-6 md:px-16 max-w-3xl">

                  <span className="inline-block text-sm text-white bg-black/70 px-5 py-3 rounded-xl">
                    ⭐ Trusted by 1000+ learners worldwide
                  </span>

                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-white">

                    {/* KEEP THIS ANIMATION */}
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        textShadow: [
                          "0px 0px 0px rgba(255,255,255,0)",
                          "0px 0px 12px rgba(255,180,180,0.8)",
                          "0px 0px 0px rgba(255,255,255,0)"
                        ],
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        textShadow: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                        },
                      }}
                      className="inline-block text-[1.8rem] md:text-[2.5rem] xl:text-[3rem]"
                    >
                      Start Your Tech Journey
                    </motion.span>

                    <br />

                    <span className="text-[1.8rem] md:text-[2.5rem] xl:text-[3rem]">
                      and
                    </span>{" "}

                    <span className="text-red-300 text-[1.8rem] md:text-[2.5rem] xl:text-[3rem]">
                      Shape Your Future
                    </span>

                  </h1>

                  <p className="text-gray-200 mt-4 max-w-lg">
                    Industry led IT courses crafted to help both beginners and
                    professionals develop in demand technology skills.
                  </p>

                  <div className="flex gap-4 mt-6 justify-center md:justify-start">

                    <Link href="/register">
                      <button className="border border-white text-white p-2 rounded-md hover:bg-white hover:text-red-600">
                        Get Started
                      </button>
                    </Link>

                    <Link href="/#courses">
                      <div className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                        Explore Courses
                      </div>
                    </Link>

                  </div>

                  <div className="hidden md:flex items-center gap-3 mt-2">

                    <div className="hidden md:flex items-center gap-4 pt-2">

<div className="flex items-center gap-6 pt-2 border-t border-white/10">
              <div className="flex -space-x-3">
                {studentimages.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Student"
                    className="w-12 h-12 rounded-full border-4 border-slate-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg">Join 1,000+ students</p>
                <p className="text-slate-400 text-sm">from 40+ countries worldwide</p>
              </div>
            </div>
            </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ABOUT SECTION */}
         <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-4">Our Mission</h2>
              <h3 className="text-4xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Empowering the Next Generation of Tech Leaders
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At Scippra, we make tech skills accessible to everyone. Our hands on on-site, 
                  online courses and expert mentorship prepare learners for real world success 
                  in an ever evolving digital landscape.
                </p>
                <p>
                  Whether you're starting your tech journey or advancing your career, 
                  we provide the tools, knowledge, and support you need to thrive. 
                  We believe in learning by doing, not just watching.
                </p>
              </div>
              {/* <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="font-semibold text-slate-800">Expert Mentorship</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="font-semibold text-slate-800">Hands on Projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="font-semibold text-slate-800">Career Support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="font-semibold text-slate-800">Global Community</span>
                </div>
              </div> */}
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
              <img
                src="/home/four.png"
                alt="Collaborative Learning"
                className="rounded-[2.5rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-12 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-700 rounded-2xl flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Certified Excellence</p>
                    <p className="text-xs text-slate-500">Industry recognized programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>


        {/* MODE OF LEARNING */}
        <section>

          <h2 className="text-2xl font-bold text-center pt-5 text-black">
            Mode of Learning
          </h2>

          <div className="flex flex-col md:flex-row justify-center">

            {learningmode.map((mode, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8 p-8 max-w-3xl"
              >

                <div className="bg-white rounded-lg shadow overflow-hidden hover:scale-105 transition cursor-pointer">

                  <Image
                    src={mode.img}
                    alt={mode.mode}
                    width={400}
                    height={240}
                    className="w-full object-cover"
                  />

                  <div className="p-4">

                    <h3 className="font-semibold mb-2 text-black">
                      {mode.mode}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {mode.desc}
                    </p>

                    <button className="w-full bg-red-600 text-white py-2.5 rounded">
                      Explore our courses →
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </section>

         {/* FEATURED COURSES */}
        <motion.section 
          id="courses" 
          className="px-6 py-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-black">
            Featured Courses
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Start your learning journey with our most popular courses
          </p>

          <motion.div 
            className="grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <motion.div 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* Image Section */}
                  <div className="relative">
                    <Image
                      src={course.img}
                      alt={course.title}
                      width={400}
                      height={240}
                      className="w-full h-44 object-cover"
                    />

                    {/* Classroom badge */}
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      Classroom
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category */}
                    <p className="text-sm text-red-500 font-medium mb-1">
                      {course.category}
                    </p>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 leading-snug mb-2">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {course.desc}
                    </p>

                    {/* Prices */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg text-black">
                          ⏱ {course.weeks}weeks
                        </span>
                        <span className="font-semibold text-black bg-gray-100 p-1.5 rounded-lg">
                        ₦{course.price.toLocaleString("en-NG")}
                      </span>


                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-xs">
                        View →
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.section>


        {/* CODE EDITOR */}
        <section className="max-w-6xl mx-auto pt-6 pb-6 px-8">
          <CodePlayground />
        </section>


        {/* INSTRUCTORS */}
        <section>
          <Instructorpage />
        </section>


        {/* FAQ */}
        <FAQSection />

      </div>
    </>
  );
}