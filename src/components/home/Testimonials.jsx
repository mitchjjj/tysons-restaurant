import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mary MacDonald",
    text: "The best Italian food in Cape Breton, hands down! The pasta is always fresh and the sauce is to die for. We come here every Friday night.",
    rating: 5,
  },
  {
    name: "James Sullivan",
    text: "Ricardo's feels like stepping into a little Italian village. The pizza is incredible — crispy, chewy, and loaded with fresh toppings. A true gem in Glace Bay.",
    rating: 5,
  },
  {
    name: "Anne Boudreau",
    text: "We had our anniversary dinner here and it was absolutely perfect. The tiramisu alone is worth the visit. So warm and welcoming — we'll be back!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#8B1A1A] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            What People Say
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C2C2C]">
            Our Guests Love Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C4943A] text-[#C4943A]" />
                ))}
              </div>
              <p className="text-[#2C2C2C]/70 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center">
                  <span className="text-[#8B1A1A] font-serif font-bold text-sm">
                    {t.name[0]}
                  </span>
                </div>
                <p className="font-semibold text-sm text-[#2C2C2C]">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}