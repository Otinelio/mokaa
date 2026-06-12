import { Building2, Presentation, MessageCircle } from "lucide-react";
import { venueInquiryMessage, waLink } from "@/lib/whatsapp";

const venues = [
  {
    icon: Building2,
    name: "Rooftop Terrace",
    capacity: "Up to 200 guests",
    desc: "Open-air panoramic views of Lomé. Ideal for weddings, corporate events, private receptions and DJ nights.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Presentation,
    name: "Conference Room",
    capacity: "Up to 50 guests",
    desc: "Equipped with AV technology for meetings, seminars, presentations and corporate training.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&q=80",
  },
];

export function Events() {
  return (
    <section className="py-24 px-6 bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3">Events &amp; Venues</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Host with us</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {venues.map((v) => (
            <article key={v.name} className="bg-card rounded-2xl overflow-hidden border border-border room-card-hover">
              <div className="h-56 overflow-hidden">
                <img src={v.image} alt={v.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-2">
                  <v.icon className="text-gold" size={22} />
                  <h3 className="font-display text-2xl">{v.name}</h3>
                </div>
                <p className="font-accent text-xs tracking-widest uppercase text-saffron mb-3">{v.capacity}</p>
                <p className="text-sm text-muted-foreground mb-5">{v.desc}</p>
                <a
                  href={waLink(venueInquiryMessage(v.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-saffron font-accent text-sm hover:text-terracotta"
                >
                  <MessageCircle size={16} /> Request a Quote via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
