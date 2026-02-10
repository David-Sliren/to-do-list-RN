import { useState } from "react";
import { useShopping } from "../store/shopping/shopping.store";
import { useShoppingProducts } from "../store/shopping/shopping.products";

function useShopping_index() {
  const [addSection, setAddSection] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global supermercado
  const supermarket = useShopping((state) => state.supermarket);

  const { text } = useShopping((state) => state.inputSupermarket);
  const updateInputSupermarket = useShopping(
    (state) => state.updateInputSupermarket,
  );
  const setSupermarket = useShopping((state) => state.setSupermarket);
  const deleteSupermarket = useShopping((state) => state.deleteSupermarket);
  const editSupermarket = useShopping((state) => state.editSupermarket);
  const products = useShoppingProducts((state) => state.products);
  const allProductsBought = products.filter((item) => item.isbought === true);

  return {
    text,
    isEdit,
    supermarket,
    addSection,

    // metodos
    setIsEdit,
    setAddSection,
    setSupermarket,
    updateInputSupermarket,
    deleteSupermarket,
    editSupermarket,
    allProductsBought,
  };
}

export default useShopping_index;
