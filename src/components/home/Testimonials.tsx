import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Amélie D.", origin: "Paris, France", stars: 5, text: "An absolute hidden gem in Lomé. The biryani is the best I have had outside India and the rooftop sunset was magical." },
  { name: "Rajesh K.", origin: "Mumbai, India", stars: 5, text: "Felt like home. Kanchan's kitchen is authentic — the dal tadka and naan transported me back to my grandmother's kitchen." },
  { name: "Kwame A.", origin: "Accra, Ghana", stars: 5, text: "Stayed for a week on business. Staff are warm and multilingual, rooms are spotless and the pool is a true oasis." },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3">Guest Words</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">What our guests say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-ivory rounded-2xl p-7 border border-border relative">
              <Quote className="text-gold mb-4" size={32} />
              <p className="text-foreground italic font-display text-lg leading-relaxed mb-6">{r.text}</p>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-accent text-sm text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground tracking-wide">{r.origin}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
