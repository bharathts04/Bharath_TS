"use client";

import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = new Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      });
    }, [springValue]);

  return <span ref={ref} />;
}