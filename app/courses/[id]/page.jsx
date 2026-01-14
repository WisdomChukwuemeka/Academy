"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

import { courses } from "@/app/lib/courses"; 
import Link from "next/link";

export default function CourseDetails() {
  const params = useParams();
  const courseId = parseInt(params.id);
  const course = courses.find((c) => c.id === courseId);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  if (!course) {
    return <div className="max-w-6xl mx-auto px-8 py-10">Course not found.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission, e.g., send to API
    // console.log("Enrollment data:", { ...formData, courseId: course.id });
    alert("Enrollment submitted successfully!");
    setShowForm(false);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-2">{course.title}</h1>
        {/* <p className="text-xl text-gray-600 mb-4">{course.desc}</p> */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>{course.ratings} ({course.ratingsCount} ratings)</span>
          <span className="mx-2">•</span>
          <span>{course.enrolled} students</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Image
              src={course.img}
              alt="course Image"
              width={800}
              height={450}
              className="w-full object-cover rounded-lg mb-8"
            />

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">About</h2>
              <p className="text-gray-600">{course.desc}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">What you'll learn</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                {course.syllabus.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-emerald-500">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black">Course content</h2>
              {/* <div className="flex justify-between mb-2 text-gray-600">
                <span>{course.syllabus.length} sections • {course.duration}</span>
              </div> */}
              <div className=" rounded-lg overflow-hidden">
                {course.syllabus.map((item, index) => (
                  <div key={index} className=" last:border-b-0 p-4 text-gray-600">
                    <div className="flex justify-between">
                      <span>Section {index + 1}: {item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Description</h2>
              <p className="text-gray-600">{course.content}</p>
            </section>

            <section className="mb-12">
              <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <Image 
                    src={course.profilepic || "/teachers/default.png"}
                    alt="Instructor Avatar"
                    width={254}
                    height={254}
                    className="w-50 h-50 md: rounded-full object-cover"
                    />   
                </div> {/* Placeholder avatar */}
                <div className="text-center md:text-start">
                    <h2 className="text-2xl font-bold text-black mb-0 md:mb-4
              text-center md:text-start">Instructor</h2>
                  <h3 className="text-xl font-semibold text-black">{course.tutor}</h3>
                  <p className="text-gray-600">{course.instructorBio}</p>
                </div>
              </div>
            </section>
          </div>

<div className="lg:col-span-1">
  <div className="sticky top-4 border rounded-lg overflow-hidden shadow-lg bg-white">
    <Image
      src={course.img}
      alt={course.title}
      width={400}
      height={225}
      className="w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-lg font-semibold text-black mb-4">
        This course includes:
      </h3>

      <ul className="space-y-4 text-gray-600 text-sm">
        <li className="flex items-center gap-3">
          <i className="bi bi-clock text-emerald-500 text-lg"></i>
          <div>
            <p className="font-medium">Duration</p>
            <p className="text-gray-500">{course.duration}</p>
          </div>
        </li>

        <li className="flex items-center gap-3">
          <i className="bi bi-book text-emerald-500 text-lg"></i>
          <div>
            <p className="font-medium">Subject</p>
            <p className="text-gray-500">{course.title}</p>
          </div>
        </li>

        <li className="flex  items-center gap-3">
          <i className="bi bi-award text-emerald-500 text-lg"></i>
          <div>
            <p className="font-medium">Certificate</p>
            <p className="text-gray-500">Yes</p>
          </div>
        </li>

        <li className="flex items-center gap-3">
          <i className="bi bi-globe text-emerald-500 text-lg"></i>
          <div>
            <p className="font-medium">Language</p>
            <p className="text-gray-500">English</p>
          </div>
        </li>

        <li className="flex items-center gap-3">
          <i className="bi bi-easel text-emerald-500 text-lg"></i>
          <div>
            <p className="font-medium">Mode of Learning</p>
            <p className="text-gray-500">Online/On-site</p>
          </div>
        </li>
      </ul>

    <Link href="https://wa.me/2347046455166">
      <button
        className="w-full bg-emerald-500 text-white py-3 px-6 rounded-md hover:bg-emerald-600 transition mt-6"
      >
        Enroll Now
      </button>
      </Link>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}