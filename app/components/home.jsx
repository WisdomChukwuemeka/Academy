"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import FAQSection from "./faq";
import { motion } from "framer-motion";
import CodePlayground from '../editor/page';
import Instructorpage from './instructors';



const images = [
    '/change/two.png', 
    '/change/three.png', 
  ];

  const studentimages = [
    '/change/studentone.png', 
    '/change/studentthree.png', 
    '/change/studenttwo.png',  
  ];

  const learningmode = [
    { mode: "Classroom Learning", 
      img: "/home/classroom.png/",
      desc: "Immerse yourself in our expert-led, interactive classes for a hands-on learning experience that goes beyond traditional methods."
    },
    { mode: "Online Learning", 
      img: "/home/online.png",
      desc: "Discover the convenience of online learning with our courses, featuring interactive sessions and instant access to valuable resources."
    }
  ]

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
    content: "This hands-on course covers frontend development with HTML, CSS, JavaScript, React, and backend development with Django. You’ll build real-world projects and deploy them online.",
    syllabus: [
      "HTML, CSS & JavaScript Fundamentals",
      "Responsive Web Design",
      "React & Component-Based UI",
      "Backend Development with Django",
      "APIs & Database Integration",
      "Authentication & Security",
      "Final Project: Full-Stack Web App"
    ],
    price: 250000,
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full bg-white">
<section>
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* IMAGE SLIDER */}
        <div className="relative rounded-xs w-full overflow-hidden shadow-2xl h-150"> {/* Set a fixed height for the container */}
          {/* Stacked images with fade transition */}
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

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* TEXT ON IMAGE */}
          <div className="absolute inset-0 z-20 flex items-center text-center md:text-left justify-center md:justify-start">
            <div className="px-6 md:px-16 max-w-3xl">
              <span className="inline-block text-sm text-white font-medium bg-black/70 px-3 md:px-5 py-2 md:py-3 rounded-xl">
                ⭐ Trusted by 1000+ learners worldwide
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-white leading-tight max-w-30px">
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
        className="text-white-300 text-[1.8rem] md:text-[2.5rem] xl:text-[3rem] inline-block"
      >
        Start Your Tech Journey
      </motion.span>
      <br /> <span className='text-[1.8rem] md:text-[2.5rem] xl:text-[3rem]'>and</span>{" "}
                <span className="text-red-300 text-[1.8rem] md:text-[2.5rem] xl:text-[3rem]">Shape Your Future</span>
              </h1>

              <p className="text-gray-200 mt-4 max-w-lg">
                Industry-led IT courses crafted to help both beginners and professionals develop in-demand technology skills.
              </p>

              <div className="flex gap-4 mt-6 items-center justify-center md:justify-start">
                <Link href="/register">
                  <button className="border border-white text-white p-2 rounded-md hover:bg-white hover:text-red-600 transition">
                    Get Started
                  </button>
                </Link>

                <Link href="/#courses">
                  <div className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
                    Explore Courses
                  </div>
                </Link>
              </div>
              
              <div className='hidden md:flex items-center gap-3'>
              <div className='flex mt-4'>
                {studentimages.map((studentimage, index) => (
                  <div key={index}>
                  <Image 
                  src={studentimage}
                  alt='student image'
                  width={400}
                  height={200}
                  className='h-16 w-16 object-cover rounded-full'
                />
                </div>
                ))}
                </div>
                 <p className="text-gray-200 mt-4 max-w-80">
                  Become one of our 1000+ students from around the world
              </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-8 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-start">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">About Scippra</h2>
            <p className="text-gray-600 mb-4">
              At Scippra, we make tech skills accessible to everyone. Our hands-on online courses and expert mentorship prepare learners for real-world success.
            </p>
            <p className="text-gray-600">
              Whether you're starting your tech journey or advancing your career, we provide the tools, knowledge, and support you need to thrive in today's digital world.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-70 md:h-78.5 xl:h-100 overflow-hidden">
            <img src="/home/four.png" alt="Person at computer" className="object-cover w-fit h-fill" />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-gray-50 px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Why Choose Scippra?</h2>
            <p className="text-center text-gray-600 mb-12">Discover what makes us the perfect choice for your tech learning journey.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "bi-lightbulb",
                  title: "Beginner Friendly",
                  desc: "Start from zero with courses designed for all skill levels.",
                },
                {
                  icon: "bi-person-workspace",
                  title: "Expert Instructors",
                  desc: "Learn from industry professionals with years of real-world experience.",
                },
                {
                  icon: "bi-clock",
                  title: "Flexible Access",
                  desc: "Study at your own pace with 24/7 access to course materials.",
                },
                {
                  icon: "bi-award",
                  title: "Certificates",
                  desc: "Earn industry-recognized certificates upon course completion.",
                },
                {
                  icon: "bi-briefcase",
                  title: "Career Support",
                  desc: "Get job placement assistance and expert career guidance.",
                },
                {
                  icon: "bi-people",
                  title: "Community Access",
                  desc: "Connect with fellow learners and grow your professional network.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="flex mb-3 justify-center md:justify-start">
                    <i className={`bi ${item.icon} text-3xl text-red-500`}></i>
                  </div>

                  <h3 className="font-semibold md:text-left text-black">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 md:text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<section>
      <h2 className="text-2xl font-bold text-center pt-5 text-black">Mode of Learning</h2>

        <div className="flex flex-col md:flex-row justify-center">
          {
            learningmode.map((mode, index) => (
          <div key={index} className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-8 p-8 max-w-3xl">
            <div className="bg-white rounded-lg shadow overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                  <Image
                    src={mode.img}
                    alt={`${mode.mode} image`}  
                    width={400}
                    height={240}
                    className="w-full object-cover"
                    placeholder="blur"    
                    blurDataURL="/placeholder.png"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-black">{mode.mode}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{mode.desc}</p>
                      <button className={`w-full ${mode.mode === "Classroom Learning" ? "bg-red-700" : "bg-indigo-950"} text-white py-2.5 rounded`}>
                      Explore our courses <i className='bi bi-arrow-right ml-4 bg-white rounded-full p-1.5 text-indigo-950 font-bold'></i>
                    </button>
                  </div>
                </div>
                </div>
            ))
          }
        </div>
</section>


        {/* FEATURED COURSES */}
        <section id="courses" className="px-6 py-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-black">
            Featured Courses
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Start your learning journey with our most popular courses
          </p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
                  
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
                </div>
              </Link>
            ))}
          </div>
        </section>

         <section className="max-w-6xl mx-auto pt-6 pb-16 px-8">
              <CodePlayground />
            </section>


        {/* HOW IT WORKS */}
        <section className="bg-gray-50 px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">How It Works</h2>
            <p className="text-center text-gray-600 mb-12">Your journey to mastering new skills in 4 simple steps</p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: "bi-search",
                  title: "Choose a Course",
                  desc: "Browse our perfect course for you.",
                },
                {
                  icon: "bi-laptop",
                  title: "Learn Online",
                  desc: "Interactive lessons and hands-on projects.",
                },
                {
                  icon: "bi-award",
                  title: "Get Certified",
                  desc: "Showcase your new skills to employers.",
                },
                {
                  icon: "bi-rocket-takeoff",
                  title: "Apply Your Skills",
                  desc: "Advance your career or start new projects.",
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="bg-red-500 w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl mb-4">
                    <i className={`bi ${step.icon} text-white`}></i>
                  </div>

                  <h3 className="font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

         <section>
          <Instructorpage />  
        </section>

        {/* TESTIMONIALS */}
        <section className="px-8 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">What Our Students Say</h2>
          <p className="text-center text-gray-600 mb-12">Real success stories from our learning community</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div>
              {[
                {
                  name: "Mary Vivian",
                  role: "Business Analyst",
                  quote:
                    "Scippra completely transformed my career. The Python projects gave me real-world experience. Within 3 months of completing the course, I landed my dream job as a Data Analyst!",
                  stars: "⭐⭐⭐⭐⭐",
                  avatar: "/academy/four.png",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-indigo-950 shadow-md p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white mb-4 md:max-w-4xl">"{testimonial.quote}"</p>
                  <p className="text-yellow-500">{testimonial.stars}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  name: "Thompson Mike",
                  role: "Web Developer",
                  quote: "The Web Development Bootcamp exceeded my expectations. Great instructors and excellent support!",
                  stars: "⭐⭐⭐⭐⭐",
                  avatar: "/academy/two.png",
                },
                {
                  name: "Abigail Johnson",
                  role: "Business Analyst",
                  quote: "The Excel course helped me create amazing dashboards. My manager was impressed with my new skills!",
                  stars: "⭐⭐⭐⭐⭐",
                  avatar: "/academy/three.png",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white shadow-md p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <h4 className="font-semibold text-black">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4">"{testimonial.quote}"</p>
                  <p className="text-yellow-500">{testimonial.stars}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />
      </div>
    </>
  );
}