import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";

import FAQSection from "./faq";
import CodePlayground from "../editor/page"
import Instructorpage from "./instructors";
import {learningmode } from "../localAPI/api"; // Adjust path as needed
import HeroSection from "./hero"
import FeaturedCoursesSection from "./featuredcourses";

import { 
  CheckCircle2, 
  Award
} from "lucide-react";




// ── ABOUT SECTION ──────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
 
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-4">
              Our Mission
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Empowering the Next Generation of Tech Leaders
            </h3>
            <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                At Scippra, we make tech skills accessible to everyone. Our
                hands-on on-site, online courses and expert mentorship prepare
                learners for real-world success in an ever-evolving digital
                landscape.
              </p>
              <p>
                Whether you're starting your tech journey or advancing your
                career, we provide the tools, knowledge, and support you need
                to thrive. We believe in learning by doing, not just watching.
              </p>
            </div>
          </div>
 
          {/* Image Column */}
          <div className="relative order-2 md:order-2">
            {/* Decorative blobs — constrained so they don't bleed on mobile */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-emerald-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-slate-100 rounded-full -z-10" />
 
            <Image
              src="/home/four.png"
              alt="Collaborative Learning"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 md:border-8 border-white bg-slate-100 w-full h-auto"
              referrerPolicy="no-referrer"
              quality={85}
            />
 
            {/* Badge — only on md+ */}
            <div className="absolute bottom-10 -right-4 md:-right-6 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-700 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
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