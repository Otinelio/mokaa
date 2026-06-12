import { motion } from "framer-motion";
import {
  Waves, Trees, Wifi, Car, Users, Building2,
  Presentation, Utensils, Shield, Shirt, Coffee, Plane,
} from "lucide-react";

const facilities = [
  { icon: Waves, label: "Outdoor Pool" },
  { icon: Trees, label: "Garden & Terrace" },
  { icon: Wifi, label: "WiFi 100+ Mbps" },
  { icon: Car, label: "Free Valet Parking" },
  { icon: Users, label: "Multilingual Staff" },
  { icon: Building2, label: "Rooftop · 200 pax" },
  { icon: Presentation, label: "Conference · 50 pax" },
  { icon: Utensils, label: "Restaurant & Bar" },
  { icon: Shield, label: "24-Hour Front Desk" },
  { icon: Shirt, label: "Daily Housekeeping" },
  { icon: Coffee, label: "Breakfast Included" },
  { icon: Plane, label: "1 km from Airport" },
];

export function Facilities() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3">Amenities</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Facilities &amp; Services</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-ivory rounded-xl p-5 text-center border border-border hover:border-gold transition-colors"
            >
              <f.icon className="mx-auto mb-3 text-saffron" size={28} />
              <p className="text-xs font-accent tracking-wide text-foreground leading-tight">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
