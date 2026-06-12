import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer, a as FloatingWhatsApp, o as orderWhatsAppMessage, w as waLink } from "./FloatingWhatsApp-BJ57mQYL.mjs";
import { M as MENU_ITEMS } from "./menu-data-BhdRbdrR.mjs";
import { u as useCart, M as MenuCard } from "./MenuCard-DOWL6yRw.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { S as ShoppingCart, X, T as Trash2, a as Truck, b as Store } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CartDrawer({ open, onClose }) {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const total = useCart((s) => s.total());
  const clear = useCart((s) => s.clear);
  const [orderType, setOrderType] = reactExports.useState("Delivery");
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [address, setAddress] = reactExports.useState("");
  const send = () => {
    if (!lines.length || !name || !phone) return;
    const msg = orderWhatsAppMessage({
      items: lines.map((l) => ({ name: l.item.name, qty: l.qty, price: l.item.price })),
      total,
      orderType,
      name,
      phone,
      address
    });
    window.open(waLink(msg), "_blank");
    clear();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.aside,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 25 },
        className: "fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-ivory z-50 flex flex-col shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between p-6 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 20, className: "text-saffron" }),
              " Your Order"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
            lines.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-10 font-accent", children: "Your cart is empty." }),
            lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 bg-card border border-border rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l.item.image, alt: "", className: "w-16 h-16 rounded-lg object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-sm", children: l.item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  l.item.price.toLocaleString(),
                  " FCFA"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(l.item.id, l.qty - 1), className: "w-6 h-6 rounded-full bg-cream", children: "−" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm w-5 text-center", children: l.qty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(l.item.id, l.qty + 1), className: "w-6 h-6 rounded-full bg-cream", children: "+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(l.item.id), className: "ml-auto text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right font-display text-saffron", children: (l.item.price * l.qty).toLocaleString() })
            ] }, l.item.id))
          ] }),
          lines.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-6 space-y-4 bg-cream", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["Delivery", "Takeaway"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOrderType(t),
                className: `flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-accent transition-colors ${orderType === t ? "bg-saffron text-ivory" : "bg-ivory text-foreground"}`,
                children: [
                  t === "Delivery" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { size: 14 }),
                  " ",
                  t
                ]
              },
              t
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Your name", className: "w-full bg-ivory border border-border rounded-lg px-4 py-2.5 text-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "Phone", className: "w-full bg-ivory border border-border rounded-lg px-4 py-2.5 text-sm" }),
            orderType === "Delivery" && /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: address, onChange: (e) => setAddress(e.target.value), placeholder: "Delivery address", className: "w-full bg-ivory border border-border rounded-lg px-4 py-2.5 text-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-display text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-saffron", children: [
                total.toLocaleString(),
                " FCFA"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: send, disabled: !name || !phone, className: "w-full bg-saffron disabled:opacity-50 hover:bg-terracotta text-ivory py-3.5 rounded-full font-accent tracking-wider uppercase text-sm", children: "Send Order via WhatsApp" })
          ] })
        ]
      }
    )
  ] }) });
}
const FILTERS = ["All", "Indian", "European", "African", "Drinks", "VEG", "NON-VEG"];
function MenuPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [cartOpen, setCartOpen] = reactExports.useState(false);
  const count = useCart((s) => s.count());
  const items = MENU_ITEMS.filter((i) => {
    if (filter === "All") return true;
    if (filter === "VEG" || filter === "NON-VEG") return i.diet.includes(filter);
    return i.category === filter;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 pb-16 px-6 bg-terracotta text-ivory relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 texture-grain opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto text-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-gold tracking-[0.3em] uppercase text-xs mb-4", children: "Menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl mb-4", children: "Kanchan's Kitchen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-xl text-ivory/85", children: "Authentic Indian & World Cuisine — Lomé, Togo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 z-30 glass-warm border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-4 flex gap-2 overflow-x-auto", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `whitespace-nowrap px-5 py-2 rounded-full text-sm font-accent tracking-wide transition-colors ${filter === f ? "bg-saffron text-ivory" : "bg-cream text-foreground hover:bg-gold/30"}`, children: f }, f)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item }, item.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { whileHover: {
      scale: 1.05
    }, whileTap: {
      scale: 0.95
    }, onClick: () => setCartOpen(true), className: "fixed bottom-24 right-6 z-40 bg-saffron text-ivory p-4 rounded-full shadow-xl", "aria-label": "Cart", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 24 }),
      count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, className: "absolute -top-1 -right-1 bg-gold text-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center", children: count }, count)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, { open: cartOpen, onClose: () => setCartOpen(false) })
  ] });
}
export {
  MenuPage as component
};
