"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Shop", href: "#shop" },
  { name: "Team", href: "#team" },
  { name: "Stats", href: "#stats" },
  { name: "Fans", href: "#fans" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || isOpen ? "bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-accent-red">
                <Image src="/images/logo-dark.svg" alt="Ferrari Logo" width={40} height={50} className="dark:hidden" />
                <Image src="/images/logo-light.svg" alt="Ferrari Logo" width={40} height={50} className="hidden dark:block" />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-accent-red dark:hover:text-accent-red transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center">
                <ThemeToggle />
                <div className="md:hidden ml-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-accent-red focus:outline-none"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
                </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
            <motion.div 
                className="md:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-text-light dark:text-text-dark hover:text-accent-red hover:bg-secondary-light dark:hover:bg-secondary-dark"
                    >
                    {link.name}
                    </a>
                ))}
                </div>
            </motion.div>
        )}
      </motion.nav>
    </>
  );
}