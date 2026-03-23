// "use client";

// import { useState, useEffect, FormEvent } from "react";
// import {
//   MapPin,
//   Search,
//   Briefcase,
//   Clock,
//   Building2,
//   Layers,
//   ChevronRight,
//   Filter,
//   SearchX,
// } from "lucide-react";

// export default function JobsPage() {
//  const [jobs, setJobs] = useState([]);
//   const [titleQuery, setTitleQuery] = useState("");
//   const [locationQuery, setLocationQuery] = useState("Lagos");
//   const [loading, setLoading] = useState(false);
//   const [hasSearched, setHasSearched] = useState(false);

//   const fetchJobs = async (e) => {
//     if (e) e.preventDefault();

//     setLoading(true);
//     setHasSearched(true);

//     try {
//       const res = await fetch(
//         `/api/jobs?keywords=${encodeURIComponent(
//           titleQuery || "software developer"
//         )}&location=${encodeURIComponent(locationQuery)}`
//       );

//       if (!res.ok) throw new Error("Failed to fetch jobs");

//       const data = await res.json();

//       console.log("API RESPONSE:", data);

//       setJobs(data.jobs || []);
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//       setJobs([]);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* 
//         ========================================
//         HERO SECTION
//         ========================================
//       */}
//       <div className="bg-linear-to-r from-red-900 via-red-850 to-red-800 pb-24 pt-16 px-4">
//         <div className="max-w-7xl mx-auto text-center space-y-4">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//             Find Your Next <span className="text-orange-200">Tech Role</span>
//           </h1>
//           <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto">
//             Discover thousands of job opportunities across top companies and
//             startups in your area.
//           </p>
//         </div>
//       </div>

//       {/* 
//         ========================================
//         FLOATING SEARCH BAR
//         ========================================
//       */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
//         <form
//           onSubmit={fetchJobs}
//           className="bg-white rounded-2xl shadow-xl p-3 flex flex-col md:flex-row gap-3 border border-gray-100"
//         >
//           <div className="flex items-center gap-3 w-full bg-gray-50 rounded-xl px-4 py-3 border border-transparent focus-within:border-red-500 focus-within:bg-white transition-all">
//             <Search size={20} className="text-red-500 shrink-0" />
//             <input
//               type="text"
//               placeholder="Job title, keywords, or company"
//               value={titleQuery}
//               onChange={(e) => setTitleQuery(e.target.value)}
//               className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
//             />
//           </div>

//           <div className="hidden md:block w-px bg-gray-200 my-2"></div>

//           <div className="flex items-center gap-3 w-full bg-gray-50 rounded-xl px-4 py-3 border border-transparent focus-within:border-red-500 focus-within:bg-white transition-all">
//             <MapPin size={20} className="text-red-500 shrink-0" />
//             <input
//               type="text"
//               placeholder="City, state, or country"
//               value={locationQuery}
//               onChange={(e) => setLocationQuery(e.target.value)}
//               className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-md shadow-red-600/20 disabled:opacity-70 flex items-center justify-center min-w-[140px]"
//           >
//             {loading ? (
//               <span className="flex items-center gap-2">
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                 Searching
//               </span>
//             ) : (
//               "Search Jobs"
//             )}
//           </button>
//         </form>
//       </div>

//       {/* 
//         ========================================
//         MAIN CONTENT LAYOUT
//         ========================================
//       */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* LEFT SIDEBAR */}
//           <aside className="lg:col-span-3 space-y-6">
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
//               <div className="bg-gray-50/50 px-5 py-4 border-b border-gray-100 flex items-center gap-2">
//                 <Filter size={18} className="text-red-600" />
//                 <h3 className="font-semibold text-gray-800">Popular Categories</h3>
//               </div>
//               <ul className="divide-y divide-gray-50 text-sm text-gray-600">
//                 {[
//                   "Software Engineering",
//                   "Frontend Development",
//                   "Backend Development",
//                   "Data Science & Analytics",
//                   "UI/UX Design",
//                   "DevOps & Cloud",
//                   "Product Management",
//                 ].map((cat, i) => (
//                   <li
//                     key={i}
//                     onClick={() => {
//                       setTitleQuery(cat);
//                       // Auto trigger search with slight delay for state to update 
//                       // (Ideally, refactor to pass query directly to fetchJobs)
//                     }}
//                     className="px-5 py-3 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors flex items-center justify-between group"
//                   >
//                     {cat}
//                     <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>

