import { getId } from "../../utils/id";
import { getDateNow } from "../../utils/date";

export const useShoppingStores = (set, get) => ({
  // Supermercado
  inputSupermarket: { text: "", id: 0 },
  supermarket: [
    {
      id: getId(),
      date: getDateNow(),
      name: "Compras rapidas",
    },
  ],
  sortSupermarket: "",
  sortCart: "",

  stores_actions: {
    updateInputSupermarket: (value) =>
      set((state) => ({
        inputSupermarket: {
          text: value,
          id: state.inputSupermarket.id,
        },
      })),

    addSupermarket: () => {
      if (get().inputSupermarket.text.trim() === "") return;

      const idtask =
        get().inputSupermarket?.id !== 0 ? get().inputSupermarket?.id : getId();

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
              {
                id: idtask,
                date: getDateNow(),
                name: get().inputSupermarket.text.toUpperCase(),
              },
            ];

        return {
          supermarket: addSupermarkets,
          inputSupermarket: { text: "", id: 0 },
        };
      });
    },

    editSupermarket: (value) => {
      const filterSupermarket = get().supermarket?.find(
        (item) => item.id === value,
      );

      if (!filterSupermarket) return;

      set({
        inputSupermarket: {
          text: filterSupermarket.name,
          id: filterSupermarket.id,
        },
      });
    },

    deleteSupermarket: (value) =>
      set((state) => {
        const newSupermarkets = state.supermarket.filter(
          (item) => item.id !== value,
        );

        const isOnlyFlashRemaining =
          newSupermarkets.length <= 1 && newSupermarkets.length > 0;

        const cleanProducts = isOnlyFlashRemaining
          ? state.products.filter(
              (p) => p.idSupermarket === state.supermarket[0].id,
            )
          : state.products;

        return {
          supermarket: newSupermarkets,
          products: cleanProducts,
        };
      }),

    resetSupermarket: () => set({ supermarket: [] }),

    updateSortSupermarket: (text) => set({ sortSupermarket: text }),
    updateSortCart: (text) => set({ sortCart: text }),
  },
});
