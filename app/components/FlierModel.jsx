"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function FlierModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per browser session/visit
    const hasSeenFlier = sessionStorage.getItem("scippra_flier_seen");
    if (!hasSeenFlier) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("scippra_flier_seen", "true");
    setIsOpen(false);
  };

  // Lock background scrolling & allow closing with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Scippra Tech Academy Cohort 4 Flier"
    >
      {/* Modal Container — stops click from bubbling to backdrop */}
      <div
        className="relative max-w-md w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close / Cancel Button */}
        <button
          onClick={handleClose}
          aria-label="Close flier"
          className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Flier Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
          <Image
            src="/flier.jpg"
            alt="Scippra Tech Academy Cohort 4 - Learn Frontend & Build Real Websites"
            width={600}
            height={800}
            priority
            className="w-auto max-w-full max-h-[82vh] h-auto object-contain"
          />
        </div>

        {/* Optional Cancel text button below for mobile clarity */}
        <button
          onClick={handleClose}
          className="mt-3 px-5 py-2 rounded-full bg-white/90 text-slate-900 text-sm font-semibold shadow hover:bg-white transition cursor-pointer"
        >
          Continue to Website
        </button>
      </div>
    </div>
  );
}