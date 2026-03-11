import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-6">
                Visit Ricardo's
              </h2>
              <p className="text-[#2C2C2C]/60 leading-relaxed mb-8">
                We'd love to hear from you! Whether you have a question about our menu,
                want to make a reservation, or plan a special event — don't hesitate to reach out.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1">Address</h3>
                  <p className="text-sm text-[#2C2C2C]/60">
                    123 Commercial Street<br />
                    Glace Bay, NS B1A 3C1
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1">Phone</h3>
                  <a href="tel:+19025551234" className="text-sm text-[#8B1A1A] hover:underline">
                    (902) 555-1234
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1">Email</h3>
                  <a href="mailto:info@ricardos.ca" className="text-sm text-[#8B1A1A] hover:underline">
                    info@ricardos.ca
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1">Hours</h3>
                  <div className="text-sm text-[#2C2C2C]/60 space-y-0.5">
                    <p>Mon – Thu: 11am – 9pm</p>
                    <p>Fri – Sat: 11am – 10pm</p>
                    <p>Sunday: 12pm – 8pm</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden shadow-sm h-80 sm:h-96"
        >
          <iframe
            title="Ricardo's Location in Glace Bay"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11479.894072488834!2d-59.96!3d46.1971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b674e0e4c5e7f55%3A0x5087c1e0e0d5e4c5!2sGlace%20Bay%2C%20NS!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}