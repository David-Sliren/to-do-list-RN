import { useEffect, useState } from "react";
import { useShoppingCombine } from "../store/shopping/shopping";
import { useShallow } from "zustand/react/shallow";

function useShopping_index() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global supermercado
  const supermarket = useShoppingCombine(
    useShallow((state) => state.supermarket.slice(1)),
  );
  const flashShopping = useShoppingCombine((state) => state.supermarket[0].id);
  const allProductsBought = useShoppingCombine(
    useShallow((state) =>
      state.products.filter(
        (item) =>
          item.isbought === true && item.idSupermarket !== flashShopping,
      ),
    ),
  );
  const { text } = useShoppingCombine((state) => state.inputSupermarket);
  const { updateProducts, clearProducts } = useShoppingCombine(
    (state) => state.products_actions,
  );

  useEffect(() => {
    if (!supermarket.length && allProductsBought.length) {
      clearProducts();
    }
  }, [supermarket, clearProducts, allProductsBought]);

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
