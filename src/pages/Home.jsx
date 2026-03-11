import React from "react";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import FeaturedDishes from "../components/home/FeaturedDishes";
import Testimonials from "../components/home/Testimonials";
import QuickInfo from "../components/home/QuickInfo";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <FeaturedDishes />
      <Testimonials />
      <QuickInfo />
    </div>
  );
}