import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1b8967aad443500624ff9/676634144_generated_ada832b5.png"
          alt="Fresh handmade Italian pasta at Ricardo's"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#C4943A] text-sm sm:text-base tracking-[0.3em] uppercase font-medium mb-6"
        >
          Welcome to Ricardo's
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
        >
          Authentic Italian Flavors
          <br />
          <span className="text-[#C4943A] italic">in the Heart of Glace Bay</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Fresh pasta, wood-fired pizza, and classic Italian dishes made with love
          and the finest ingredients — just like Nonna used to make.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={createPageUrl("Menu")}
            className="px-8 py-4 bg-[#8B1A1A] text-white rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#6B1414] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Menu
          </Link>
          <Link
            to={createPageUrl("OrderOnline")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/20 transition-all duration-300"
          >
            Order Online
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
}