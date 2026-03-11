import React from "react";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF6E3]">
      <style>{`
        :root {
          --color-wine: #8B1A1A;
          --color-cream: #FDF6E3;
          --color-olive: #556B2F;
          --color-gold: #C4943A;
          --color-charcoal: #2C2C2C;
        }
      `}</style>
      <Navbar currentPageName={currentPageName} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}