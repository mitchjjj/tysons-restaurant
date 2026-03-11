import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    text: "Every dish is prepared with genuine care, just like a meal cooked at home by family.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    text: "We source the finest local produce and import authentic Italian ingredients for that genuine flavor.",
  },
  {
    icon: Users,
    title: "Community First",
    text: "We're proud to be part of Glace Bay. Our neighbors are our family, and this restaurant is your home.",
  },
  {
    icon: Award,
    title: "Traditional Recipes",
    text: "Our recipes have been passed down through generations, preserving the authentic taste of Italy.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1b8967aad443500624ff9/58af11312_generated_ceedabc1.png"
          alt="Ricardo's Italian Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#C4943A] text-sm tracking-[0.3em] uppercase font-medium mb-3"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-serif font-bold text-white"
            >
              About Ricardo's
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C2C] mb-8">
              A Family Tradition,
              <span className="italic text-[#8B1A1A]"> Since Day One</span>
            </h2>
            <div className="space-y-6 text-[#2C2C2C]/70 leading-relaxed text-base sm:text-lg">
              <p>
                Ricardo's began with a simple dream: to bring the warmth and flavors of
                an Italian family kitchen to the beautiful community of Glace Bay, Nova Scotia.
                What started as a small neighborhood spot has grown into one of Cape Breton's
                most beloved dining destinations.
              </p>
              <p>
                Our founder believed that great food doesn't need to be complicated — it
                needs to be made with love, patience, and the best ingredients you can find.
                That philosophy hasn't changed. Every morning, our kitchen comes alive with the
                aroma of fresh dough being kneaded, sauces simmering on the stove, and herbs
                being chopped by hand.
              </p>
              <p>
                We're not just a restaurant — we're a gathering place. A spot where families
                celebrate milestones, friends reconnect over a glass of Chianti, and newcomers
                to Glace Bay feel instantly at home. Our tables have witnessed first dates,
                birthday parties, holiday dinners, and countless ordinary evenings made special
                by good food and great company.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-[#2C2C2C]/10" />
      </div>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B1A1A] text-sm tracking-[0.3em] uppercase font-medium mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C2C]">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#8B1A1A]/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-[#8B1A1A]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Come Visit Us
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Whether you're craving a quick slice or a full Italian feast, we'd love to
            see you at Ricardo's. Pull up a chair, grab a glass of wine, and let us
            take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19025551234"
              className="px-8 py-4 bg-[#8B1A1A] text-white rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#6B1414] transition-colors"
            >
              Call for Reservations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}