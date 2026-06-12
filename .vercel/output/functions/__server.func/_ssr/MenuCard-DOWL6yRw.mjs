import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { z as Minus, E as Plus } from "../_libs/lucide-react.mjs";
const useCart = create()(
  persist(
    (set, get) => ({
      lines: [],
      add: (item) => set((s) => {
        const existing = s.lines.find((l) => l.item.id === item.id);
        if (existing) {
          return { lines: s.lines.map((l) => l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l) };
        }
        return { lines: [...s.lines, { item, qty: 1 }] };
      }),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.item.id !== id) })),
      setQty: (id, qty) => set((s) => ({
        lines: qty <= 0 ? s.lines.filter((l) => l.item.id !== id) : s.lines.map((l) => l.item.id === id ? { ...l, qty } : l)
      })),
      clear: () => set({ lines: [] }),
      total: () => get().lines.reduce((sum, l) => sum + l.item.price * l.qty, 0),
      count: () => get().lines.reduce((sum, l) => sum + l.qty, 0)
    }),
    { name: "mokaa-cart" }
  )
);
function DietBadge({ d }) {
  const map = {
    "VEG": "bg-green-100 text-green-800 border-green-300",
    "NON-VEG": "bg-red-100 text-red-800 border-red-300",
    "SPICY": "bg-orange-100 text-orange-800 border-orange-300"
  };
  const dot = { "VEG": "bg-green-600", "NON-VEG": "bg-red-600", "SPICY": "bg-orange-600" }[d];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full border ${map[d]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${dot}` }),
    " ",
    d
  ] });
}
function MenuCard({ item, onAdd }) {
  const add = useCart((s) => s.add);
  const line = useCart((s) => s.lines.find((l) => l.item.id === item.id));
  const setQty = useCart((s) => s.setQty);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.5 },
      whileHover: { y: -4 },
      className: "bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, loading: "lazy", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-accent text-lg text-foreground leading-tight", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-saffron text-lg whitespace-nowrap", children: [
              item.price.toLocaleString(),
              " FCFA"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 line-clamp-2", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: item.diet.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DietBadge, { d }, d)) }),
            line ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-cream rounded-full px-2 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(item.id, line.qty - 1), className: "w-7 h-7 rounded-full bg-ivory flex items-center justify-center hover:bg-saffron hover:text-ivory transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 14 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-sm w-6 text-center", children: line.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(item.id, line.qty + 1), className: "w-7 h-7 rounded-full bg-ivory flex items-center justify-center hover:bg-saffron hover:text-ivory transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileTap: { scale: 0.9 },
                onClick: () => {
                  add(item);
                  onAdd?.();
                },
                className: "bg-saffron hover:bg-terracotta text-ivory text-xs font-accent tracking-wider uppercase px-4 py-2 rounded-full transition-colors",
                children: "Add"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  MenuCard as M,
  useCart as u
};
