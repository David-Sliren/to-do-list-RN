import { create } from "zustand";

export const useShopping = create((set, get) => ({
  inputSupermarket: "",
  supermarket: [],

  // Supermercado
  updateInputSupermarket: (value) =>
    set((state) => ({ inputSupermarket: value })),

  setSupermarket: () => {
    if (get().inputSupermarket.trim() === "") return;
    const data = [
      ...get().supermarket,
      {
        id: Date.now(),
        name: get().inputSupermarket.toUpperCase(),
      },
    ];
    set({ supermarket: data, inputSupermarket: "" });
  },

  resetSupermarket: () => set({ supermarket: [] }),

  deleteSupermarket: (value) => {
    const valueFilter = get()?.supermarket?.filter((item) => item.id !== value);

    set({ supermarket: valueFilter });
  },
}));
