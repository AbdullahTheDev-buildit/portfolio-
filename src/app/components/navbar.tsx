"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const menuVariants = {
    initial: { x: "-100%" },
    animate: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      <nav className="p-3 sticky top-0 z-20 max-w-4xl mx-auto md:border border-white rounded-xl bg-zinc-900/90 md:mb-4 ">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            abdullah<span className="text-sky-400">Mohd</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.line
                  x1="4"
                  y1="6"
                  x2="20"
                  y2="6"
                  stroke="white"
                  strokeWidth="2"
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5.5 : 0 }}
                />
                <motion.line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="white"
                  strokeWidth="2"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                />
                <motion.line
                  x1="4"
                  y1="18"
                  x2="20"
                  y2="18"
                  stroke="white"
                  strokeWidth="2"
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5.5 : 0 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 z-10"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <Link
                  href={link.href}
                  className="text-4xl font-bold hover:text-sky-400 transition-colors"
                  onClick={() => setIsOpen(false)} 
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export { Navbar };
