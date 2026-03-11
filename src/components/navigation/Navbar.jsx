import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Menu", page: "Menu" },
  { name: "About", page: "About" },
  { name: "Order Online", page: "OrderOnline" },
  { name: "Contact", page: "Contact" },
];

export default function Navbar({ currentPageName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2C2C2C]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-3">
            <span className="text-3xl font-serif font-bold text-white tracking-wide">
              Ricardo's
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                  currentPageName === link.page
                    ? "text-[#C4943A]"
                    : "text-white/80 hover:text-[#C4943A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+19025551234"
              className="flex items-center gap-2 bg-[#8B1A1A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#6B1414] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (902) 555-1234
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2C2C2C]/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-colors ${
                    currentPageName === link.page
                      ? "text-[#C4943A] bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+19025551234"
                className="flex items-center justify-center gap-2 bg-[#8B1A1A] text-white px-5 py-3 rounded-full text-sm font-medium mt-4"
              >
                <Phone className="w-4 h-4" />
                (902) 555-1234
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}