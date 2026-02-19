// Zustand
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Slices
import { useShoppingProducts } from "../slices/shopping.products";
import { useShoppingStores } from "../slices/shopping.stores";

// Almacenamiento
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useShoppingCombine = create(
  persist(
    (...a) => ({
      ...useShoppingProducts(...a),
      ...useShoppingStores(...a),
    }),
    {
      name: "shopping-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
