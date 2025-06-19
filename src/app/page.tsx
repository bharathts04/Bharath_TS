"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import ProductSection from "@/components/sections/ProductSection";
import StatsSection from "@/components/sections/StatsSection";
import StrikingAnimationSection from "@/components/sections/StrikingAnimationSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This effect ensures the loader is only shown once on initial visit.
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
  };
  
  if (loading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <main className="overflow-x-hidden bg-primary-light dark:bg-primary-dark">
      <HeroSection />
      <ProductSection />
      <ParallaxSection />
      <StatsSection />
      <TestimonialSection />
      <StrikingAnimationSection />
    </main>
  );
}