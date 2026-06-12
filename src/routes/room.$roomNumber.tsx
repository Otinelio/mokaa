import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle2, Send } from "lucide-react";
import { MENU_ITEMS, type Category } from "@/lib/menu-data";
import { MenuCard } from "@/components/menu/MenuCard";
import { useCart } from "@/store/cart";
import { useOrders } from "@/store/orders";

export const Route = createFileRoute("/room/$roomNumber")({
  component: RoomOrderPage,
});

const FILTERS: ("All" | Category)[] = ["All", "Indian", "European", "African", "Drinks"];

function RoomOrderPage() {
  const { roomNumber } = Route.useParams();
  const [guestName, setGuestName] = useState("");
  const [confirmedName, setConfirmedName] = useState<string | null>(null);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [sent, setSent] = useState(false);

  const lines = useCart((s) => s.lines);
  const total = useCart((s) => s.total());
  const clear = useCart((s) => s.clear);
  const count = useCart((s) => s.count());
  const addOrder = useOrders((s) => s.add);

  const items = MENU_ITEMS.filter((i) => filter === "All" || i.category === filter);

  if (!confirmedName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-terracotta px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-ivory rounded-3xl p-10 max-w-md w-full">
          <p className="font-accent text-saffron tracking-[0.3em] uppercase text-xs text-center mb-2">Room {roomNumber}</p>
          <h1 className="font-display text-4xl text-center mb-2">Welcome</h1>
          <p className="text-center text-muted-foreground mb-8">Please tell us your name so we can serve you.</p>
          <input
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Your name"
            className="w-full border border-border rounded-full px-5 py-3.5 mb-4 bg-card"
          />
          <button
            onClick={() => guestName.trim() && setConfirmedName(guestName.trim())}
            disabled={!guestName.trim()}
            className="w-full bg-saffron disabled:opacity-50 text-ivory py-3.5 rounded-full font-accent tracking-wider uppercase text-sm"
          >
            Continue
          </button>
        </motion.div>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <CheckCircle2 className="mx-auto text-green-600 mb-6" size={80} />
          <h1 className="font-display text-4xl mb-3">Thank you, {confirmedName}</h1>
          <p className="text-muted-foreground mb-8">Your order has been received. Our team will bring it to Room {roomNumber} shortly.</p>
          <button onClick={() => setSent(false)} className="bg-saffron text-ivory px-7 py-3 rounded-full font-accent tracking-wider uppercase text-sm">
            Order More
          </button>
        </motion.div>
      </div>
    );
  }

  const submit = () => {
    if (!lines.length) return;
    addOrder({
      roomNumber,
      guestName: confirmedName,
      items: lines.map((l) => ({ name: l.item.name, qty: l.qty, price: l.item.price })),
      total,
    });
    clear();
    setSent(true);
  };

  return (
    <div className="bg-ivory min-h-screen pb-32">
      <header className="bg-terracotta text-ivory py-8 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <p className="font-accent text-gold tracking-widest uppercase text-xs">Room {roomNumber}</p>
            <h1 className="font-display text-3xl">Hello, {confirmedName}</h1>
          </div>
          <p className="font-accent text-sm text-ivory/80 hidden sm:block">In-Room Dining</p>
        </div>
      </header>

      <div className="sticky top-0 z-30 glass-warm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-accent ${
                filter === f ? "bg-saffron text-ivory" : "bg-cream text-foreground"
              }`}
            >{f}</button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => <MenuCard key={i.id} item={i} />)}
      </div>

      {count > 0 && (
        <motion.div
          initial={{ y: 100 }} animate={{ y: 0 }}
          className="fixed bottom-0 inset-x-0 z-40 glass-warm border-t border-border p-4"
        >
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShoppingCart className="text-saffron" />
              <div>
                <div className="font-accent text-sm">{count} item{count > 1 ? "s" : ""}</div>
                <div className="font-display text-xl text-saffron">{total.toLocaleString()} FCFA</div>
              </div>
            </div>
            <button onClick={submit} className="bg-saffron text-ivory px-6 py-3 rounded-full font-accent tracking-wider uppercase text-sm inline-flex items-center gap-2">
              <Send size={16} /> Send My Order
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
