import { useState } from "react";
import { useShoppingProducts } from "../store/shopping/shopping.products";

function useShopping_products() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global produtos
  const products = useShoppingProducts((state) => state.products);
  const { text, idProduct } = useShoppingProducts(
    (state) => state.inputProducts,
  );
  const updateInput = useShoppingProducts((state) => state.updateInput);
  const addProducts = useShoppingProducts((state) => state.addProducts);
  const editProducts = useShoppingProducts((state) => state.editProducts);
  const updateProducts = useShoppingProducts((state) => state.updateProduts);
  const deleteProducts = useShoppingProducts((state) => state.deleteProducts);
  const getStore = useShoppingProducts((state) => state.getStore);

  function handleChangeStatus(id) {
    updateProducts(id);
  }

  function handleDeleteProduct(id) {
    deleteProducts(id);
  }

  return {
    isOpen,
    isEdit,
    text,
    idProduct,
    products,

    // metodos
    setIsOpen,
    setIsEdit,
    updateInput,
    addProducts,
    editProducts,
    getStore,

    // Handles
    handleChangeStatus,
    handleDeleteProduct,
  };
}

export default useShopping_products;
