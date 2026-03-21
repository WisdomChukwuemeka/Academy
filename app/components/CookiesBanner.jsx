"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("scippra_cookies_accepted");
    if (!hasAccepted) {
      // Delay the popup slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("scippra_cookies_accepted", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-[400px] z-[9999]"
        >
          {/* Glassmorphism Container */}
          <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-[2rem] p-6 md:p-8">
            
            {/* Decorative background blur element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />

            <div className="flex items-start gap-4">
              <div className="bg-red-600 p-3 rounded-2xl shadow-lg shadow-red-200 shrink-0">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-slate-900 font-bold text-lg mb-2">Cookies & Privacy</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  At Scippra, we use cookies to enhance your experience. Your data is 
                  <span className="text-red-600 font-semibold"> 100% protected </span> 
                  under our secure privacy policy.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all active:scale-95"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 bg-white/50 hover:bg-white text-slate-700 text-sm font-bold py-3 px-6 rounded-xl border border-slate-200 transition-all"
                  >
                    Customize
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Security Badge */}
            <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                Data Encryption Active
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}