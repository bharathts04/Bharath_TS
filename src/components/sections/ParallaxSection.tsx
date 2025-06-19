"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="team" ref={containerRef} className="relative h-[80vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/parallax-bg.jpg"
          alt="Ferrari F1 Car on track"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div className="text-center text-white" style={{ opacity }}>
          <h2 className="text-4xl md:text-7xl font-extrabold drop-shadow-lg">
            Driven by Passion.
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Charles Leclerc & Carlos Sainz. Two drivers, one mission: to bring the championship back to Maranello.
          </p>
        </motion.div>
      </div>
    </section>
  );
}