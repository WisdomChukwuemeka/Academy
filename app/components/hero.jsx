"use client";
import { useState, useEffect } from "react";
import {images, studentimages} from "../localAPI/api"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// ── HERO SECTION ───────────────────────────────────────────────────
export default function HeroSection() {
  const[currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  },[]);

  return (
    <section>
      {/* background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* IMAGE SLIDER */}
        <div className="relative rounded-xs w-full overflow-hidden shadow-2xl h-150 bg-slate-900">
          {images.map((src, index) => (
            <div key={index}>
            <Image
              key={src}
              src={src}
              alt={`Slideshow image ${index + 1}`}
              fill
              sizes="100vw"
              referrerPolicy="no-referrer"
              priority={index === 0} // Preloads the first image instantly to prevent lag
              quality={80}
              placeholder="blur"
              className={`object-cover bg-slate-800 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
            </div>
          ))}

          <div className="absolute inset-0 bg-black/60 z-10"></div>

          <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start text-center md:text-left">
            <div className="px-6 md:px-16 max-w-3xl">
              <span className="inline-block text-sm text-white bg-black/70 px-5 py-3 rounded-xl">
                ⭐ Trusted by 1000+ learners worldwide
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-white">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    textShadow:[
                      "0px 0px 0px rgba(255,255,255,0)",
                      "0px 0px 12px rgba(255,180,180,0.8)",
                      "0px 0px 0px rgba(255,255,255,0)",
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
                        <div
                          key={i}
                          className="relative w-12 h-12 rounded-full border-4 border-slate-950 overflow-hidden bg-slate-300"
                        >
                          <Image
                            src={url}
                            alt={`Student ${i}`}
                            fill
                            sizes="48px"
                            className="object-cover bg-slate-300" // Acts as a placeholder if scroll is too fast
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">
                        Join 1,000+ students
                      </p>
                      <p className="text-slate-400 text-sm">
                        from 40+ countries worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FEATURED COURSES SECTION ───────────────────────────────────────
export function FeaturedCoursesSection() {
  return (
    <section
      id="courses"
      className="px-6 py-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-2 text-black">
        Featured Courses
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Start your learning journey with our most popular courses
      </p>

      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-3"
       
      >
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <motion.div
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
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
                  className="w-full h-44 object-cover bg-slate-100" // Prevents white flash
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
                <h3 
                  className="font-semibold text-gray-900 leading-snug mb-2" 
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.title) }} 
                />

                {/* Description */}
                <p 
                  className="text-sm text-gray-600 line-clamp-3 mb-4" 
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.desc) }} 
                />

                {/* Prices */}
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg text-black">
                    ⏱ {course.weeks} weeks
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
      </div>
    </section>
  );
}