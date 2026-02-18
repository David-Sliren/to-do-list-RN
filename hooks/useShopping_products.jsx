import { useState } from "react";
import { useShoppingCombine } from "../store/shopping/shopping";
function useShopping_products() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global produtos
  const { text, idProduct } = useShoppingCombine(
    (state) => state.inputProducts,
  );
  const products = useShoppingCombine((state) => state.products);

  const {
    updateInput,
    addProducts,
    checkProduct,
    editProducts,
    deleteProducts,
    getStore,
    updateProducts,
  } = useShoppingCombine((state) => state.products_actions);

  const filterStore = (id) =>
    products
      ? products.filter((items) => items.idSupermarket === Number(id))
      : [];

  const productsbuys = (id) =>
    filterStore(id).filter((items) => items.isbought === true);

  const pendingProducts = (id) =>
    filterStore(id).filter((items) => items.isbought !== true);

  const handleChangeStatus = (id) => updateProducts(id);

  const handleDeleteProduct = (id) => deleteProducts(id);

  return {
    state: {
      isOpen,
      isEdit,
      text,
      idProduct,
      filterStore,
      productsbuys,
      pendingProducts,
    },

    methods: {
      setIsOpen,
      setIsEdit,
      updateInput,
      addProducts,
      editProducts,
      checkProduct,
      getStore,
    },

    handles: {
      handleChangeStatus,
      handleDeleteProduct,
    },
  };
}

export default useShopping_products;
