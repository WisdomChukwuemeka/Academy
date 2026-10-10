"use client";
import { useState, useEffect } from "react";
import { images, studentimages } from "../localAPI/api";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// ── HERO SECTION ───────────────────────────────────────────────────
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-neutral-900 border-b border-white/10 text-white text-xs md:text-sm font-medium relative z-30"
          >
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-x-2 text-center pr-10">
              <span className="inline-flex items-center gap-1.5 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
                <strong>Flexible Payments:</strong> You can now split tuition into convenient installment plans!
              </span>
              <Link 
                href="#courses" 
                className="text-red-400 underline font-semibold hover:text-red-300 transition-colors inline-block whitespace-nowrap"
              >
                Learn More &rarr;
              </Link>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-4 md:p-6">
        {/* IMAGE SLIDER CONTAINER */}
        <div className="relative rounded-2xl w-full overflow-hidden shadow-2xl h-[500px] md:h-[600px] bg-slate-900">
          {images.map((src, index) => (
            <div key={index} className="absolute inset-0">
              <Image
                src={src}
                alt={`Slideshow image ${index + 1}`}
                fill
                sizes="100vw"
                referrerPolicy="no-referrer"
                priority={index === 0}
                quality={80}
                className={`object-cover bg-slate-800 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            </div>
          ))}

          {/* Dark Overlay over slider */}
          <div className="absolute inset-0 bg-black/65 z-10"></div>

          {/* TEXT CONTENT LAYER */}
          <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start text-center md:text-left">
            <div className="px-6 md:px-16 max-w-3xl">
              <span className="inline-block text-xs font-semibold text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                ⭐ Trusted by 1000+ learners worldwide
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 text-white tracking-tight leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    textShadow:[
                      "0px 0px 0px rgba(255,255,255,0)",
                      "0px 0px 12px rgba(255,180,180,0.4)",
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
                  className="inline-block"
                >
                  Start Your Tech Journey
                </motion.span>
                <br />
                <span className="font-medium text-gray-300 text-2xl sm:text-3xl md:text-4xl">and </span>
                <span className="text-red-400">Shape Your Future</span>
              </h1>

              <p className="text-gray-300 mt-4 text-base md:text-lg max-w-lg leading-relaxed">
                Industry-led IT courses crafted to help both beginners and
                professionals develop in-demand technology skills.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                <Link 
                  href="https://whatsapp.com/channel/0029Vb6Ogg21noyzgp0dwg2q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 border-2 border-white text-white py-2.5 px-5 rounded-lg hover:bg-white hover:text-black transition-all font-semibold shadow-md">
                    Join Community
                  </button>
                </Link>

                <Link href="/#courses">
                  <button className="bg-red-500 text-white py-2.5 px-5 rounded-lg hover:bg-red-600 transition-all font-semibold shadow-md cursor-pointer">
                    Explore Courses
                  </button>
                </Link>
              </div>

              {/* SOCIAL PROOF SECTION */}
              <div className="hidden md:flex items-center gap-6 mt-12 pt-6 border-t border-white/10">
                <div className="flex -space-x-3">
                  {studentimages.map((url, i) => (
                    <div
                      key={i}
                      className="relative w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800 shadow-md"
                    >
                      <Image
                        src={url}
                        alt={`Student ${i}`}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-base leading-tight">
                    Join 1,000+ students
                  </p>
                  <p className="text-gray-400 text-xs tracking-wide uppercase mt-0.5">
                    from 40+ countries worldwide
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
