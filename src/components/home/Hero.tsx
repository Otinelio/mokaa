import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      <div className="absolute inset-0 texture-grain opacity-40" />

      {/* gold dust */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="gold-dust"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-accent text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
        >
          Lomé · Togo · 3 Stars
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display text-ivory text-5xl md:text-7xl lg:text-8xl leading-none mb-6"
        >
          Welcome to <span className="italic text-gold">Mokaa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-display text-ivory/90 text-xl md:text-2xl italic mb-10 max-w-2xl mx-auto"
        >
          Where Indian flavors meet African warmth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#rooms"
            className="bg-saffron hover:bg-terracotta text-ivory px-8 py-4 rounded-full font-accent tracking-wider uppercase text-sm transition-all"
          >
            Book a Room
          </a>
          <a
            href="#kitchen"
            className="border border-gold text-gold hover:bg-gold hover:text-foreground px-8 py-4 rounded-full font-accent tracking-wider uppercase text-sm transition-all"
          >
            Explore the Kitchen
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
