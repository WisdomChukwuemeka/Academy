"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'; // 1. IMPORT NEXT.JS IMAGE
import { ChevronLeft, ChevronRight, Star, MapPin, Briefcase, Award } from 'lucide-react';
import { instructor } from '../localAPI/api';
import { motion } from 'framer-motion';
export default function InstructorPage() {
  const [instructors, setInstructors] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // In a real app, you'd fetch from your API here
    setInstructors(instructor);
  },[]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="instructors" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-3xl">
            <div 
            
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 mb-6"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Distinguished Instructors
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Learn from the <span className="text-red-700">Best</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Our instructors are rigorously vetted professionals with extensive experience building 
              scalable products, platforms, and systems used across modern industries.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-red-500 hover:text-red-700 transition-all"
          >
            Apply to Teach
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:block">
            <button
              onClick={() => scroll('left')}
              className="p-4 bg-white rounded-full shadow-xl border border-slate-100 text-slate-600 hover:text-red-600 hover:scale-110 transition-all"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:block">
            <button
              onClick={() => scroll('right')}
              className="p-4 bg-white rounded-full shadow-xl border border-slate-100 text-slate-600 hover:text-red-600 hover:scale-110 transition-all"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {instructors.map((inst) => (
              <div
                className="w-[320px] shrink-0 snap-start"
              >
                <div className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-500">
                  
                  {/* Image Container */}
                  <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
                    
                    {/* 2. THE FIX: Replaced standard <img> with Next.js <Image> */}
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      sizes="320px"
                      placeholder="blur" // Gives you the zero-lag blurred placeholder
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Verified Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{inst.name}</h3>
                    <p className="text-red-600 font-bold text-sm mb-4 uppercase tracking-wider">{inst.role}</p>
                    
                    <div className="space-y-3 pt-2 border-t border-slate-50">
                      <div className="flex items-center gap-3 text-slate-500 text-sm">
                        <Briefcase className="w-4 h-4 text-slate-400" />
                        <span>at <span className="text-slate-900 font-semibold">{inst.company}</span></span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 text-sm">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{inst.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 text-sm">
                        <Award className="w-4 h-4 text-slate-400" />
                        <span>{inst.experience} Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="flex justify-center md:hidden mt-4">
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-red-500" />
            <div className="w-2 h-1 rounded-full bg-slate-200" />
            <div className="w-2 h-1 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
}