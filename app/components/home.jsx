"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import DOMPurify from "isomorphic-dompurify";

import FAQSection from "./faq";
import dynamic from "next/dynamic";
import Instructorpage from "./instructors";
import { courses, learningmode } from "../localAPI/api"; // Adjust path as needed
import HeroSection from "./hero"

import { 
  CheckCircle2, 
  Award
} from "lucide-react";


const CodePlayground = dynamic(() => import("../editor/page"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});


// ── ABOUT SECTION ──────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-4">
              Our Mission
            </h2>
            <h3 className="text-4xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Empowering the Next Generation of Tech Leaders
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At Scippra, we make tech skills accessible to everyone. Our
                hands on on-site, online courses and expert mentorship prepare
                learners for real world success in an ever evolving digital
                landscape.
              </p>
              <p>
                Whether you're starting your tech journey or advancing your
                career, we provide the tools, knowledge, and support you need
                to thrive. We believe in learning by doing, not just watching.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
            <Image
              src="/home/four.png"
              alt="Collaborative Learning"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-[2.5rem] shadow-2xl border-8 border-white bg-slate-100" // Prevents white flash
              referrerPolicy="no-referrer"
              quality={85}
            />
            <div className="absolute bottom-12 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-700 rounded-2xl flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Certified Excellence
                  </p>
                  <p className="text-xs text-slate-500">
                    Industry recognized programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── MODE OF LEARNING SECTION ───────────────────────────────────────
export function LearningModeSection() {
  return (
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
                className="w-full object-cover bg-slate-100" // Prevents white flash
                referrerPolicy="no-referrer"
                quality={80}
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-black">{mode.mode}</h3>
                <p className="text-sm text-gray-600 mb-4">{mode.desc}</p>
                <button className="w-full bg-red-600 text-white py-2.5 rounded">
                  Explore our courses →
                </button>
              </div>
            </div>
          </div>
        ))}
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

// ── MAIN HOMEPAGE COMPONENT ────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="w-full bg-white">
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── ABOUT ── */}
      <AboutSection />

      {/* ── MODE OF LEARNING ── */}
      <LearningModeSection />

      {/* ── FEATURED COURSES ── */}
      <FeaturedCoursesSection />

      {/* ── CODE EDITOR ── */}
      <section className="max-w-6xl mx-auto pt-6 pb-6 px-8">
        <CodePlayground />
      </section>

      {/* ── INSTRUCTORS ── */}
      <section>
        <Instructorpage />
      </section>

      {/* ── FAQ ── */}
      <FAQSection />
    </div>
  );
}