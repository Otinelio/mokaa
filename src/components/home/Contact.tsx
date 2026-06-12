import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { HOTEL_EMAIL, HOTEL_PHONE_DISPLAY } from "@/lib/whatsapp";

function isOpenNow() {
  const h = new Date().getHours() + new Date().getMinutes() / 60;
  const inRange = (a: number, b: number) => h >= a && h < b;
  return inRange(6.5, 10.5) || inRange(12, 15) || inRange(19, 22.5);
}

export function Contact() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const tick = () => setOpen(isOpenNow());
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" className="py-24 px-6 bg-ivory">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <p className="font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Contact &amp; Location</h2>

          <div className="flex items-center gap-2 mb-8">
            <span className={`w-2.5 h-2.5 rounded-full ${open ? "bg-green-500" : "bg-red-500"}`} />
            <span className="font-accent text-sm tracking-wide">{open ? "Open Now" : "Currently Closed"}</span>
          </div>

          <ul className="space-y-5 text-foreground">
            <li className="flex items-start gap-4">
              <MapPin className="text-gold mt-1" size={20} />
              <div>
                <div className="font-accent text-sm tracking-wide">Address</div>
                <div className="text-muted-foreground text-sm">Lomé, Togo — 1 km from Lomé-Tokoin International Airport</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="text-gold mt-1" size={20} />
              <div>
                <div className="font-accent text-sm tracking-wide">Phone / WhatsApp</div>
                <div className="text-muted-foreground text-sm">{HOTEL_PHONE_DISPLAY}</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="text-gold mt-1" size={20} />
              <div>
                <div className="font-accent text-sm tracking-wide">Email</div>
                <div className="text-muted-foreground text-sm">{HOTEL_EMAIL}</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="text-gold mt-1" size={20} />
              <div>
                <div className="font-accent text-sm tracking-wide">Restaurant Hours</div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  Breakfast 6:30 – 10:30<br />
                  Lunch 12:00 – 15:00<br />
                  Dinner 19:00 – 22:30
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border min-h-[400px] shadow-lg">
          <iframe
            title="Mokaa map"
            src="https://www.google.com/maps?q=6.1774113,1.2475764&hl=en&z=16&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
