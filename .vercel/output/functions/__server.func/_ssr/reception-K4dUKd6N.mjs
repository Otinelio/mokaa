import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PinPad } from "./PinPad-CGihhnAM.mjs";
import { u as usePins, a as useOrders } from "./orders-SNdynJj3.mjs";
import { B as Bell, L as LogOut } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/zustand.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
let ctx = null;
function playChime() {
  try {
    if (typeof window === "undefined") return;
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    const audio = ctx;
    const now = audio.currentTime;
    const tones = [880, 1320];
    tones.forEach((freq, i) => {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.18, now + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + i * 0.12 + 0.7);
      osc.connect(gain).connect(audio.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.75);
    });
  } catch {
  }
}
function elapsed(ts) {
  const m = Math.floor((Date.now() - ts) / 6e4);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}m ago`;
}
const COLUMNS = [{
  status: "Pending",
  label: "Pending",
  dot: "bg-amber-500",
  next: {
    label: "Mark Preparing",
    status: "Preparing"
  }
}, {
  status: "Preparing",
  label: "Preparing",
  dot: "bg-blue-500",
  next: {
    label: "Mark Delivered",
    status: "Delivered"
  }
}, {
  status: "Delivered",
  label: "Delivered",
  dot: "bg-green-600"
}];
function ReceptionPage() {
  const pin = usePins((s) => s.receptionPin);
  const [authed, setAuthed] = reactExports.useState(false);
  const [, force] = reactExports.useState(0);
  const orders = useOrders((s) => s.orders);
  const setStatus = useOrders((s) => s.setStatus);
  const lastCountRef = reactExports.useRef(orders.filter((o) => o.status === "Pending").length);
  const [banner, setBanner] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const id = setInterval(() => force((n) => n + 1), 3e4);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    const pending = orders.filter((o) => o.status === "Pending");
    if (pending.length > lastCountRef.current) {
      const latest = pending[0];
      playChime();
      setBanner(`New Order — Room ${latest.roomNumber}`);
      setTimeout(() => setBanner(null), 4e3);
    }
    lastCountRef.current = pending.length;
  }, [orders]);
  if (!authed) return /* @__PURE__ */ jsxRuntimeExports.jsx(PinPad, { correctPin: pin, onSuccess: () => setAuthed(true), title: "Reception Login" });
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const todayOrders = orders.filter((o) => o.timestamp >= today.getTime());
  const revenue = todayOrders.reduce((s, o) => s + o.total, 0);
  const itemCounts = {};
  todayOrders.forEach((o) => o.items.forEach((i) => {
    itemCounts[i.name] = (itemCounts[i.name] || 0) + i.qty;
  }));
  const mostOrdered = Object.entries(itemCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-teal text-ivory py-5 px-6 sticky top-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "Reception Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs text-ivory/70 tracking-widest uppercase", children: "Hotel Mokaa · Live Orders" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAuthed(false), className: "text-ivory/70 hover:text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 20 }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: banner && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      y: -50,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, exit: {
      y: -50,
      opacity: 0
    }, className: "fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-saffron text-ivory px-6 py-3 rounded-full shadow-xl font-accent tracking-wide", children: banner }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6", children: COLUMNS.map((col) => {
      const list = orders.filter((o) => o.status === col.status).slice(0, 30);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-cream rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-3 h-3 rounded-full ${col.dot}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl", children: col.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-accent text-muted-foreground", children: list.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: list.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            scale: 0.9
          }, className: "bg-ivory rounded-xl p-4 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl", children: [
                  "Room ",
                  o.roomNumber
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  o.guestName,
                  " · ",
                  elapsed(o.timestamp)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-saffron", children: o.total.toLocaleString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-sm text-foreground space-y-0.5 my-3", children: o.items.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                i.qty,
                "× ",
                i.name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: (i.qty * i.price).toLocaleString() })
            ] }, idx)) }),
            col.next && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus(o.id, col.next.status), className: "w-full mt-2 bg-saffron text-ivory py-2 rounded-full text-xs font-accent tracking-wider uppercase hover:bg-terracotta transition-colors", children: col.next.label })
          ] }, o.id)) }),
          list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground py-6 font-accent", children: "No orders" })
        ] })
      ] }, col.status);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal text-ivory rounded-2xl p-7 grid grid-cols-2 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Orders Today", value: todayOrders.length.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Revenue Today", value: `${revenue.toLocaleString()} FCFA` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Most Ordered", value: mostOrdered }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pending Now", value: orders.filter((o) => o.status === "Pending").length.toString() })
    ] }) })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs text-gold tracking-widest uppercase mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: value })
  ] });
}
export {
  ReceptionPage as component
};
