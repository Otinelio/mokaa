import { motion } from "framer-motion";
import { Plus, Minus, Trash2 } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { useCart } from "@/store/cart";

function DietBadge({ d }: { d: "VEG" | "NON-VEG" | "SPICY" }) {
  const map = {
    "VEG": "bg-green-100 text-green-800 border-green-300",
    "NON-VEG": "bg-red-100 text-red-800 border-red-300",
    "SPICY": "bg-orange-100 text-orange-800 border-orange-300",
  };
  const dot = { "VEG": "bg-green-600", "NON-VEG": "bg-red-600", "SPICY": "bg-orange-600" }[d];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full border ${map[d]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} /> {d}
    </span>
  );
}

export function MenuCard({ item, onAdd }: { item: MenuItem; onAdd?: () => void }) {
  const add = useCart((s) => s.add);
  const line = useCart((s) => s.lines.find((l) => l.item.id === item.id));
  const setQty = useCart((s) => s.setQty);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-accent text-lg text-foreground leading-tight">{item.name}</h3>
          <span className="font-display text-saffron text-lg whitespace-nowrap">{item.price.toLocaleString()} FCFA</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {item.diet.map((d) => <DietBadge key={d} d={d} />)}
          </div>
          {line ? (
            <div className="flex items-center gap-2 bg-cream rounded-full px-2 py-1">
              <button onClick={() => setQty(item.id, line.qty - 1)} className="w-7 h-7 rounded-full bg-ivory flex items-center justify-center hover:bg-saffron hover:text-ivory transition-colors">
                <Minus size={14} />
              </button>
              <span className="font-accent text-sm w-6 text-center">{line.qty}</span>
              <button onClick={() => setQty(item.id, line.qty + 1)} className="w-7 h-7 rounded-full bg-ivory flex items-center justify-center hover:bg-saffron hover:text-ivory transition-colors">
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => { add(item); onAdd?.(); }}
              className="bg-saffron hover:bg-terracotta text-ivory text-xs font-accent tracking-wider uppercase px-4 py-2 rounded-full transition-colors"
            >
              Add
            </motion.button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export { Trash2 };
