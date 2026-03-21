"use client";

import { useState } from "react";
import { Send, User, Mail, Briefcase, Link as LinkIcon, MessageSquare } from "lucide-react";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      expertise: e.target.expertise.value,
      portfolio: e.target.portfolio.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Application submitted! Our team will review your profile and contact you soon.",
        });
        e.target.reset();
      } else {
        setStatus({
          type: "error",
          message: "Submission failed. Please try again or email info@scippra.com directly.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "A connection error occurred. Please check your internet and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      {/* ALERT MESSAGES */}
      {status.type && (
        <div className={`p-4 rounded-xl text-sm font-bold transition-all border ${
          status.type === "success" 
            ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
            : "bg-red-50 text-red-800 border-red-200"
        }`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-500 ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input name="name" type="text" required disabled={isSubmitting} placeholder="e.g. Jane Doe"
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none text-gray-900" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-500 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input name="email" type="email" required disabled={isSubmitting} placeholder="jane@example.com"
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none text-gray-900" 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-500 ml-1">Primary Expertise</label>
          <div className="relative">
            <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <select name="expertise" required disabled={isSubmitting}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none text-gray-900 appearance-none">
              <option value="">Select Field</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-500 ml-1">Portfolio/LinkedIn</label>
          <div className="relative">
            <LinkIcon className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input name="portfolio" type="url" required disabled={isSubmitting} placeholder="https://..."
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none text-gray-900" 
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase text-gray-500 ml-1">Professional Bio / Pitch</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <textarea name="message" rows="4" required disabled={isSubmitting} placeholder="Tell us about your experience and why you want to teach..."
            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none text-gray-900" 
          />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full flex justify-center items-center gap-3 bg-red-600 text-white font-bold px-4 py-4 rounded-xl hover:bg-red-700 shadow-lg shadow-red-100 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>Apply to Teach <Send className="w-4 h-4" /></>
        )}
      </button>
    </form>
  );
}