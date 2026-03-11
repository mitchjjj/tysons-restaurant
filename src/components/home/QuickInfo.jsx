import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function QuickInfo() {
  return (
    <section className="py-20 bg-[#8B1A1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/20 translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#C4943A]" />
            </div>
            <h3 className="text-white font-serif text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-white/70 text-sm">
              123 Commercial Street<br />
              Glace Bay, NS B1A 3C1
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#C4943A]" />
            </div>
            <h3 className="text-white font-serif text-xl font-semibold mb-2">Hours</h3>
            <p className="text-white/70 text-sm">
              Mon – Thu: 11am – 9pm<br />
              Fri – Sat: 11am – 10pm<br />
              Sunday: 12pm – 8pm
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#C4943A]" />
            </div>
            <h3 className="text-white font-serif text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-white/70 text-sm mb-4">
              (902) 555-1234
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="text-[#C4943A] text-sm font-medium tracking-wider uppercase hover:text-white transition-colors"
            >
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}