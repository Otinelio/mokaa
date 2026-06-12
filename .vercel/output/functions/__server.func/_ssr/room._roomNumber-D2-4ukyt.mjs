import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MENU_ITEMS } from "./menu-data-BhdRbdrR.mjs";
import { u as useCart, M as MenuCard } from "./MenuCard-DOWL6yRw.mjs";
import { a as useOrders } from "./orders-SNdynJj3.mjs";
import { R as Route } from "./router-BpXPUSqp.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { x as CircleCheck, S as ShoppingCart, y as Send } from "../_libs/lucide-react.mjs";
import "../_libs/zustand.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const FILTERS = ["All", "Indian", "European", "African", "Drinks"];
function RoomOrderPage() {
  const {
    roomNumber
  } = Route.useParams();
  const [guestName, setGuestName] = reactExports.useState("");
  const [confirmedName, setConfirmedName] = reactExports.useState(null);
  const [filter, setFilter] = reactExports.useState("All");
  const [sent, setSent] = reactExports.useState(false);
  const lines = useCart((s) => s.lines);
  const total = useCart((s) => s.total());
  const clear = useCart((s) => s.clear);
  const count = useCart((s) => s.count());
  const addOrder = useOrders((s) => s.add);
  const items = MENU_ITEMS.filter((i) => filter === "All" || i.category === filter);
  if (!confirmedName) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-terracotta px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "bg-ivory rounded-3xl p-10 max-w-md w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-accent text-saffron tracking-[0.3em] uppercase text-xs text-center mb-2", children: [
        "Room ",
        roomNumber
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl text-center mb-2", children: "Welcome" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground mb-8", children: "Please tell us your name so we can serve you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: guestName, onChange: (e) => setGuestName(e.target.value), placeholder: "Your name", className: "w-full border border-border rounded-full px-5 py-3.5 mb-4 bg-card" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => guestName.trim() && setConfirmedName(guestName.trim()), disabled: !guestName.trim(), className: "w-full bg-saffron disabled:opacity-50 text-ivory py-3.5 rounded-full font-accent tracking-wider uppercase text-sm", children: "Continue" })
    ] }) });
  }
  if (sent) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-ivory px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "text-center max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto text-green-600 mb-6", size: 80 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl mb-3", children: [
        "Thank you, ",
        confirmedName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-8", children: [
        "Your order has been received. Our team will bring it to Room ",
        roomNumber,
        " shortly."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSent(false), className: "bg-saffron text-ivory px-7 py-3 rounded-full font-accent tracking-wider uppercase text-sm", children: "Order More" })
    ] }) });
  }
  const submit = () => {
    if (!lines.length) return;
    addOrder({
      roomNumber,
      guestName: confirmedName,
      items: lines.map((l) => ({
        name: l.item.name,
        qty: l.qty,
        price: l.item.price
      })),
      total
    });
    clear();
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory min-h-screen pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-terracotta text-ivory py-8 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-accent text-gold tracking-widest uppercase text-xs", children: [
          "Room ",
          roomNumber
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl", children: [
          "Hello, ",
          confirmedName
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-sm text-ivory/80 hidden sm:block", children: "In-Room Dining" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-30 glass-warm border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-4 flex gap-2 overflow-x-auto", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `whitespace-nowrap px-5 py-2 rounded-full text-sm font-accent ${filter === f ? "bg-saffron text-ivory" : "bg-cream text-foreground"}`, children: f }, f)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item: i }, i.id)) }),
    count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      y: 100
    }, animate: {
      y: 0
    }, className: "fixed bottom-0 inset-x-0 z-40 glass-warm border-t border-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "text-saffron" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-accent text-sm", children: [
            count,
            " item",
            count > 1 ? "s" : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl text-saffron", children: [
            total.toLocaleString(),
            " FCFA"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: submit, className: "bg-saffron text-ivory px-6 py-3 rounded-full font-accent tracking-wider uppercase text-sm inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
        " Send My Order"
      ] })
    ] }) })
  ] });
}
export {
  RoomOrderPage as component
};
