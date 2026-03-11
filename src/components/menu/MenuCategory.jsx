import React from "react";
import { motion } from "framer-motion";

export default function MenuCategory({ title, description, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2C] mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-[#2C2C2C]/50 text-sm">{description}</p>
        )}
        <div className="w-16 h-0.5 bg-[#8B1A1A] mt-4" />
      </div>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-start gap-4 py-3 border-b border-[#2C2C2C]/5"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[#2C2C2C]">{item.name}</h3>
                {item.popular && (
                  <span className="text-[10px] uppercase tracking-wider bg-[#8B1A1A] text-white px-2 py-0.5 rounded-full font-medium">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-[#2C2C2C]/50 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
            <span className="text-[#8B1A1A] font-semibold whitespace-nowrap">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}