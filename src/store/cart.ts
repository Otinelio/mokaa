import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MenuItem } from "@/lib/menu-data";

export interface CartLine { item: MenuItem; qty: number }

interface CartState {
  lines: CartLine[];
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  total: () => number;
  count: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (item) =>
        set((s) => {
          const existing = s.lines.find((l) => l.item.id === item.id);
          if (existing) {
            return { lines: s.lines.map((l) => l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l) };
          }
          return { lines: [...s.lines, { item, qty: 1 }] };
        }),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.item.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          lines: qty <= 0
            ? s.lines.filter((l) => l.item.id !== id)
            : s.lines.map((l) => l.item.id === id ? { ...l, qty } : l),
        })),
      clear: () => set({ lines: [] }),
      total: () => get().lines.reduce((sum, l) => sum + l.item.price * l.qty, 0),
      count: () => get().lines.reduce((sum, l) => sum + l.qty, 0),
    }),
    { name: "mokaa-cart" }
  )
);
