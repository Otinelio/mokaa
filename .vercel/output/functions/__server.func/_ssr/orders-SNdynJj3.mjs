import { c as create, p as persist } from "../_libs/zustand.mjs";
const useOrders = create()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const order = {
          ...o,
          id: crypto.randomUUID(),
          status: "Pending",
          timestamp: Date.now()
        };
        set((s) => ({ orders: [order, ...s.orders] }));
        return order;
      },
      setStatus: (id, status) => set((s) => ({ orders: s.orders.map((o) => o.id === id ? { ...o, status } : o) }))
    }),
    { name: "mokaa-room-orders" }
  )
);
const usePins = create()(
  persist(
    (set) => ({
      receptionPin: "1234",
      adminPin: "9999",
      setReceptionPin: (receptionPin) => set({ receptionPin }),
      setAdminPin: (adminPin) => set({ adminPin })
    }),
    { name: "mokaa-pins" }
  )
);
export {
  useOrders as a,
  usePins as u
};
