"use client";

import { motion } from "framer-motion";

/* Bubble config — deterministic (SSR safe) */
const bubbles = [
  { size: 6, left: "15%", delay: 0 },
  { size: 8, left: "30%", delay: 0.4 },
  { size: 10, left: "50%", delay: 0.8 },
  { size: 7, left: "65%", delay: 1.2 },
  { size: 9, left: "80%", delay: 1.6 },
];

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="flex items-center gap-4">

        {/* LOGO CONTAINER */}
        <div className="relative w-20 h-20">

          {/* HEX BORDER */}
          <div className="absolute inset-0 clip-hex border-4 border-red-600 z-20" />

          {/* RED WATER FILL */}
          <motion.div
            className="absolute inset-0 bg-red-600 clip-hex overflow-hidden z-10"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom" }}
          >
            {/* BUBBLES */}
            {bubbles.map((bubble, i) => (
              <motion.span
                key={i}
                className="absolute bottom-0 rounded-full bg-white/40"
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  left: bubble.left,
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -70, opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: bubble.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>

          {/* BLACK OVERLAY FILL */}
          <motion.div
            className="absolute inset-0 bg-black clip-hex z-0"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom" }}
          />
        </div>

        {/* TEXT */}
        <motion.h1
          className="text-3xl font-bold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="text-red-600">Scip</span>
          <span className="text-indigo-950">pra</span>
        </motion.h1>

      </div>
    </div>
  );
}
