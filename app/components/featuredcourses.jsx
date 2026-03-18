"use client";
import { motion } from "framer-motion";
import { courses } from "../localAPI/api"; // Adjust path as needed
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";


// ── FEATURED COURSES SECTION ───────────────────────────────────────
export default function FeaturedCoursesSection() {
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