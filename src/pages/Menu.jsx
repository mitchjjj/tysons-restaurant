import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuCategory from "../components/menu/MenuCategory";

const menuData = {
  Appetizers: {
    description: "Start your meal with our Italian favorites",
    items: [
      { name: "Classic Bruschetta", description: "Vine-ripened tomatoes, garlic, basil on toasted ciabatta", price: "$12", popular: true },
      { name: "Calamari Fritti", description: "Lightly breaded and fried with marinara and lemon aioli", price: "$14" },
      { name: "Caprese Salad", description: "Fresh mozzarella, heirloom tomatoes, basil, balsamic glaze", price: "$13" },
      { name: "Stuffed Mushrooms", description: "Cremini mushrooms with Italian sausage, herbs, and parmesan", price: "$13" },
      { name: "Antipasto Board", description: "Cured meats, cheeses, olives, roasted peppers, and crostini", price: "$18" },
      { name: "Minestrone Soup", description: "Hearty Italian vegetable soup with pasta and beans", price: "$9" },
    ],
  },
  Pasta: {
    description: "Handmade pasta, prepared fresh daily",
    items: [
      { name: "Fettuccine Alfredo", description: "Rich and creamy Parmigiano-Reggiano sauce", price: "$19", popular: true },
      { name: "Spaghetti Bolognese", description: "Slow-simmered meat sauce with San Marzano tomatoes", price: "$18" },
      { name: "Penne Arrabbiata", description: "Spicy tomato sauce with garlic and red chili flakes", price: "$16" },
      { name: "Lasagna Classica", description: "Layers of pasta, ricotta, mozzarella, and meat sauce", price: "$20", popular: true },
      { name: "Linguine alle Vongole", description: "Littleneck clams in white wine, garlic, and butter sauce", price: "$22" },
      { name: "Ravioli di Ricotta", description: "House-made ricotta ravioli in sage brown butter sauce", price: "$19" },
      { name: "Pappardelle al Funghi", description: "Wide ribbons with wild mushrooms, truffle cream, and parmesan", price: "$21" },
      { name: "Carbonara", description: "Spaghetti with pancetta, egg, pecorino, and black pepper", price: "$18" },
    ],
  },
  Pizza: {
    description: "Hand-stretched dough, baked to perfection",
    items: [
      { name: "Margherita", description: "San Marzano tomatoes, fresh mozzarella, basil", price: "$16", popular: true },
      { name: "Pepperoni", description: "Classic pepperoni with mozzarella and tomato sauce", price: "$17" },
      { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, and parmesan", price: "$19" },
      { name: "Prosciutto e Rucola", description: "Prosciutto di Parma, arugula, shaved parmesan", price: "$20" },
      { name: "Vegetale", description: "Roasted peppers, mushrooms, olives, onions, artichoke hearts", price: "$17" },
      { name: "Diavola", description: "Spicy salami, hot peppers, mozzarella, tomato sauce", price: "$18" },
    ],
  },
  Entrées: {
    description: "Hearty Italian main courses",
    items: [
      { name: "Chicken Parmigiana", description: "Breaded chicken breast, marinara, melted mozzarella, side of spaghetti", price: "$22", popular: true },
      { name: "Veal Marsala", description: "Pan-seared veal in a rich Marsala wine and mushroom sauce", price: "$26" },
      { name: "Salmon Piccata", description: "Atlantic salmon with lemon, capers, and white wine butter sauce", price: "$24" },
      { name: "Eggplant Parmigiana", description: "Layered eggplant with marinara and melted cheese", price: "$18" },
      { name: "Osso Buco", description: "Slow-braised veal shank with gremolata and risotto Milanese", price: "$28" },
    ],
  },
  Desserts: {
    description: "Sweet endings to your Italian experience",
    items: [
      { name: "Tiramisu", description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa", price: "$10", popular: true },
      { name: "Panna Cotta", description: "Vanilla bean cream with berry compote", price: "$9" },
      { name: "Cannoli", description: "Crispy shells filled with sweet ricotta and chocolate chips", price: "$8" },
      { name: "Gelato", description: "Three scoops — ask about today's flavors", price: "$8" },
      { name: "Affogato", description: "Vanilla gelato drowned in a shot of hot espresso", price: "$7" },
    ],
  },
  Drinks: {
    description: "Italian wines, cocktails, and non-alcoholic beverages",
    items: [
      { name: "House Red Wine", description: "Chianti Classico, Tuscany", price: "$10 / $38" },
      { name: "House White Wine", description: "Pinot Grigio, Veneto", price: "$10 / $36" },
      { name: "Prosecco", description: "Sparkling wine from the Veneto region", price: "$11 / $42" },
      { name: "Aperol Spritz", description: "Aperol, prosecco, soda water", price: "$12" },
      { name: "Limoncello", description: "Chilled Italian lemon liqueur", price: "$8" },
      { name: "Espresso", description: "Single or double shot", price: "$3 / $4" },
      { name: "San Pellegrino", description: "Sparkling mineral water", price: "$4" },
      { name: "Italian Soda", description: "Choice of flavors with cream", price: "$5" },
    ],
  },
};

const categories = Object.keys(menuData);

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(null);
  const filtered = activeCategory ? { [activeCategory]: menuData[activeCategory] } : menuData;

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
            Our Menu
          </motion.h1>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 z-30 bg-[#FDF6E3]/95 backdrop-blur-md border-b border-[#2C2C2C]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all ${
                !activeCategory
                  ? "bg-[#8B1A1A] text-white"
                  : "bg-transparent text-[#2C2C2C]/60 hover:text-[#2C2C2C]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#8B1A1A] text-white"
                    : "bg-transparent text-[#2C2C2C]/60 hover:text-[#2C2C2C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {Object.entries(filtered).map(([category, data]) => (
          <MenuCategory
            key={category}
            title={category}
            description={data.description}
            items={data.items}
          />
        ))}

        <div className="mt-8 p-6 bg-white rounded-2xl text-center">
          <p className="text-[#2C2C2C]/50 text-sm">
            Prices do not include tax. Please inform your server of any allergies or dietary
            restrictions. Gluten-free pasta available upon request.
          </p>
        </div>
      </div>
    </div>
  );
}