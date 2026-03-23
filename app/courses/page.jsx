"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "../localAPI/api";
import Link from "next/link";
import Image from "next/image";
import { Search, BookOpen, Clock, CreditCard } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // FIXED FILTER LOGIC:
  // 1. Converts search query to lowercase
  // 2. Uses (course.field || "") to prevent "undefined" errors if data is missing
  // 3. Converts data to lowercase for a perfect match
  const filteredCourses = courses.filter((course) => {
    const search = searchQuery.toLowerCase();
    const title = (course.title || "").toLowerCase();
    const category = (course.category || "").toLowerCase();
    
    return title.includes(search) || category.includes(search);
  });

  return (
    <div className="bg-white min-h-screen">
      {/* --- HEADER & SEARCH SECTION --- */}
      <section className="bg-slate-50 border-b border-gray-100 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Explore Our Courses
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Find the perfect program to accelerate your career. Search by course name or technology.
          </motion.p>

          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for 'Web Development', 'UI/UX'..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all shadow-sm text-gray-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* --- COURSES GRID --- */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        {filteredCourses.length > 0 ? (
          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={cardVariants}
                  layout 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link href={`/courses/${course.id}`} className="group block h-full">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Image Section */}
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={course.img}
                          alt={course.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="  
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                            Classroom
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                          {course.category}
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                          {course.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                          {course.desc}
                        </p>

                        {/* Footer Info */}
                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="flex items-center gap-1 text-[10px] text-gray-400 uppercase font-bold">
                              <Clock className="w-3 h-3" /> Duration
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                              {course.weeks} Weeks
                            </span>
                          </div>
                          
                          <div className="flex flex-col text-right">
                            <span className="flex items-center justify-end gap-1 text-[10px] text-gray-400 uppercase font-bold">
                              <CreditCard className="w-3 h-3" /> Tuition
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              ₦{course.price?.toLocaleString("en-NG")}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 w-full bg-red-600 group-hover:bg-red-700 text-white group-hover:text-white text-center py-3 rounded-xl font-bold text-sm transition-all">
                          View Course Details
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search to find what you're looking for.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-6 text-red-600 font-bold hover:underline"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}