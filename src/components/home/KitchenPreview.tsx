import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { tableReservationMessage, waLink } from "@/lib/whatsapp";

const foodImages = [
  "photo-1565557623262-b51c2513a641",
  "photo-1563379091339-03b21ab4a4f8",
  "photo-1599487488170-d11ec9c172f0",
  "photo-1631452180519-c014fe946bc7",
  "photo-1610057099443-fde8c4d50f91",
  "photo-1633945274405-b6c8069047b0",
];

export function KitchenPreview() {
  return (
    <section id="kitchen" className="py-24 px-6 bg-terracotta text-ivory relative overflow-hidden">
      <div className="absolute inset-0 texture-grain opacity-30" />
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center relative">
        <div className="grid grid-cols-3 gap-3">
          {foodImages.map((id, i) => (
            <motion.img
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`}
              alt=""
              className={`w-full ${i % 2 === 0 ? "h-44" : "h-32"} object-cover rounded-xl`}
              loading="lazy"
            />
          ))}
        </div>

        <div>
          <p className="font-accent text-gold tracking-[0.3em] uppercase text-xs mb-3">Kanchan's Kitchen</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            Authentic Indian Cuisine in the heart of <span className="italic text-gold">Lomé</span>
          </h2>
          <p className="text-ivory/85 mb-4 leading-relaxed">
            From slow-roasted tandoori and fragrant biryanis to delicate paneer, garlic naan and silken dals — every dish is built on Kanchan's family recipes and the finest local produce.
          </p>
          <p className="text-ivory/85 mb-8 leading-relaxed">
            Our menu also features European classics and Togolese specialties: <span className="italic">Akumé</span>, <span className="italic">Adémè</span> and <span className="italic">Djinkouné</span>. Open to the public for breakfast, lunch and dinner.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="bg-ivory text-terracotta hover:bg-cream px-7 py-3.5 rounded-full font-accent tracking-wider uppercase text-sm transition-colors"
            >
              Explore Full Menu
            </Link>
            <a
              href={waLink(tableReservationMessage({ name: "", phone: "", date: "", time: "", guests: "", notes: "" }))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-foreground px-7 py-3.5 rounded-full font-accent tracking-wider uppercase text-sm transition-colors"
            >
              <MessageCircle size={16} /> Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
