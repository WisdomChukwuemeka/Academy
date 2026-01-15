"use client";

import { useState } from "react";
import { jobs } from "../localAPI/api";
import { MapPin, Layers, Search } from "lucide-react";

export default function JobsPage() {
  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  // Filter jobs by title & location
  const filteredJobs = jobs.filter((job) => {
    const titleMatch =
      job.title.toLowerCase().includes(titleQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(titleQuery.toLowerCase());

    const locationMatch = job.location
      .toLowerCase()
      .includes(locationQuery.toLowerCase());

    return titleMatch && locationMatch;
  });

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-6">

        {/* SEARCH BAR */}
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

          {/* LEFT – JOB CATEGORIES */}
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


          {/* CENTER – JOB LISTINGS */}
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

          {/* RIGHT – POPULAR JOBS */}
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
  );
}
