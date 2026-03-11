"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const[status, setStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Start loading state & clear previous messages
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        e.target.reset(); // Clear form fields
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please check your connection and try again.",
      });
    } finally {
      // Stop loading state to re-enable the button
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      
      {/* SUCCESS / ERROR ALERT MESSAGES */}
      {status.type && (
        <div
          className={`p-4 rounded-lg text-sm font-medium transition-all ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-5">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all disabled:opacity-60"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all disabled:opacity-60"
        />
      </div>

      <input
        name="subject"
        type="text"
        placeholder="Subject"
        required
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all disabled:opacity-60"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="How can we help you?"
        required
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-y disabled:opacity-60"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center gap-2 bg-indigo-950 text-white font-medium px-4 py-3 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-950/30 transition-all disabled:bg-indigo-950/70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            {/* Loading Spinner SVG */}
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

    </form>
  );
}