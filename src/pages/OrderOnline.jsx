import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, ShoppingBag, Truck, Clock, MapPin, ChevronRight } from "lucide-react";

export default function OrderOnline() {
  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 bg-[#2C2C2C] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#2C2C2C]" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C4943A] text-sm tracking-[0.3em] uppercase font-medium mb-3"
          >
            Ricardo's
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white"
          >
            Order Online
          </motion.h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Order Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#556B2F]/10 flex items-center justify-center mb-6">
              <ShoppingBag className="w-7 h-7 text-[#556B2F]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-3">Pickup</h2>
            <p className="text-[#2C2C2C]/60 leading-relaxed mb-6">
              Order ahead and pick up your food fresh from our kitchen. Ready in 20-30 minutes.
              Skip the wait and enjoy Ricardo's at home.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#2C2C2C]/50 mb-6">
              <Clock className="w-4 h-4" />
              <span>Ready in 20-30 minutes</span>
            </div>
            <a
              href="tel:+19025551234"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#6B1414] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to Order
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#8B1A1A]/10 flex items-center justify-center mb-6">
              <Truck className="w-7 h-7 text-[#8B1A1A]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-3">Delivery</h2>
            <p className="text-[#2C2C2C]/60 leading-relaxed mb-6">
              Enjoy Ricardo's Italian cuisine delivered right to your door. We deliver within
              the Glace Bay area. Minimum order of $25.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#2C2C2C]/50 mb-6">
              <MapPin className="w-4 h-4" />
              <span>Glace Bay area — $4 delivery fee</span>
            </div>
            <a
              href="tel:+19025551234"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#6B1414] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to Order
            </a>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2C2C2C] rounded-2xl p-8 sm:p-12 mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            How to Order
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Browse Our Menu", desc: "Check out our full menu to decide what you'd like" },
              { step: "2", title: "Give Us a Call", desc: "Call (902) 555-1234 to place your order" },
              { step: "3", title: "Enjoy!", desc: "Pick it up or we'll deliver to your door" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#8B1A1A] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-serif font-bold text-lg">{s.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View Menu CTA */}
        <div className="text-center">
          <Link
            to={createPageUrl("Menu")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B1A1A] text-white rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#6B1414] transition-colors"
          >
            View Full Menu
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}