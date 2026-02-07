import { useState } from "react";
import { useShopping } from "../store/shopping/shopping.store";

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
  };
}

export default useShopping_index;
