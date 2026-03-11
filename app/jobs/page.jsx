"use client";

import { useState, useEffect } from "react";
import { jobs } from "../localAPI/api";
import { 
  MapPin, 
  Layers, 
  Search, 
  User, 
  Clock, 
  Briefcase, 
  MailOpen, 
  Sparkles 
} from "lucide-react";

export default function JobsPage() {
  // ============================================================================
  // ORIGINAL LOGIC (Kept intact for future use)
  // ============================================================================
  const[titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const titleMatch =
      job.title.toLowerCase().includes(titleQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(titleQuery.toLowerCase());

    const locationMatch = job.location
      .toLowerCase()
      .includes(locationQuery.toLowerCase());

    return titleMatch && locationMatch;
  });

  // ============================================================================
  // NEW ANIMATION LOGIC (For the Coming Soon Scene)
  // ============================================================================
  const[animPhase, setAnimPhase] = useState("waiting"); // 'waiting' | 'offer'

  // This loops the animation between waiting and receiving an offer every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimPhase((prev) => (prev === "waiting" ? "offer" : "waiting"));
    }, 3500);
    return () => clearInterval(interval);
  },[]);

  return (
    <>
      {/* 
        =========================================================================
        NEW COMING SOON UI & ANIMATION
        ========================================================================= 
      */}
      <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6 overflow-hidden relative">
        <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10 border border-gray-100">
          
          {/* Animated Scene Container */}
          <div className="relative h-48 flex items-center justify-center mb-6">
            
            {/* The Candidate (Man) */}
            <div
              className={`transition-all duration-700 ease-in-out transform ${
                animPhase === "offer" ? "scale-110 -translate-x-6" : "scale-100"
              }`}
            >
              <div className="bg-indigo-50 p-6 rounded-full relative shadow-inner">
                <User size={64} className="text-indigo-900" />
                
                {/* Waiting Clock Indicator */}
                <div
                  className={`absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-md transition-opacity duration-300 ${
                    animPhase === "waiting" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Clock size={24} className="text-amber-500 animate-[spin_4s_linear_infinite]" />
                </div>
              </div>
            </div>

            {/* The Job Offer Envelope */}
            <div
              className={`absolute transition-all duration-700 ease-out flex flex-col items-center ${
                animPhase === "offer"
                  ? "opacity-100 translate-x-12 -translate-y-4 scale-100"
                  : "opacity-0 translate-x-24 -translate-y-12 scale-50"
              }`}
            >
              <div className="bg-emerald-100 p-4 rounded-2xl shadow-xl relative animate-bounce">
                <MailOpen size={40} className="text-emerald-600" />
                <Sparkles
                  size={20}
                  className="text-amber-400 absolute -top-2 -right-2 animate-pulse"
                />
              </div>
            </div>
            
          </div>

          {/* Text Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Job Board <span className="text-indigo-600">Coming Soon</span>
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
            We are currently brewing up amazing tech career opportunities for you. 
            Get your resume ready, your next big offer is on the way!
          </p>

          <div className="inline-flex items-center gap-2 bg-indigo-950 text-white px-6 py-3 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-shadow cursor-default">
            <Briefcase size={16} />
            <span>Stay tuned for updates</span>
          </div>

        </div>
      </main>

      {/* 
        =========================================================================
        ORIGINAL JOB BOARD UI (COMMENTED OUT FOR FUTURE USE)
        To use your job board again:
        1. Delete or comment out the <main> block above.
        2. Remove the {/* and *} wrapping the code below.
        =========================================================================
      */}
      
      {/*
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 space-y-6">

          <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2 w-full">
              <Search size={18} className="text-red-400" />
              <input
                type="text"
                placeholder="Search job title or company"
                value={titleQuery}
                onChange={(e) => setTitleQuery(e.target.value)}
                className="w-full outline-none text-sm text-black"
              />
            </div>

            <div className="flex items-center gap-2 w-full">
              <MapPin size={18} className="text-red-400" />
              <input
                type="text"
                placeholder="Search by location"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="w-full outline-none text-sm text-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            <aside className="md:col-span-3">
              <div className="bg-white rounded-xl shadow">
                <div className="bg-linear-to-r from-blue-900 to-blue-700 text-white px-4 py-3 rounded-t-xl font-semibold flex items-center gap-2">
                  <Layers size={18} /> Tech Job Categories
                </div>

                <ul className="divide-y text-sm text-gray-700">
                  {[
                    "Software Development Jobs",
                    "Frontend Developer Jobs",
                    "Backend Developer Jobs",
                    "Full Stack Developer Jobs",
                    "Mobile App Developer Jobs",
                    "Data Analyst Jobs",
                    "Data Science Jobs",
                    "Machine Learning & AI Jobs",
                    "Cloud & DevOps Jobs",
                    "Cybersecurity Jobs",
                    "UI / UX Designer Jobs",
                    "QA & Software Testing Jobs",
                  ].map((cat, i) => (
                    <li
                      key={i}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <main className="md:col-span-6 space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-xl shadow p-5">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {job.title}
                    </h2>

                    <p className="text-sm text-gray-600 font-medium mt-1">
                      {job.company}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Layers size={14} /> {job.amount}
                      </span>
                    </div>

                    <div className="flex justify-end mt-4">
                      <button className="bg-blue-900 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-800 transition">
                        Apply Now →
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 text-sm">
                  No jobs found matching your search.
                </p>
              )}
            </main>

            <aside className="md:col-span-3">
              <div className="bg-white rounded-xl shadow">
                <div className="bg-linear-to-r from-blue-900 to-blue-700 text-white px-4 py-3 rounded-t-xl font-semibold">
                  Popular Jobs
                </div>

                <ul className="divide-y text-sm">
                  {jobs.slice(0, 4).map((job) => (
                    <li key={job.id} className="px-4 py-4">
                      <p className="font-semibold text-gray-800">{job.title}</p>
                      <p className="text-gray-500 text-xs">{job.company}</p>
                      <p className="text-gray-500 text-xs">{job.location}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </div>
      */}
    </>
  );
}