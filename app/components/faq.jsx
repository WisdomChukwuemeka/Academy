"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Will I get a Certificate from ErikodxIT?",
    answer:
      "Yes. Upon successful completion of any course at ErikodxIT, you will receive a professionally recognized certificate that validates your skills and boosts your credibility. Our certificates can be added to your CV, LinkedIn profile, and job applications to improve your employability in today’s competitive tech market.",
  },
  {
    question: "How long do ErikodxIT courses last?",
    answer:
      "Course duration varies depending on the program, but all ErikodxIT courses are self-paced. This allows you to learn at your convenience while completing hands-on projects and real-world tasks designed to help you master practical, job-ready skills efficiently.",
  },
  {
    question: "Do I need prior experience to enroll at ErikodxIT?",
    answer:
      "No prior experience is required. ErikodxIT is beginner-friendly and designed for learners starting from zero. At the same time, our courses are structured to help professionals upskill, reskill, and advance their careers in data, AI, and IT fields.",
  },
  {
    question: "What platform is used for ErikodxIT classes?",
    answer:
      "All ErikodxIT classes are delivered 100% online through interactive learning platforms. You get 24/7 access to video lessons, hands-on projects, expert mentorship, and a supportive learning community—so you can learn anytime, anywhere.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our courses
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {/* Question */}
                <div className="flex justify-between items-center p-4">
                  <p className="font-medium text-gray-800">
                    {faq.question}
                  </p>
                  <span
                    className={`text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Answer (Animated) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100 px-4 pb-4"
                      : "max-h-0 opacity-0 px-4"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
