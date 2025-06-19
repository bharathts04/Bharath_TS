"use client";

import AnimatedCounter from "../ui/AnimatedCounter";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const statsData = [
  { 
    title: "Championship Wins", 
    value: 16, 
    change: 1, 
    changeType: "up",
    history: [12, 13, 14, 15, 16] 
  },
  { 
    title: "Race Victories", 
    value: 244, 
    change: 5, 
    changeType: "up",
    history: [230, 235, 238, 239, 244]
  },
  { 
    title: "Podium Finishes", 
    value: 812, 
    change: 22, 
    changeType: "up",
    history: [750, 770, 785, 790, 812]
  },
];

const StatCard = ({ stat }: { stat: typeof statsData[0] }) => {
  const maxValue = Math.max(...stat.history);
  return (
    <motion.div 
      className="bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-text-muted-light dark:text-text-muted-dark">{stat.title}</h3>
      <div className="flex items-baseline gap-4 mt-2">
        <p className="text-5xl font-bold text-text-light dark:text-text-dark">
          <AnimatedCounter value={stat.value} />
        </p>
        <span className={`flex items-center text-sm font-semibold ${stat.changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {stat.changeType === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {stat.change}%
        </span>
      </div>
      <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">vs Last Season</p>
      
      <div className="mt-8 space-y-3">
        {stat.history.map((val, index) => (
          <div key={index} className="flex items-center gap-4 text-sm">
            <span className="w-10 text-text-muted-light dark:text-text-muted-dark">{2020 + index}</span>
            <div className="flex-1 bg-gray-300 dark:bg-gray-700 rounded-full h-4">
              <motion.div 
                className="bg-accent-red h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${(val / maxValue) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 * index }}
              />
            </div>
            <span className="w-12 text-right font-medium text-text-light dark:text-text-dark">{val}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 md:py-32 bg-primary-light dark:bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center text-text-light dark:text-text-dark mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          A Legacy of Victory
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat) => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}