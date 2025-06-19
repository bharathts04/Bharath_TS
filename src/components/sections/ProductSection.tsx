"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "../ui/ProductCard";
import { AnimatePresence, motion } from "framer-motion";

type Category = "wear" | "cars" | "helmets";

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("wear");

  return (
    <section id="shop" className="py-20 md:py-32 bg-primary-light dark:bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center text-text-light dark:text-text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          The 2024 Collection
        </motion.h2>
        <motion.p 
            className="text-center text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          Wear the passion. Own the legacy. Explore the latest official merchandise from the Scuderia Ferrari team.
        </motion.p>
        
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {(Object.keys(products) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 relative ${
                activeCategory === category ? "text-white" : "text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-accent-red rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">{category}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {products[activeCategory].map((product, index) => (
              <motion.div
                key={`${activeCategory}-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}