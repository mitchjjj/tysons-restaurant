import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const dishes = [
  {
    name: "Margherita Pizza",
    description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
    price: "$16",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1b8967aad443500624ff9/7bb0c8589_generated_7b505a3c.png",
  },
  {
    name: "Fettuccine Alfredo",
    description: "Handmade fettuccine in a rich, creamy Parmigiano-Reggiano sauce",
    price: "$19",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1b8967aad443500624ff9/68ab0d716_generated_f59a5165.png",
  },
  {
    name: "Classic Bruschetta",
    description: "Toasted ciabatta with vine-ripened tomatoes, garlic, and fresh basil",
    price: "$12",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1b8967aad443500624ff9/46a9d1f44_generated_09606814.png",
  },
  {
    name: "Tiramisu",
    description: "Layers of espresso-soaked ladyfingers and mascarpone cream",
    price: "$10",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1b8967aad443500624ff9/b730d8a06_generated_c49d4ce0.png",
  },
];

export default function FeaturedDishes() {
  return (
    <section className="py-20 sm:py-28 bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#C4943A] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            From Our Kitchen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Featured Dishes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#3a3a3a]">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-lg font-semibold text-white">
                      {dish.name}
                    </h3>
                    <span className="text-[#C4943A] font-semibold text-sm shrink-0 ml-2">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={createPageUrl("Menu")}
            className="inline-flex items-center gap-2 text-[#C4943A] font-medium tracking-wider uppercase text-sm hover:text-white transition-colors group"
          >
            See Full Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}