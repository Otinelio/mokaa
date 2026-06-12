import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OrderStatus = "Pending" | "Preparing" | "Delivered";

export interface RoomOrder {
  id: string;
  roomNumber: string;
  guestName: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: OrderStatus;
  timestamp: number;
}

interface OrdersState {
  orders: RoomOrder[];
  add: (o: Omit<RoomOrder, "id" | "status" | "timestamp">) => RoomOrder;
  setStatus: (id: string, status: OrderStatus) => void;
}

export const useOrders = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const order: RoomOrder = {
          ...o,
          id: crypto.randomUUID(),
          status: "Pending",
          timestamp: Date.now(),
        };
        set((s) => ({ orders: [order, ...s.orders] }));
        return order;
      },
      setStatus: (id, status) =>
        set((s) => ({ orders: s.orders.map((o) => o.id === id ? { ...o, status } : o) })),
    }),
    { name: "mokaa-room-orders" }
  )
);

interface PinState {
  receptionPin: string;
  adminPin: string;
  setReceptionPin: (p: string) => void;
  setAdminPin: (p: string) => void;
}

export const usePins = create<PinState>()(
  persist(
    (set) => ({
      receptionPin: "1234",
      adminPin: "9999",
      setReceptionPin: (receptionPin) => set({ receptionPin }),
      setAdminPin: (adminPin) => set({ adminPin }),
    }),
    { name: "mokaa-pins" }
  )
);
