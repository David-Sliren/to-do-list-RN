import { useMemo, useState } from "react";
import { useShoppingCombine } from "../store/shopping/shopping";
function useShopping_products(id) {
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

  const currentStoreProducts = useMemo(() => {
    return products
      ? products.filter((items) => items.idSupermarket === Number(id))
      : [];
  }, [products, id]);

  const productsbuys = useMemo(
    () => currentStoreProducts.filter((items) => items.isbought === true),
    [currentStoreProducts],
  );

  const pendingProducts = useMemo(
    () => currentStoreProducts.filter((items) => items.isbought !== true),
    [currentStoreProducts],
  );

  const handleChangeStatus = (id) => updateProducts(id);

  const handleDeleteProduct = (id) => deleteProducts(id);

  return {
    state: {
      isOpen,
      isEdit,
      text,
      idProduct,
      filterStore: currentStoreProducts,
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
