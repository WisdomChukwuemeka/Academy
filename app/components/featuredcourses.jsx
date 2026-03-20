"use client";

import { motion } from "framer-motion";
import { courses } from "../localAPI/api";
import Link from "next/link";
import Image from "next/image";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Staggers the appearance of cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function FeaturedCoursesSection() {
  return (
    <section id="courses" className="px-6 py-16 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Courses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start your learning journey with our most popular industry-led courses, 
          designed to take you from beginner to professional.
        </p>
      </div>

      <motion.div
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`} className="group">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
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
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Duration</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {course.weeks} Weeks
                    </span>
                  </div>
                  
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Tuition</span>
                    <span className="text-sm font-bold text-gray-900">
                      ₦{course.price.toLocaleString("en-NG")}
                    </span>
                  </div>
                </div>

                <div className="mt-4 w-full bg-gray-50 group-hover:bg-red-600 text-gray-900 group-hover:text-white text-center py-3 rounded-xl font-bold text-sm transition-all">
                  View Course Details
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}