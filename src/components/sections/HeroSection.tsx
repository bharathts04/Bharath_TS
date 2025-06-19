"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const smoothMouse = {
    x: useSpring(mouseX, { damping: 40, stiffness: 400, mass: 0.1 }),
    y: useSpring(mouseY, { damping: 40, stiffness: 400, mass: 0.1 }),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        src="/videos/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <motion.div
        className="absolute w-96 h-96 bg-white/5 rounded-full pointer-events-none"
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(100px)",
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }} // Delay to show after loader
        >
            <button className="group flex items-center justify-center gap-4 px-8 py-8 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:scale-105">
                <span className="text-4xl md:text-6xl font-light tracking-[0.2em]">PLAY REEL</span>
                <div className="p-4 bg-white rounded-full">
                    <Play className="w-8 h-8 text-black fill-black" />
                </div>
            </button>
        </motion.div>
      </div>
    </section>
  );
}