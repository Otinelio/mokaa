import { motion } from "framer-motion";
import { Wifi, AirVent, Tv2, Bath, MessageCircle } from "lucide-react";
import { ROOM_TYPES } from "@/lib/menu-data";
import { roomInquiryMessage, waLink } from "@/lib/whatsapp";

const amenities = [Wifi, AirVent, Tv2, Bath];

export function Rooms() {
  return (
    <section id="rooms" className="py-24 px-6 bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3">Accommodations</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">Rooms &amp; Suites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sixteen thoughtfully appointed accommodations. Every stay includes pool access, daily housekeeping, free WiFi, two complimentary water bottles per day, and breakfast options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ROOM_TYPES.map((room, i) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="room-card-hover bg-card rounded-2xl overflow-hidden border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 right-4 bg-cream/95 px-4 py-1.5 rounded-full text-xs font-accent tracking-wider text-teal">
                  From {room.price}/night
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-foreground mb-2">{room.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{room.desc}</p>
                <div className="flex gap-4 mb-6 text-muted-foreground">
                  {amenities.map((Ic, idx) => (
                    <Ic key={idx} size={18} className="text-gold" />
                  ))}
                </div>
                <a
                  href={waLink(roomInquiryMessage(room.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-saffron font-accent tracking-wide text-sm hover:text-terracotta transition-colors"
                >
                  <MessageCircle size={16} /> Inquire via WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
