import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PinPad } from "./PinPad-CGihhnAM.mjs";
import { u as usePins, a as useOrders } from "./orders-SNdynJj3.mjs";
import { L as LogOut, c as ListOrdered, d as BedDouble, K as KeyRound, e as Save } from "../_libs/lucide-react.mjs";
import "../_libs/zustand.mjs";
function AdminPage() {
  const pin = usePins((s) => s.adminPin);
  const [authed, setAuthed] = reactExports.useState(false);
  const [tab, setTab] = reactExports.useState("orders");
  if (!authed) return /* @__PURE__ */ jsxRuntimeExports.jsx(PinPad, { correctPin: pin, onSuccess: () => setAuthed(true), title: "Admin Login" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-teal text-ivory py-5 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "Admin Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs text-ivory/70 tracking-widest uppercase", children: "Hotel Mokaa Management" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAuthed(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 20 }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto px-6 pt-6 flex gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "orders", onClick: () => setTab("orders"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { size: 14 }), children: "Order History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "rooms", onClick: () => setTab("rooms"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { size: 14 }), children: "Room Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "pins", onClick: () => setTab("pins"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 14 }), children: "PIN Management" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-8", children: [
      tab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsx(OrderHistory, {}),
      tab === "rooms" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoomManager, {}),
      tab === "pins" && /* @__PURE__ */ jsxRuntimeExports.jsx(PinManager, {})
    ] })
  ] });
}
function TabBtn({
  active,
  onClick,
  children,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-accent tracking-wide ${active ? "bg-saffron text-ivory" : "bg-cream text-foreground"}`, children: [
    icon,
    " ",
    children
  ] });
}
function OrderHistory() {
  const orders = useOrders((s) => s.orders);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream rounded-2xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl mb-4", children: [
      "All Orders (",
      orders.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 max-h-[60vh] overflow-y-auto", children: [
      orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory rounded-xl p-4 border border-border flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-accent", children: [
            "Room ",
            o.roomNumber,
            " · ",
            o.guestName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: new Date(o.timestamp).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground max-w-md", children: o.items.map((i) => `${i.qty}× ${i.name}`).join(", ") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-saffron", children: [
            o.total.toLocaleString(),
            " FCFA"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: o.status })
        ] })
      ] }, o.id)),
      orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-8 font-accent", children: "No orders yet." })
    ] })
  ] });
}
const ROOM_NUMBERS = Array.from({
  length: 16
}, (_, i) => (i + 1).toString().padStart(2, "0"));
function RoomManager() {
  const [rooms, setRooms] = reactExports.useState(() => {
    if (typeof window === "undefined") return Object.fromEntries(ROOM_NUMBERS.map((n) => [n, "Available"]));
    try {
      return JSON.parse(localStorage.getItem("mokaa-rooms") || "") || Object.fromEntries(ROOM_NUMBERS.map((n) => [n, "Available"]));
    } catch {
      return Object.fromEntries(ROOM_NUMBERS.map((n) => [n, "Available"]));
    }
  });
  const update = (n, s) => {
    const next = {
      ...rooms,
      [n]: s
    };
    setRooms(next);
    localStorage.setItem("mokaa-rooms", JSON.stringify(next));
  };
  const color = (s) => s === "Available" ? "bg-green-100 text-green-800" : s === "Occupied" ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: ROOM_NUMBERS.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream rounded-xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl mb-2", children: [
      "Room ",
      n
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block text-xs font-bold px-2 py-1 rounded-full mb-3 ${color(rooms[n])}`, children: rooms[n] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: rooms[n], onChange: (e) => update(n, e.target.value), className: "w-full bg-ivory border border-border rounded-lg px-2 py-1.5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Available" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Occupied" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Maintenance" })
    ] })
  ] }, n)) });
}
function PinManager() {
  const {
    receptionPin,
    adminPin,
    setReceptionPin,
    setAdminPin
  } = usePins();
  const [r, setR] = reactExports.useState(receptionPin);
  const [a, setA] = reactExports.useState(adminPin);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PinForm, { label: "Reception PIN", value: r, onChange: setR, onSave: () => setReceptionPin(r) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PinForm, { label: "Admin PIN", value: a, onChange: setA, onSave: () => setAdminPin(a) })
  ] });
}
function PinForm({
  label,
  value,
  onChange,
  onSave
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream rounded-2xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-3", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value, maxLength: 4, onChange: (e) => onChange(e.target.value.replace(/\D/g, "")), className: "w-full bg-ivory border border-border rounded-lg px-4 py-2.5 mb-3 font-mono text-lg tracking-widest text-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onSave, disabled: value.length !== 4, className: "inline-flex items-center gap-2 bg-saffron disabled:opacity-50 text-ivory px-5 py-2 rounded-full text-sm font-accent tracking-wider uppercase", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 14 }),
      " Save"
    ] })
  ] });
}
export {
  AdminPage as component
};
