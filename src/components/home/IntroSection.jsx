import React from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8B1A1A] text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C2C2C] mb-6 leading-tight">
              A Taste of Italy,
              <br />
              <span className="italic text-[#8B1A1A]">Right Here at Home</span>
            </h2>
            <p className="text-[#2C2C2C]/70 leading-relaxed mb-4">
              At Ricardo's, every dish tells a story. We're a family-owned Italian restaurant
              in the heart of Glace Bay, Nova Scotia, serving up fresh pasta, handcrafted pizza,
              and classic Italian entrées made from recipes handed down through generations.
            </p>
            <p className="text-[#2C2C2C]/70 leading-relaxed mb-8">
              From our kitchen to your table, every ingredient is carefully selected, every sauce
              is simmered to perfection, and every plate is prepared with the kind of love you
              can taste. Whether you're joining us for a cozy dinner or ordering takeout for the
              family, Ricardo's is your home away from home.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-[#8B1A1A]">20+</p>
                <p className="text-xs text-[#2C2C2C]/50 uppercase tracking-wider mt-1">Years Serving</p>
              </div>
              <div className="w-px h-12 bg-[#2C2C2C]/10" />
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-[#8B1A1A]">50+</p>
                <p className="text-xs text-[#2C2C2C]/50 uppercase tracking-wider mt-1">Menu Items</p>
              </div>
              <div className="w-px h-12 bg-[#2C2C2C]/10" />
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-[#8B1A1A]">100%</p>
                <p className="text-xs text-[#2C2C2C]/50 uppercase tracking-wider mt-1">Homemade</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1b8967aad443500624ff9/58af11312_generated_ceedabc1.png"
                alt="Inside Ricardo's Italian Restaurant in Glace Bay"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#8B1A1A] text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="font-serif text-lg italic">"Like eating at Nonna's"</p>
              <p className="text-white/60 text-xs mt-1">– Our Guests</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}