import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Ricardo's</h3>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Authentic Italian cuisine made with love, fresh ingredients, and
              recipes passed down through generations. A Glace Bay tradition.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B1A1A] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B1A1A] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { name: "Home", page: "Home" },
                { name: "Our Menu", page: "Menu" },
                { name: "About Us", page: "About" },
                { name: "Order Online", page: "OrderOnline" },
                { name: "Contact", page: "Contact" },
              ].map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block text-sm text-white/60 hover:text-[#C4943A] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C4943A] shrink-0" />
                <p className="text-sm text-white/60">
                  123 Commercial Street<br />
                  Glace Bay, NS B1A 3C1
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C4943A] shrink-0" />
                <a href="tel:+19025551234" className="text-sm text-white/60 hover:text-white transition-colors">
                  (902) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C4943A] shrink-0" />
                <a href="mailto:info@ricardos.ca" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@ricardos.ca
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#C4943A] shrink-0" />
                <div className="text-sm text-white/60 space-y-1">
                  <p>Mon – Thu: 11am – 9pm</p>
                  <p>Fri – Sat: 11am – 10pm</p>
                  <p>Sunday: 12pm – 8pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Ricardo's Italian Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Glace Bay, Nova Scotia 🇨🇦
          </p>
        </div>
      </div>
    </footer>
  );
}