import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, LogOut } from "lucide-react";
import { PinPad } from "@/components/shared/PinPad";
import { useOrders, type OrderStatus } from "@/store/orders";
import { usePins } from "@/store/orders";
import { playChime } from "@/lib/audio";

export const Route = createFileRoute("/reception")({
  component: ReceptionPage,
});

function elapsed(ts: number) {
  const m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}m ago`;
}

const COLUMNS: { status: OrderStatus; label: string; dot: string; next?: { label: string; status: OrderStatus } }[] = [
  { status: "Pending", label: "Pending", dot: "bg-amber-500", next: { label: "Mark Preparing", status: "Preparing" } },
  { status: "Preparing", label: "Preparing", dot: "bg-blue-500", next: { label: "Mark Delivered", status: "Delivered" } },
  { status: "Delivered", label: "Delivered", dot: "bg-green-600" },
];

function ReceptionPage() {
  const pin = usePins((s) => s.receptionPin);
  const [authed, setAuthed] = useState(false);
  const [, force] = useState(0);
  const orders = useOrders((s) => s.orders);
  const setStatus = useOrders((s) => s.setStatus);
  const lastCountRef = useRef(orders.filter(o => o.status === "Pending").length);
  const [banner, setBanner] = useState<string | null>(null);

  // live time tick
  useEffect(() => {
    const id = setInterval(() => force((n) => n + 1), 30000);
    return () => clearInterval(id);
  }, []);

  // detect new pending orders → chime
  useEffect(() => {
    const pending = orders.filter(o => o.status === "Pending");
    if (pending.length > lastCountRef.current) {
      const latest = pending[0];
      playChime();
      setBanner(`New Order — Room ${latest.roomNumber}`);
      setTimeout(() => setBanner(null), 4000);
    }
    lastCountRef.current = pending.length;
  }, [orders]);

  if (!authed) return <PinPad correctPin={pin} onSuccess={() => setAuthed(true)} title="Reception Login" />;

  const today = new Date(); today.setHours(0,0,0,0);
  const todayOrders = orders.filter(o => o.timestamp >= today.getTime());
  const revenue = todayOrders.reduce((s, o) => s + o.total, 0);
  const itemCounts: Record<string, number> = {};
  todayOrders.forEach(o => o.items.forEach(i => { itemCounts[i.name] = (itemCounts[i.name] || 0) + i.qty; }));
  const mostOrdered = Object.entries(itemCounts).sort((a,b) => b[1]-a[1])[0]?.[0] ?? "—";

  return (
    <div className="min-h-screen bg-ivory">
      <header className="bg-teal text-ivory py-5 px-6 sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="text-gold" />
            <div>
              <h1 className="font-display text-2xl">Reception Dashboard</h1>
              <p className="font-accent text-xs text-ivory/70 tracking-widest uppercase">Hotel Mokaa · Live Orders</p>
            </div>
          </div>
          <button onClick={() => setAuthed(false)} className="text-ivory/70 hover:text-ivory"><LogOut size={20} /></button>
        </div>
      </header>

      <AnimatePresence>
        {banner && (
          <motion.div
            initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-saffron text-ivory px-6 py-3 rounded-full shadow-xl font-accent tracking-wide"
          >{banner}</motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6">
        {COLUMNS.map((col) => {
          const list = orders.filter(o => o.status === col.status).slice(0, 30);
          return (
            <section key={col.status} className="bg-cream rounded-2xl p-5">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${col.dot}`} />
                  <h2 className="font-display text-xl">{col.label}</h2>
                </div>
                <span className="text-xs font-accent text-muted-foreground">{list.length}</span>
              </div>
              <div className="space-y-3">
                <AnimatePresence>
                  {list.map((o) => (
                    <motion.div
                      key={o.id}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-ivory rounded-xl p-4 border border-border"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-display text-2xl">Room {o.roomNumber}</div>
                          <div className="text-xs text-muted-foreground">{o.guestName} · {elapsed(o.timestamp)}</div>
                        </div>
                        <div className="font-display text-saffron">{o.total.toLocaleString()}</div>
                      </div>
                      <ul className="text-sm text-foreground space-y-0.5 my-3">
                        {o.items.map((i, idx) => (
                          <li key={idx} className="flex justify-between">
                            <span>{i.qty}× {i.name}</span>
                            <span className="text-muted-foreground">{(i.qty * i.price).toLocaleString()}</span>
                          </li>
                        ))}
                      </ul>
                      {col.next && (
                        <button
                          onClick={() => setStatus(o.id, col.next!.status)}
                          className="w-full mt-2 bg-saffron text-ivory py-2 rounded-full text-xs font-accent tracking-wider uppercase hover:bg-terracotta transition-colors"
                        >{col.next.label}</button>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {list.length === 0 && <p className="text-center text-xs text-muted-foreground py-6 font-accent">No orders</p>}
              </div>
            </section>
          );
        })}
      </div>

      <div className="container mx-auto px-6 pb-12">
        <div className="bg-teal text-ivory rounded-2xl p-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="Orders Today" value={todayOrders.length.toString()} />
          <Stat label="Revenue Today" value={`${revenue.toLocaleString()} FCFA`} />
          <Stat label="Most Ordered" value={mostOrdered} />
          <Stat label="Pending Now" value={orders.filter(o => o.status === "Pending").length.toString()} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-accent text-xs text-gold tracking-widest uppercase mb-1">{label}</p>
      <p className="font-display text-2xl">{value}</p>
    </div>
  );
}
