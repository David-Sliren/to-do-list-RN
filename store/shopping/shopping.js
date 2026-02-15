import { create } from "zustand";
import { useShoppingProducts } from "../slices/shopping.products";
import { useShoppingStores } from "../slices/shopping.stores";

export const useShoppingCombine = create((...a) => ({
  ...useShoppingProducts(...a),
  ...useShoppingStores(...a),
}));