//           {/* JOB FEED */}
//           <main className="lg:col-span-9 space-y-6">
            
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-gray-900">
//                 {hasSearched ? `Job Results` : `Recommended Jobs`}
//               </h2>
//               {!loading && jobs.length > 0 && (
//                 <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                   {jobs.length} jobs found
//                 </span>
//               )}
//             </div>

//             {loading ? (
//               // SKELETON LOADERS
//               <div className="space-y-4">
//                 {[...Array(4)].map((_, idx) => (
//                   <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center animate-pulse">
//                     <div className="w-14 h-14 bg-gray-200 rounded-xl shrink-0"></div>
//                     <div className="flex-1 space-y-3 w-full">
//                       <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
//                       <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
//                       <div className="flex gap-2 mt-2">
//                         <div className="h-6 bg-gray-100 rounded-full w-20"></div>
//                         <div className="h-6 bg-gray-100 rounded-full w-24"></div>
//                       </div>
//                     </div>
//                     <div className="h-10 bg-gray-200 rounded-xl w-full sm:w-32 mt-4 sm:mt-0"></div>
//                   </div>
//                 ))}
//               </div>
//             ) : jobs.length > 0 ? (
//               // ACTUAL JOB CARDS
//               <div className="space-y-4">
//                 {jobs.map((job, index) => (
//                   <div
//                     key={index}
//                     className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-red-100 transition-all duration-300 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center relative overflow-hidden"
//                   >
//                     {/* Hover Left Border Accent */}
//                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>

//                     {/* Icon / Avatar Placeholder */}
//                     <div className="h-14 w-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
//                       <Briefcase size={24} />
//                     </div>

//                     {/* Job Details */}
//                     <div className="flex-1 space-y-2 w-full">
//                       <a 
//                         href={job.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-1"
//                       >
//                         {job.title}
//                       </a>

//                       <p className="text-sm text-gray-700 font-medium flex items-center gap-1.5">
//                         <Building2 size={16} className="text-gray-400" />
//                         {job.company}
//                       </p>

//                       <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500 pt-1">
//                         <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
//                           <MapPin size={13} className="text-red-500" /> 
//                           {job.locations || job.location || "Remote"}
//                         </span>

//                         {job.date && (
//                           <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
//                             <Clock size={13} className="text-red-500" /> 
//                             {job.date}
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     {/* Actions */}
//                     <div className="w-full sm:w-auto mt-2 sm:mt-0 flex shrink-0">
//                       <a
//                         href={job.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-full text-center bg-gray-50 hover:bg-red-600 text-red-700 hover:text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 border border-gray-200 hover:border-red-600"
//                       >
//                         View & Apply
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               // EMPTY STATE
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center">
//                 <div className="bg-gray-50 p-6 rounded-full mb-4">
//                   <SearchX size={48} className="text-gray-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
//                 <p className="text-gray-500 max-w-md">
//                   We couldn't find any jobs matching "{titleQuery}" in "{locationQuery}". 
//                   Try adjusting your search terms or location.
//                 </p>
//                 <button 
//                   onClick={() => {
//                     setTitleQuery("");
//                     setLocationQuery("Nigeria");
//                   }}
//                   className="mt-6 text-red-600 font-medium hover:underline flex items-center gap-1"
//                 >
//                   Clear search filters <ChevronRight size={16} />
//                 </button>
//               </div>
//             )}
//           </main>

//         </div>
//       </div>
//     </div>
//   );
// }







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