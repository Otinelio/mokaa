import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { HOTEL_EMAIL, HOTEL_PHONE_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-teal text-ivory pt-16 pb-8 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center font-regal text-xl">M</div>
            <div>
              <div className="font-display text-2xl">Mokaa</div>
              <div className="font-accent text-xs tracking-widest uppercase text-ivory/70">Where Comfort Meets Culture</div>
            </div>
          </div>
          <p className="text-ivory/80 text-sm leading-relaxed">
            A 3-star hotel residence and Indian restaurant in the heart of Lomé, Togo.
          </p>
        </div>

        <div>
          <h4 className="font-accent text-gold tracking-wider uppercase text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-ivory/85">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-gold" /> Lomé, Togo — 1 km from Lomé-Tokoin Airport</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-gold" /> {HOTEL_PHONE_DISPLAY}</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-gold" /> {HOTEL_EMAIL}</li>
            <li className="flex items-center gap-3"><Facebook size={16} className="text-gold" /> facebook.com/kanchans20052020</li>
          </ul>
        </div>

        <div>
          <h4 className="font-accent text-gold tracking-wider uppercase text-sm mb-4">Restaurant Hours</h4>
          <ul className="space-y-2 text-sm text-ivory/85">
            <li>Breakfast — 6:30 to 10:30</li>
            <li>Lunch — 12:00 to 15:00</li>
            <li>Dinner — 19:00 to 22:30</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-ivory/20 text-center text-xs text-ivory/60 font-accent tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Hotel Residence Mokaa &amp; Kanchan's Kitchen
      </div>
    </footer>
  );
}
