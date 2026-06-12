import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MENU_ITEMS, type Category } from "@/lib/menu-data";
import { MenuCard } from "@/components/menu/MenuCard";
import { CartDrawer } from "@/components/menu/CartDrawer";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Kanchan's Kitchen Menu | Hotel Mokaa Lomé" },
      { name: "description", content: "Authentic Indian, European & African cuisine in Lomé, Togo. Order delivery or takeaway via WhatsApp." },
    ],
  }),
  component: MenuPage,
});

const FILTERS: ("All" | Category | "VEG" | "NON-VEG")[] = ["All", "Indian", "European", "African", "Drinks", "VEG", "NON-VEG"];

function MenuPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [cartOpen, setCartOpen] = useState(false);
  const count = useCart((s) => s.count());

  const items = MENU_ITEMS.filter((i) => {
    if (filter === "All") return true;
    if (filter === "VEG" || filter === "NON-VEG") return i.diet.includes(filter);
    return i.category === filter;
  });

  return (
    <div className="bg-ivory min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-terracotta text-ivory relative overflow-hidden">
        <div className="absolute inset-0 texture-grain opacity-30" />
        <div className="container mx-auto text-center relative">
          <p className="font-accent text-gold tracking-[0.3em] uppercase text-xs mb-4">Menu</p>
          <h1 className="font-display text-5xl md:text-7xl mb-4">Kanchan's Kitchen</h1>
          <p className="font-display italic text-xl text-ivory/85">Authentic Indian &amp; World Cuisine — Lomé, Togo</p>
        </div>
      </section>

      <div className="sticky top-16 z-30 glass-warm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-accent tracking-wide transition-colors ${
                filter === f ? "bg-saffron text-ivory" : "bg-cream text-foreground hover:bg-gold/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCartOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-saffron text-ivory p-4 rounded-full shadow-xl"
        aria-label="Cart"
      >
        <ShoppingCart size={24} />
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-gold text-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
          >{count}</motion.span>
        )}
      </motion.button>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
