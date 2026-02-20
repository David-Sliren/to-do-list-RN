// React
import { useMemo, useState } from "react";

// Zustand
import { useShoppingCombine } from "../store/shopping/shopping";

// Estado global
import { useShallow } from "zustand/react/shallow";

// Utils
import { orderItems } from "../utils/order";

/**
 * Hook personalizado para gestionar la lógica de la pantalla principal de compras.
 * 
 * Este hook encapsula el estado local y global necesario para interactuar con la lista
 * de supermercados, incluyendo filtrado, ordenamiento y acciones del store.
 * 
 * @returns {Object} Un objeto que contiene:
 *  - state: Estado reactivo (texto, edición, listas ordenadas, apertura de modales).
 *  - methods: Acciones para manipular el estado (añadir, editar, borrar, actualizar).
 *  - flashShopping: El ID único de la tienda de "compras rápidas".
 */
function useShopping_index() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global supermercado
  const flashShopping = useShoppingCombine((state) => state.supermarket[0]?.id);
  const { text } = useShoppingCombine((state) => state.inputSupermarket);
  const supermarket = useShoppingCombine(
    useShallow((state) => state.supermarket?.slice(1)),
  );
  const sortSupermarket = useShoppingCombine((state) => state.sortSupermarket);
  const sortCart = useShoppingCombine((state) => state.sortCart);

  const products = useShoppingCombine((state) => state.products);
  const { updateProducts } = useShoppingCombine(
    (state) => state.products_actions,
  );

  const productsBought = useMemo(
    () =>
      products.filter(
        (item) => item.isbought && item.idSupermarket !== flashShopping,
      ),
    [products, flashShopping],
  );

  const sortProductsBought = useMemo(
    () => orderItems(sortCart, productsBought),
    [productsBought, sortCart],
  );

  const sortSupermarkets = useMemo(
    () => orderItems(sortSupermarket, supermarket),
    [sortSupermarket, supermarket],
  );

  const {
    updateInputSupermarket,
    addSupermarket,
    deleteSupermarket,
    editSupermarket,
    updateSortSupermarket,
    updateSortCart,
  } = useShoppingCombine((state) => state.stores_actions);

  return {
    state: {
      text,
      isEdit,
      sortSupermarkets,
      isOpen,
      sortProductsBought,
    },

    methods: {
      setIsEdit,
      setIsOpen,
      addSupermarket,
      updateInputSupermarket,
      deleteSupermarket,
      editSupermarket,
      updateProducts,
      updateSortSupermarket,
      updateSortCart,
    },
    flashShopping,
  };
}

export default useShopping_index;
