import { useState } from "react";
import { useShoppingCombine } from "../store/shopping/shopping";
import { useShallow } from "zustand/react/shallow";

function useShopping_index() {
  const [addSection, setAddSection] = useState(false);
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

  const {
    updateInputSupermarket,
    addSupermarket,
    deleteSupermarket,
    editSupermarket,
    updateProduts,
  } = useShoppingCombine((state) => state.stores_actions);

  return {
    text,
    isEdit,
    supermarket,
    addSection,
    flashShopping,

    // metodos
    setIsEdit,
    setAddSection,
    addSupermarket,
    updateInputSupermarket,
    deleteSupermarket,
    editSupermarket,
    allProductsBought,
    updateProduts,
  };
}

export default useShopping_index;
