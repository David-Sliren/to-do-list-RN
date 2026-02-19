import { useMemo, useState } from "react";
import { useShoppingCombine } from "../store/shopping/shopping";
import { useShallow } from "zustand/react/shallow";

function useShopping_index() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global supermercado
  const supermarket = useShoppingCombine(
    useShallow((state) => state.supermarket.slice(1)),
  );
  const flashShopping = useShoppingCombine((state) => state.supermarket[0]?.id);
  const products = useShoppingCombine((state) => state.products);

  const { text } = useShoppingCombine((state) => state.inputSupermarket);
  const { updateProducts } = useShoppingCombine(
    (state) => state.products_actions,
  );

  const allProductsBought = useMemo(
    () =>
      products.filter(
        (item) => item.isbought && item.idSupermarket !== flashShopping,
      ),
    [products, flashShopping],
  );

  const {
    updateInputSupermarket,
    addSupermarket,
    deleteSupermarket,
    editSupermarket,
  } = useShoppingCombine((state) => state.stores_actions);

  return {
    state: {
      text,
      isEdit,
      supermarket,
      isOpen,
      allProductsBought,
    },

    methods: {
      setIsEdit,
      setIsOpen,
      addSupermarket,
      updateInputSupermarket,
      deleteSupermarket,
      editSupermarket,
      updateProducts,
    },
    flashShopping,
  };
}

export default useShopping_index;
