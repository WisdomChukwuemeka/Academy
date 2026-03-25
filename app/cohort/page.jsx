"use client";

import Head from "next/head";
import Image from "next/image";
import { cohortinstructor } from "../localAPI/api"
import { Briefcase, Quote, Star, CheckCircle, TrendingUp } from 'lucide-react';
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
`Hello! I'm interested in the Web Development Cohort 2 starting ${startDate} (₦45,000). Please guide me on how to register.`  );
  const whatsappLink = `https://wa.me/2349059987650?text=I%20am%20interested%20in%20enrolling%20in%20the%20course%20Web%20Development%20Training%20Cohort%201%20(₦45,000).%20Please%20guide%20me%20on%20how%20to%20register.`;

  // Nigerian pricing
  const pricingTiers = [
    {
      name: 'Cohort 2 Admission',
      price: '₦45,000',
      note: 'One-time payment',
      features: [
        'Full 5 week live training',
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
    { week: 'Week 1', title: 'HTML5 & Semantic Architecture', output: 'Personal CV Site' },
    { week: 'Week 2', title: 'CSS Mastery: Flex, Grid & Animations', output: 'Landing Page Clone' },
    { week: 'Week 3-4', title: 'JavaScript: DOM, APIs & Async', output: 'Interactive Dashboard' },
    { week: 'Week 5', title: 'Git, React Intro & Deployment', output: 'Final Portfolio Project' },
  ];

  const faqs = [
    {
      q: 'When does Cohort 2 start?',
      a: `Cohort 2 kicks off on ${startDate}. Registration closes one week before start date.`,
    },
    {
      q: 'How do I pay?',
      a: 'After clicking "Apply via WhatsApp", we\'ll guide you through payment via bank transfer. You\'ll receive instant confirmation and access to our community.',
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
    <>

<Head>
      <title>Web Development Training Nigeria | Cohort 2 (₦45,000) | Scippra</title>

      <meta
        name="description"
        content="Join our Web Development Training in Nigeria. Learn HTML, CSS, JavaScript, React & Next.js in 5 weeks. Cohort starts May 1st, 2026. Limited slots available."
      />

      <meta
        name="keywords"
        content="web development training nigeria, learn coding lagos, javascript course nigeria, frontend development course, react training nigeria, next.js course, tech training nigeria, coding bootcamp nigeria"
      />

      <meta name="author" content="Scippra" />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href="https://scippra.com/cohort" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content="Web Development Training Nigeria | Cohort 2 (₦45,000)" />
      <meta property="og:description" content="Master HTML, CSS, JavaScript & React in 5 weeks. Join Cohort 2 starting May 1st, 2026." />
      <meta property="og:url" content="https://scippra.com/cohort" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://scippra.com/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Web Development Training Nigeria (₦45,000)" />
      <meta name="twitter:description" content="Become a job ready web developer in 5 weeks. Join Cohort 2 now." />
      <meta name="twitter:image" content="https://scippra.com/og-image.png" />

      {/* Geo (Local SEO boost) */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Port Harcourt, Nigeria" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>

   <div className="bg-gray-45 min-h-screen font-sans relative">
      {/* Glass Morphism Countdown Timer - Top Right Corner */}
      <div className="fixed top-15 right-4 z-45 md:top-20 md:right-6">
        <div className="backdrop-blur-md bg-white/45 rounded-2xl shadow-lg border border-white/20 p-3 md:p-4">
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
               Cohort Starts In
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
            <p className="text-[10px] text-gray-450 mt-2 hidden md:block">
              Until May 1st, 2026
            </p>
          </div>
        </div>
      </div>


      <main className="relative mb-5">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-red-700 to-red-600 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="bg-red-450 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
               Cohort 2
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Web Development Training
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
              Master HTML, CSS, and JavaScript in 5 weeks.
            </p>
            <div className="bg-indigo-950 text-white inline-block px-6 py-3 rounded-full mb-4">
              <p className="font-bold text-lg">Cohort Starts: <span className="text-xl">{startDate}</span></p>
            </div>
            <p className="text-lg mb-4 text-white inline-block px-6 py-2 rounded-full">
               Special Launch Price: <span className="font-bold text-xl"> ₦45,000</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                5-Week Learning Path
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Project based curriculum designed to build your portfolio while you learn.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
              {scheduleHighlights.map((item, idx) => (
                <div key={idx} className="bg-gray-45 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                  <div className="text-red-600 font-bold text-sm mb-2">{item.week}</div>
                  <h3 className="text-xl text-gray-700 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm"> {item.output}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-red-45 p-6 rounded-xl border border-red-200 text-center">
              <p className="font-semibold text-red-700">
                 Bonus: Introduction to React & Next.js + Free Hosting Setup
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Deploy your projects on Vercel for free and build a professional portfolio.
              </p>
            </div>
          </div>
        </section>




        {/* 1. THE MENTOR SPOTLIGHT (Restyled Instructor Section) */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-red-500/20 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 mb-4 flex items-center gap-2">
                   Expert Led Instruction
                </h2>
                <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                  Learn from Mentors who <span className="text-red-700 underline decoration-red-200 underline-offset-8">build for a living.</span>
                </h3>
              </div>
              <p className="text-slate-600 text-lg max-w-sm border-l-4 border-red-600 pl-6 italic">
                "We don't just teach syntax; we teach how to survive and thrive in the global tech industry."
              </p>
            </div>

            {/* Unique Mentor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mentor 1 - Replace with actual data from your API */}
              {cohortinstructor.map((instructor) => (
                <div key={instructor.id} className="group relative">
                  <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl shadow-slate-200 transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-6">
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        sizes="320px"
                        placeholder="blur" // Gives you the zero-lag blurred placeholder
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
                          <p className="text-red-700 font-bold text-sm tracking-widest uppercase mb-1">Lead Instructor</p>
                          <h4 className="text-xl font-bold text-slate-900">{instructor.name}</h4>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-4 pb-6">
                      <div className="flex items-center gap-4 mb-4 text-slate-500 text-sm">
                          <Briefcase className="w-4 h-4 text-slate-400" />
                        <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                           Senior Dev
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        Software Engineer at Scippra Tech Academy. Specialized in building scalable web applications.
                      </p>
                   
                    </div>
                  </div>
                  {/* Decorative background shape */}
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-red-100 rounded-3xl -z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. WHY THIS COHORT (The Convincer) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
              {/* Glow effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 blur-[100px]"></div>

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8">Why students chose Scippra in 2026</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 bg-red-600/20 border border-red-600/30 rounded-2xl flex items-center justify-center">
                        <span className="text-red-500 font-bold">01</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Job-Ready Portfolio</h4>
                        <p className="text-slate-400">We don't do "hello world". You will build real-world applications that you can actually show to employers.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 bg-red-600/20 border border-red-600/30 rounded-2xl flex items-center justify-center">
                        <span className="text-red-500 font-bold">02</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Active WhatsApp Community</h4>
                        <p className="text-slate-400">Never get stuck. Our community of mentors and peers are available 24/7 to debug your code.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 bg-red-600/20 border border-red-600/30 rounded-2xl flex items-center justify-center">
                        <span className="text-red-500 font-bold">03</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Verified Certification</h4>
                        <p className="text-slate-400">Get a certificate that is recognized across Nigeria and globally.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-slate-300">Joined by 21+ students this week</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                     <div className="flex justify-between text-sm mb-1">
                        <span>Registration Progress</span>
                        <span className="text-red-500 font-bold text-lg">82% Full</span>
                     </div>
                     <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-600 w-[82%] shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                     </div>
                     <p className="text-xs text-slate-400 italic">Only 9 slots remaining for Cohort 2</p>
                  </div>

                  <a
                    href={whatsappLink}
                    className="flex items-center justify-center gap-3 w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg shadow-red-600/20"
                  >
                    Secure My Slot Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


         <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
                <span className="w-8 h-[2px] bg-red-600"></span>
                The Scippra Impact
                <span className="w-8 h-[2px] bg-red-600"></span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                From <span className="text-red-700 italic">"I can't do this"</span> to <br /> 
                "I just got hired."
              </h3>
              <p className="text-slate-600 text-lg">
                We don't just teach code; we build confidence. See how 5 weeks changed everything for these Nigerians.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Decorative Element */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              
              {/* Testimonial 1 - The Career Changer */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-red-100 mb-4" />
                  <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
                    "I was a secondary school teacher earning ₦35k monthly. I thought coding was only for 'math geniuses'. 
                    <span className="bg-red-50 font-bold px-1 ml-1 text-slate-900">Scippra broke it down so simply</span> that I built my first portfolio in week 3. Today, I'm a remote junior dev earning 4x my old salary."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-1">
                      Chioma A. <CheckCircle className="w-4 h-4 text-blue-500" />
                    </h4>
                    <p className="text-sm text-slate-500">Ex-Teacher → Frontend Dev</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - The Skeptic (Center/Featured) */}
              <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-red-900/20 flex flex-col justify-between text-white relative md:-translate-y-4 hover:scale-[1.02] transition-transform duration-300">
                <div>
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-white/10 mb-4" />
                  <p className="text-slate-200 text-xl font-medium leading-relaxed mb-6">
                    "I almost didn't register. But the 
                    <span className="text-red-400 font-bold mx-1">24/7 WhatsApp support</span> here is real. 
                    When I got stuck on JavaScript loops at 9PM, a mentor was there to debug it with me. It’s the best ₦45,000 I’ve ever spent."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-1">
                      Tunde W. <CheckCircle className="w-4 h-4 text-red-500" />
                    </h4>
                    <p className="text-sm text-slate-400">Freelance Web Designer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - The High Achiever */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-red-100 mb-4" />
                  <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
                    "The Next.js bonus week was the game-changer. I used the project we built in class to 
                    <span className="bg-green-50 font-bold px-1 ml-1 text-slate-900">land a gig on Upwork</span> 
                   before the cohort even ended. Scippra doesn't just teach coding, they teach you how to make money."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-1">
                      Emeka O. <CheckCircle className="w-4 h-4 text-blue-500" />
                    </h4>
                    <p className="text-sm text-slate-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </section>


        {/* 3. FLOATING TRUST BADGE (Mobile Conversion Booster) */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden">
            <a 
              href={whatsappLink}
              className="bg-green-600 text-white flex items-center justify-between px-6 py-4 rounded-2xl shadow-2xl animate-bounce-subtle"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                  <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.329 1.441 5.1 1.442 5.463 0 9.904-4.44 9.906-9.903.001-2.646-1.029-5.133-2.902-7.007-1.871-1.871-4.358-2.901-7.004-2.902-5.463 0-9.903 4.44-9.905 9.903-.001 1.932.553 3.813 1.597 5.449l-1.018 3.715 3.816-.999z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-80 leading-none">Limited Slots</p>
                  <p className="text-sm font-bold">Join Cohort 2 (₦45,000)</p>
                </div>
              </div>
              <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold uppercase">Pay Now</span>
            </a>
        </div>

        {/* CSS for Subtle Animations */}
        <style jsx global>{`
          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-subtle {
            animation: bounce-subtle 3s infinite ease-in-out;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Pricing Section - Nigerian Naira */}
        <section id="pricing" className="py-16 md:py-20 bg-gray-45">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
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
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-450"
                >
                  <div className="bg-red-700 text-white text-center text-sm font-semibold py-2">
                    Cohort 2 • LIMITED SEATS
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-700">{tier.name}</h3>
                    <div className="mt-4">
                      <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
                      <span className="text-gray-700"> / full course</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{tier.note}</p>
                    <a
                      href={whatsappLink}
                      className="mt-6 block w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition text-lg"
                    >
                      {tier.buttonText}
                    </a>
                    <p className="text-xs text-gray-700 mt-4">
                       Bank transfer
                    </p>
                  </div>
                  <div className="border-t border-gray-200 p-6 bg-gray-45">
                    <ul className="space-y-3">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-red-450 mr-3 flex shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            <p className="text-center text-gray-700 text-sm mt-4">
               Early bird offer: First 20 students get a free 1-on-1 career consultation.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{faq.q}</h3>
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
              Join Cohort 2 and go from beginner to job ready in 5 weeks.
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
    </>
  );
};

export default CohortLandingPage;