import { useMemo, useState } from "react";
import { useShoppingCombine } from "../store/shopping/shopping";

// Utils
import { orderItems } from "../utils/order";

function useShopping_products(id) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global produtos
  const { text, idProduct } = useShoppingCombine(
    (state) => state.inputProducts,
  );
  const products = useShoppingCombine((state) => state.products);
  const sortProducts = useShoppingCombine((state) => state.sortProducts);
  const sortCart = useShoppingCombine((state) => state.sortCart);
  const { updateSortCart } = useShoppingCombine(
    (state) => state.stores_actions,
  );

  const {
    updateInput,
    addProducts,
    checkProduct,
    editProducts,
    deleteProducts,
    getStore,
    updateProducts,
    updateSortProducts,
  } = useShoppingCombine((state) => state.products_actions);

  const currentStoreProducts = useMemo(() => {
    return products
      ? products.filter((items) => items.idSupermarket === id)
      : [];
  }, [products, id]);

  const productsBuys = useMemo(
    () => currentStoreProducts.filter((items) => items.isbought === true),
    [currentStoreProducts],
  );

  const pendingProducts = useMemo(
    () => currentStoreProducts.filter((items) => items.isbought !== true),
    [currentStoreProducts],
  );

  const sortProductsbuys = useMemo(
    () => orderItems(sortCart, productsBuys),
    [productsBuys, sortCart],
  );

  const sortPendingProducts = useMemo(
    () => orderItems(sortProducts, pendingProducts),
    [pendingProducts, sortProducts],
  );

  const handleChangeStatus = (id) => updateProducts(id);

  const handleDeleteProduct = (id) => deleteProducts(id);

  return {
    state: {
      isOpen,
      isEdit,
      text,
      idProduct,
      currentStoreProducts,
      sortProductsbuys,
      sortPendingProducts,
    },

    methods: {
      setIsOpen,
      setIsEdit,
      getStore,
      addProducts,
      checkProduct,
      editProducts,
      updateInput,
      updateSortProducts,
      updateSortCart,
    },

    handles: {
      handleChangeStatus,
      handleDeleteProduct,
    },
  };
}

export default useShopping_products;
