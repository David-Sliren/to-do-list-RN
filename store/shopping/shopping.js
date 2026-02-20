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

// Útil para depuración, pero evita ejecutarlo automáticamente en producción
// const obtener = async () => {
//   const data = await AsyncStorage.removeItem("shopping-store");
//   console.log("storage: ", JSON.parse(data));
// };

// obtener();
