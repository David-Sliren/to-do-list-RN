import { getId } from "../../utils/id";
import { getDateNow } from "../../utils/date";

export const useShoppingProducts = (set, get) => ({
  // Productos
  inputProducts: { text: "", idProduct: 0 },
  products: [],
  sortProducts: "",

  products_actions: {
    updateInput: (value) =>
      set({
        inputProducts: {
          text: value,
          idProduct: get().inputProducts.idProduct,
        },
      }),

    addProducts: (id) => {
      const { supermarket, inputProducts } = get();
      if (inputProducts.text.trim() === "") return;

      const exist = supermarket?.find((item) => item.id === id);

      const newProduct = {
        id: getId(),
        date: getDateNow(),
        name: inputProducts.text,
        supermarket: exist.name,
        idSupermarket: exist.id,
        isbought: false,
      };

      set((state) => ({
        products: [...state.products, newProduct],
        inputProducts: { text: "", idProduct: 0 },
      }));
    },

    updateProducts: (id) =>
      set((state) => ({
        products: state.products?.map((item) =>
          item.id === id
            ? { ...item, date: getDateNow(), isbought: !item.isbought }
            : item,
        ),
      })),

    deleteProducts: (id) =>
      set((state) => ({
        products: state.products?.filter((item) => item.id !== id),
      })),

    checkProduct: (id) => {
      const { products } = get();

      const exist = products?.find((item) => item.id === id);

      set({
        inputProducts: {
          text: exist ? exist.name : "",
          idProduct: exist ? exist.id : 0,
        },
      });
    },

    editProducts: (id) => {
      const { products, inputProducts } = get();

      const newProducts = products.map((item) =>
        item.id === id && inputProducts.text.trim() !== ""
          ? { ...item, name: inputProducts.text }
          : item,
      );

      set({ products: newProducts, inputProducts: { text: "", idProduct: 0 } });
    },

    clearProducts: () => set({ products: [] }),

    updateSortProducts: (text) => set({ sortProducts: text }),
  },
});
