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

  checkProduct: (id) => {
    const { products } = get();

    const exist = products.find((item) => item.id === id);

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

    set({ products: newProducts, inputProducts: { text: "", id: 0 } });
  },

  getStore: (id) => {
    const supermarket = useShopping.getState().supermarket;

    const { name } = supermarket.find((item) => item.id === Number(id));

    return name;
  },
}));
