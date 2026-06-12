import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2, ShoppingCart, Truck, Store } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cart";
import { orderWhatsAppMessage, waLink } from "@/lib/whatsapp";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const total = useCart((s) => s.total());
  const clear = useCart((s) => s.clear);

  const [orderType, setOrderType] = useState<"Delivery" | "Takeaway">("Delivery");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const send = () => {
    if (!lines.length || !name || !phone) return;
    const msg = orderWhatsAppMessage({
      items: lines.map((l) => ({ name: l.item.name, qty: l.qty, price: l.item.price })),
      total, orderType, name, phone, address,
    });
    window.open(waLink(msg), "_blank");
    clear();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50"
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-ivory z-50 flex flex-col shadow-2xl"
          >
            <header className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-display text-2xl flex items-center gap-2"><ShoppingCart size={20} className="text-saffron" /> Your Order</h3>
              <button onClick={onClose}><X /></button>
            </header>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {lines.length === 0 && (
                <p className="text-center text-muted-foreground py-10 font-accent">Your cart is empty.</p>
              )}
              {lines.map((l) => (
                <div key={l.item.id} className="flex gap-3 bg-card border border-border rounded-xl p-3">
                  <img src={l.item.image} alt="" className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-accent text-sm">{l.item.name}</div>
                    <div className="text-xs text-muted-foreground">{l.item.price.toLocaleString()} FCFA</div>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => setQty(l.item.id, l.qty - 1)} className="w-6 h-6 rounded-full bg-cream">−</button>
                      <span className="text-sm w-5 text-center">{l.qty}</span>
                      <button onClick={() => setQty(l.item.id, l.qty + 1)} className="w-6 h-6 rounded-full bg-cream">+</button>
                      <button onClick={() => remove(l.item.id)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                    </div>
                  </div>
                  <div className="text-right font-display text-saffron">{(l.item.price * l.qty).toLocaleString()}</div>
                </div>
              ))}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-border p-6 space-y-4 bg-cream">
                <div className="flex gap-2">
                  {(["Delivery", "Takeaway"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setOrderType(t)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-accent transition-colors ${
                        orderType === t ? "bg-saffron text-ivory" : "bg-ivory text-foreground"
                      }`}
                    >
                      {t === "Delivery" ? <Truck size={14} /> : <Store size={14} />} {t}
                    </button>
                  ))}
                </div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full bg-ivory border border-border rounded-lg px-4 py-2.5 text-sm" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full bg-ivory border border-border rounded-lg px-4 py-2.5 text-sm" />
                {orderType === "Delivery" && (
                  <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address" className="w-full bg-ivory border border-border rounded-lg px-4 py-2.5 text-sm" />
                )}
                <div className="flex items-center justify-between font-display text-xl">
                  <span>Total</span>
                  <span className="text-saffron">{total.toLocaleString()} FCFA</span>
                </div>
                <button onClick={send} disabled={!name || !phone} className="w-full bg-saffron disabled:opacity-50 hover:bg-terracotta text-ivory py-3.5 rounded-full font-accent tracking-wider uppercase text-sm">
                  Send Order via WhatsApp
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
