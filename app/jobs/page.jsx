"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  MapPin,
  Search,
  Briefcase,
  Clock,
  Building2,
  Layers,
  ChevronRight,
  Filter,
  SearchX,
} from "lucide-react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const[titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("Nigeria");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Note: Ensure your environment variable is prefixed correctly for Next.js
  const API_KEY = process.env.NEXT_PUBLIC_CAREERJET_API_KEY; 

  const fetchJobs = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setHasSearched(true);

    try {
      const res = await fetch(
        `https://public.api.careerjet.net/search?affid=${API_KEY}&keywords=${titleQuery}&location=${locationQuery}&page=1`
      );
      const data = await res.json();
      setJobs(data.jobs ||[]);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 
        ========================================
        HERO SECTION
        ========================================
      */}
      <div className="bg-linear-to-r from-red-900 via-red-850 to-red-800 pb-24 pt-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Find Your Next <span className="text-orange-200">Tech Role</span>
          </h1>
          <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto">
            Discover thousands of job opportunities across top companies and
            startups in your area.
          </p>
        </div>
      </div>

      {/* 
        ========================================
        FLOATING SEARCH BAR
        ========================================
      */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <form
          onSubmit={fetchJobs}
          className="bg-white rounded-2xl shadow-xl p-3 flex flex-col md:flex-row gap-3 border border-gray-100"
        >
          <div className="flex items-center gap-3 w-full bg-gray-50 rounded-xl px-4 py-3 border border-transparent focus-within:border-red-500 focus-within:bg-white transition-all">
            <Search size={20} className="text-red-500 shrink-0" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={titleQuery}
              onChange={(e) => setTitleQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="hidden md:block w-px bg-gray-200 my-2"></div>

          <div className="flex items-center gap-3 w-full bg-gray-50 rounded-xl px-4 py-3 border border-transparent focus-within:border-red-500 focus-within:bg-white transition-all">
            <MapPin size={20} className="text-red-500 shrink-0" />
            <input
              type="text"
              placeholder="City, state, or country"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-md shadow-red-600/20 disabled:opacity-70 flex items-center justify-center min-w-[140px]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Searching
              </span>
            ) : (
              "Search Jobs"
            )}
          </button>
        </form>
      </div>

      {/* 
        ========================================
        MAIN CONTENT LAYOUT
        ========================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
              <div className="bg-gray-50/50 px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                <Filter size={18} className="text-red-600" />
                <h3 className="font-semibold text-gray-800">Popular Categories</h3>
              </div>
              <ul className="divide-y divide-gray-50 text-sm text-gray-600">
                {[
                  "Software Engineering",
                  "Frontend Development",
                  "Backend Development",
                  "Data Science & Analytics",
                  "UI/UX Design",
                  "DevOps & Cloud",
                  "Product Management",
                ].map((cat, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setTitleQuery(cat);
                      // Auto trigger search with slight delay for state to update 
                      // (Ideally, refactor to pass query directly to fetchJobs)
                    }}
                    className="px-5 py-3 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    {cat}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* JOB FEED */}
          <main className="lg:col-span-9 space-y-6">
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {hasSearched ? `Job Results` : `Recommended Jobs`}
              </h2>
              {!loading && jobs.length > 0 && (
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {jobs.length} jobs found
                </span>
              )}
            </div>

            {loading ? (
              // SKELETON LOADERS
              <div className="space-y-4">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center animate-pulse">
                    <div className="w-14 h-14 bg-gray-200 rounded-xl shrink-0"></div>
                    <div className="flex-1 space-y-3 w-full">
                      <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
                      <div className="flex gap-2 mt-2">
                        <div className="h-6 bg-gray-100 rounded-full w-20"></div>
                        <div className="h-6 bg-gray-100 rounded-full w-24"></div>
                      </div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded-xl w-full sm:w-32 mt-4 sm:mt-0"></div>
                  </div>
                ))}
              </div>
            ) : jobs.length > 0 ? (
              // ACTUAL JOB CARDS
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-red-100 transition-all duration-300 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center relative overflow-hidden"
                  >
                    {/* Hover Left Border Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>

                    {/* Icon / Avatar Placeholder */}
                    <div className="h-14 w-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <Briefcase size={24} />
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 space-y-2 w-full">
                      <a 
                        href={job.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-1"
                      >
                        {job.title}
                      </a>

                      <p className="text-sm text-gray-700 font-medium flex items-center gap-1.5">
                        <Building2 size={16} className="text-gray-400" />
                        {job.company}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500 pt-1">
                        <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                          <MapPin size={13} className="text-red-500" /> 
                          {job.locations || job.location || "Remote"}
                        </span>

                        {job.date && (
                          <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                            <Clock size={13} className="text-red-500" /> 
                            {job.date}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="w-full sm:w-auto mt-2 sm:mt-0 flex shrink-0">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-gray-50 hover:bg-red-600 text-red-700 hover:text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 border border-gray-200 hover:border-red-600"
                      >
                        View & Apply
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // EMPTY STATE
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center">
                <div className="bg-gray-50 p-6 rounded-full mb-4">
                  <SearchX size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500 max-w-md">
                  We couldn't find any jobs matching "{titleQuery}" in "{locationQuery}". 
                  Try adjusting your search terms or location.
                </p>
                <button 
                  onClick={() => {
                    setTitleQuery("");
                    setLocationQuery("Nigeria");
                  }}
                  className="mt-6 text-red-600 font-medium hover:underline flex items-center gap-1"
                >
                  Clear search filters <ChevronRight size={16} />
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}