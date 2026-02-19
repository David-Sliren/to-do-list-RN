// React
import { useMemo, useState } from "react";

// Zustand
import { useShoppingCombine } from "../store/shopping/shopping";

// Estado global
import { useShallow } from "zustand/react/shallow";

// Utils
import { orderItems } from "../utils/order";

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
