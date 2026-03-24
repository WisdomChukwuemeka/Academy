"use client";

// app/page.js or app/cohort/page.js
import React, { useState, useEffect } from 'react';

const CohortLandingPage = () => {
  // Cohort start date
  const startDate = "May 1st, 2026";
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time remaining until May 1st, 2026
  useEffect(() => {
    const targetDate = new Date('May 1, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // WhatsApp number (format: country code + number, no plus sign or spaces)
  const whatsappNumber = "2349059987650"; // Replace with your actual Nigerian WhatsApp number
  const whatsappMessage = encodeURIComponent(
`Hello! I'm interested in the Web Development Cohort 1 starting ${startDate} (₦40,000). Please guide me on how to register.`  );
  const whatsappLink = `https://wa.me/2349059947650?text=I%20am%20interested%20in%20enrolling%20in%20the%20course%20Web%20Development%20Training%20Cohort%201%20(₦40,000).%20Please%20guide%20me%20on%20how%20to%20register.`;

  // Nigerian pricing
  const pricingTiers = [
    {
      name: 'Cohort 1 Admission',
      price: '₦40,000',
      note: 'One-time payment',
      features: [
        'Full 4 week live training',
        'Personalized code reviews',
        'Certificate of completion',
        'Bonus: React & Next.js intro',
        'Lifetime access to recordings',
      ],
      buttonText: 'Apply via WhatsApp →',
      highlighted: true,
    },
  ];

  const scheduleHighlights = [
    { week: 'Week 1-2', title: 'HTML5 & Semantic Architecture', output: 'Personal CV Site' },
    { week: 'Week 3-4', title: 'CSS Mastery: Flex, Grid & Animations', output: 'Landing Page Clone' },
    { week: 'Week 5-7', title: 'JavaScript: DOM, APIs & Async', output: 'Interactive Dashboard' },
    { week: 'Week 4-10', title: 'Git, React Intro & Deployment', output: 'Final Portfolio Project' },
  ];

  const faqs = [
    {
      q: 'When does Cohort 1 start?',
      a: `Cohort 1 kicks off on ${startDate}. Registration closes one week before start date.`,
    },
    {
      q: 'How do I pay?',
      a: 'After clicking "Apply via WhatsApp", we\'ll guide you through payment via bank transfer or Paystack. You\'ll receive instant confirmation and access to our community.',
    },
    {
      q: 'Is this for beginners?',
      a: 'Yes! This cohort is designed for absolute beginners. We start from the basics and build up to professional projects.',
    },
    {
      q: 'What if I miss a live session?',
      a: 'All sessions are recorded and uploaded within 24 hours. You\'ll have lifetime access to the entire course library.',
    },
    {
      q: 'Will I get a certificate?',
      a: 'Yes, upon completing the final project, you\'ll receive a verifiable certificate from Scippra.',
    },
  ];

  return (
   <div className="bg-gray-50 min-h-screen font-sans relative">
      {/* Glass Morphism Countdown Timer - Top Right Corner */}
      <div className="fixed top-15 right-4 z-50 md:top-20 md:right-6">
        <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg border border-white/20 p-3 md:p-4">
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              🚀 Cohort Starts In
            </p>
            <div className="flex gap-2 md:gap-3">
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 shadow-sm">
                  <span className="text-xl md:text-2xl font-bold text-red-600">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1 font-medium">Days</p>
              </div>
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 shadow-sm">
                  <span className="text-xl md:text-2xl font-bold text-red-600">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1 font-medium">Hours</p>
              </div>
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 shadow-sm">
                  <span className="text-xl md:text-2xl font-bold text-red-600">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1 font-medium">Mins</p>
              </div>
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 shadow-sm">
                  <span className="text-xl md:text-2xl font-bold text-red-600">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1 font-medium">Secs</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 hidden md:block">
              Until May 1st, 2026
            </p>
          </div>
        </div>
      </div>


      <main className="relative mb-5">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-red-700 to-red-600 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="bg-red-500 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
               Cohort 1: Nigerian Edition
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Web Development Training
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
              Master HTML, CSS, and JavaScript in 4 weeks.
            </p>
            <div className="bg-yellow-400 text-red-900 inline-block px-6 py-3 rounded-lg mb-4">
              <p className="font-bold text-lg">Cohort Starts: <span className="text-xl">{startDate}</span></p>
            </div>
            <p className="text-lg mb-4 bg-red-400 inline-block px-6 py-2 rounded-full">
               Special Launch Price: <span className="font-bold text-xl">₦40,000 only!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                className="bg-white text-red-700 px-4 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
              >
                Apply via WhatsApp
              </a>
              <a
                href="#curriculum"
                className="border-2 border-white text-white px-4 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-700 transition"
              >
                View Curriculum
              </a>
            </div>
            <p className="mt-6 text-red-200 text-sm flex items-center justify-center gap-2">
              <span> Limited spots available</span>
              <span>•</span>
              <span> Lifetime access to recordings</span>
              <span>•</span>
              <span> WhatsApp support</span>
            </p>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
                4-Week Learning Path
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Project-based curriculum designed to build your portfolio while you learn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scheduleHighlights.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                  <div className="text-red-600 font-bold text-sm mb-2">{item.week}</div>
                  <h3 className="text-xl text-gray-700 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm"> {item.output}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-red-50 p-6 rounded-xl border border-red-200 text-center">
              <p className="font-semibold text-red-400">
                 Bonus: Introduction to React & Next.js + Free Hosting Setup
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Deploy your projects on Vercel for free and build a professional portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section - Nigerian Naira */}
        <section id="pricing" className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
                Simple, Affordable Pricing
              </h2>
              <p className="text-gray-600">
                One-time payment. No hidden fees. Start your tech journey today.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-500"
                >
                  <div className="bg-red-500 text-white text-center text-sm font-semibold py-2">
                    COHORT 1 • LIMITED SEATS
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-400">{tier.name}</h3>
                    <div className="mt-4">
                      <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
                      <span className="text-gray-500"> / full course</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{tier.note}</p>
                    <a
                      href={whatsappLink}
                      className="mt-6 block w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition text-lg"
                    >
                      {tier.buttonText}
                    </a>
                    <p className="text-xs text-gray-400 mt-4">
                       Bank transfer, Paystack, or card payment available
                    </p>
                  </div>
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <ul className="space-y-3">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-red-500 mr-3 flex shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
               Early bird offer: First 20 students get a free 1-on-1 career consultation.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-400 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-linear-to-r from-red-700 to-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Become a Web Developmenteloper?
            </h2>
            <p className="text-red-100 mb-4 max-w-2xl mx-auto text-lg">
              Join Cohort 1 and go from beginner to job-ready in 4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                className="bg-white text-red-700 px-4 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
              >
                Apply Now on WhatsApp 
              </a>
            </div>
            <p className="mt-6 text-red-200 text-sm">
               Click the button above to start your registration via WhatsApp
            </p>
          </div>
        </section>
      </main>

    </div>
  );
};

export default CohortLandingPage;