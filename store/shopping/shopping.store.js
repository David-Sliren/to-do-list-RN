import { create } from "zustand";

export const useShopping = create((set, get) => ({
  inputSupermarket: { text: "", id: 0 },
  supermarket: [],

  // Supermercado
  updateInputSupermarket: (value) =>
    set((state) => ({
      inputSupermarket: {
        text: value,
        id: state.inputSupermarket.id,
      },
    })),

  setSupermarket: () => {
    if (get().inputSupermarket.text.trim() === "") return;

    const idtask =
      get().inputSupermarket?.id !== 0
        ? get().inputSupermarket?.id
        : Date.now();

    const exist = get().supermarket.some((item) => item.id === idtask);

    set((state) => {
      const addSupermarkets = exist
        ? state.supermarket.map((item) =>
            item.id === idtask
              ? { ...item, name: state.inputSupermarket.text.toUpperCase() }
              : item,
          )
        : [
            ...get().supermarket,
            { id: Date.now(), name: get().inputSupermarket.text.toUpperCase() },
          ];

      return {
        supermarket: addSupermarkets,
        inputSupermarket: { text: "", id: 0 },
      };
    });
  },

  resetSupermarket: () => set({ supermarket: [] }),

  editSupermarket: (value) => {
    const valueFilter = get().supermarket.find((item) => item.id === value);

    set({ inputSupermarket: { text: valueFilter.name, id: valueFilter.id } });
  },

  deleteSupermarket: (value) => {
    const valueFilter = get()?.supermarket?.filter((item) => item.id !== value);

    set({ supermarket: valueFilter });
  },
}));
