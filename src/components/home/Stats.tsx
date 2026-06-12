import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Plane, Building, Utensils, Users } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: "easeOut" });
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-ivory">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Plane, value: 1, suffix: " km", label: "From the Airport" },
  { icon: Building, value: 16, suffix: "", label: "Accommodations" },
  { icon: Utensils, value: 3, suffix: "", label: "Cuisine Styles" },
  { icon: Users, value: 200, suffix: "", label: "Rooftop Capacity" },
];

export function Stats() {
  return (
    <section className="relative py-24 gradient-saffron overflow-hidden">
      <div className="absolute inset-0 texture-grain opacity-30" />
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className="text-ivory">
              <s.icon className="mx-auto mb-4 text-gold" size={28} />
              <Counter to={s.value} suffix={s.suffix} />
              <p className="font-accent tracking-widest uppercase text-xs mt-3 text-ivory/85">{s.label}</p>
              {i < stats.length - 1 && <div className="hidden md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
