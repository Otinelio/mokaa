import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut, KeyRound, ListOrdered, BedDouble, Save } from "lucide-react";
import { PinPad } from "@/components/shared/PinPad";
import { useOrders, usePins } from "@/store/orders";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type Tab = "orders" | "rooms" | "pins";

function AdminPage() {
  const pin = usePins((s) => s.adminPin);
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>("orders");

  if (!authed) return <PinPad correctPin={pin} onSuccess={() => setAuthed(true)} title="Admin Login" />;

  return (
    <div className="min-h-screen bg-ivory">
      <header className="bg-teal text-ivory py-5 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl">Admin Dashboard</h1>
            <p className="font-accent text-xs text-ivory/70 tracking-widest uppercase">Hotel Mokaa Management</p>
          </div>
          <button onClick={() => setAuthed(false)}><LogOut size={20} /></button>
        </div>
      </header>

      <nav className="container mx-auto px-6 pt-6 flex gap-2 flex-wrap">
        <TabBtn active={tab==="orders"} onClick={() => setTab("orders")} icon={<ListOrdered size={14}/>}>Order History</TabBtn>
        <TabBtn active={tab==="rooms"} onClick={() => setTab("rooms")} icon={<BedDouble size={14}/>}>Room Management</TabBtn>
        <TabBtn active={tab==="pins"} onClick={() => setTab("pins")} icon={<KeyRound size={14}/>}>PIN Management</TabBtn>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {tab === "orders" && <OrderHistory />}
        {tab === "rooms" && <RoomManager />}
        {tab === "pins" && <PinManager />}
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, children, icon }: { active: boolean; onClick: () => void; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-accent tracking-wide ${active ? "bg-saffron text-ivory" : "bg-cream text-foreground"}`}>
      {icon} {children}
    </button>
  );
}

function OrderHistory() {
  const orders = useOrders((s) => s.orders);
  return (
    <div className="bg-cream rounded-2xl p-6">
      <h2 className="font-display text-2xl mb-4">All Orders ({orders.length})</h2>
      <div className="space-y-2 max-h-[60vh] overflow-y-auto">
        {orders.map((o) => (
          <div key={o.id} className="bg-ivory rounded-xl p-4 border border-border flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-accent">Room {o.roomNumber} · {o.guestName}</div>
              <div className="text-xs text-muted-foreground">{new Date(o.timestamp).toLocaleString()}</div>
            </div>
            <div className="text-xs text-muted-foreground max-w-md">{o.items.map(i => `${i.qty}× ${i.name}`).join(", ")}</div>
            <div className="text-right">
              <div className="font-display text-saffron">{o.total.toLocaleString()} FCFA</div>
              <div className="text-xs">{o.status}</div>
            </div>
          </div>
        ))}
        {orders.length === 0 && <p className="text-center text-muted-foreground py-8 font-accent">No orders yet.</p>}
      </div>
    </div>
  );
}

const ROOM_NUMBERS = Array.from({ length: 16 }, (_, i) => (i + 1).toString().padStart(2, "0"));
type RoomStatus = "Available" | "Occupied" | "Maintenance";

function RoomManager() {
  const [rooms, setRooms] = useState<Record<string, RoomStatus>>(() => {
    if (typeof window === "undefined") return Object.fromEntries(ROOM_NUMBERS.map(n => [n, "Available"]));
    try { return JSON.parse(localStorage.getItem("mokaa-rooms") || "") || Object.fromEntries(ROOM_NUMBERS.map(n => [n, "Available"])); }
    catch { return Object.fromEntries(ROOM_NUMBERS.map(n => [n, "Available"])); }
  });

  const update = (n: string, s: RoomStatus) => {
    const next = { ...rooms, [n]: s };
    setRooms(next);
    localStorage.setItem("mokaa-rooms", JSON.stringify(next));
  };

  const color = (s: RoomStatus) => s === "Available" ? "bg-green-100 text-green-800" : s === "Occupied" ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {ROOM_NUMBERS.map((n) => (
        <div key={n} className="bg-cream rounded-xl p-4">
          <div className="font-display text-2xl mb-2">Room {n}</div>
          <div className={`inline-block text-xs font-bold px-2 py-1 rounded-full mb-3 ${color(rooms[n])}`}>{rooms[n]}</div>
          <select value={rooms[n]} onChange={(e) => update(n, e.target.value as RoomStatus)} className="w-full bg-ivory border border-border rounded-lg px-2 py-1.5 text-sm">
            <option>Available</option><option>Occupied</option><option>Maintenance</option>
          </select>
        </div>
      ))}
    </div>
  );
}

function PinManager() {
  const { receptionPin, adminPin, setReceptionPin, setAdminPin } = usePins();
  const [r, setR] = useState(receptionPin);
  const [a, setA] = useState(adminPin);

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
      <PinForm label="Reception PIN" value={r} onChange={setR} onSave={() => setReceptionPin(r)} />
      <PinForm label="Admin PIN" value={a} onChange={setA} onSave={() => setAdminPin(a)} />
    </div>
  );
}

function PinForm({ label, value, onChange, onSave }: { label: string; value: string; onChange: (s:string)=>void; onSave: ()=>void }) {
  return (
    <div className="bg-cream rounded-2xl p-6">
      <h3 className="font-display text-xl mb-3">{label}</h3>
      <input value={value} maxLength={4} onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))} className="w-full bg-ivory border border-border rounded-lg px-4 py-2.5 mb-3 font-mono text-lg tracking-widest text-center" />
      <button onClick={onSave} disabled={value.length !== 4} className="inline-flex items-center gap-2 bg-saffron disabled:opacity-50 text-ivory px-5 py-2 rounded-full text-sm font-accent tracking-wider uppercase">
        <Save size={14} /> Save
      </button>
    </div>
  );
}
