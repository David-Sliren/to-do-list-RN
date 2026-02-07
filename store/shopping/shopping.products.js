import { create } from "zustand";
import { useShopping } from "./shopping.store";

export const useShoppingProducts = create((set, get) => ({
  // Productos
  inputProducts: { text: "", idProduct: 0 },
  products: [],
  store: "",

  updateInput: (value) =>
    set({
      inputProducts: { text: value, idProduct: get().inputProducts.idProduct },
    }),

  addProducts: (id) => {
    if (get().inputProducts.text.trim() === "") return;
    const supermarket = useShopping.getState().supermarket;
    const exist = supermarket.find((item) => item.id === Number(id));

    const newProduct = {
      id: `product${Date.now()}`,
      name: get().inputProducts.text,
      supermarket: exist.name,
      idSupermarket: exist.id,
      isbought: false,
    };

    set((state) => ({
      products: [...state.products, newProduct],
      inputProducts: { text: "", idProduct: 0 },
    }));
  },

  updateProduts: (id) =>
    set((state) => ({
      products: state.products?.map((item) =>
        item.id === id ? { ...item, isbought: !item.isbought } : item,
      ),
    })),

  deleteProducts: (id) =>
    set((state) => ({
      products: state.products?.filter((item) => item.id !== id),
    })),

  editProducts: (id) => {
    const { products, inputProducts } = get();

    const exist = products.find((item) => item.id === id);

    if (!exist) return;

    if (inputProducts.text.trim() === "") {
      set({ inputProducts: { text: exist.name, idProduct: exist.id } });
      return;
    }

    const newProducts = get().products?.map((item) =>
      item.id === exist.id ? { ...item, name: inputProducts.text } : item,
    );

    set({ products: newProducts });
  },

  getStore: (id) => {
    const supermarket = useShopping.getState().supermarket;

    const { name } = supermarket.find((item) => item.id === Number(id));

    return name;
  },
}));
