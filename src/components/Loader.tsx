"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loaderVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const barContainerVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const LShapeVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1.5, duration: 0.5, ease: "backOut" },
  },
  exit: {
    opacity: 0,
    rotate: -90,
    transition: { duration: 0.3 },
  },
};

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Bar, 2: L-Shape

  useEffect(() => {
    const phase1Timer = setTimeout(() => setPhase(2), 1500);
    const phase2Timer = setTimeout(() => {
      setPhase(3); // Start exiting
      setTimeout(onLoadingComplete, 500); // Allow exit animation to finish
    }, 2500);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          variants={loaderVariants}
          exit="exit"
        >
          <div className="w-48 h-8 relative flex items-center justify-center">
            <AnimatePresence>
              {phase === 1 && (
                <motion.div
                  key="bar"
                  className="w-full h-3"
                  variants={barContainerVariants}
                  initial="initial"
                  exit="exit"
                >
                  <div className="w-full h-full bg-zinc-800 relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}
              {phase === 2 && (
                <motion.div key="l-shape" variants={LShapeVariants} initial="initial" animate="animate" exit="exit">
                  <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-6 h-12 bg-white"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-6 bg-white"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}