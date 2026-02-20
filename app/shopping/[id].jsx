// Expo
import { useLocalSearchParams } from "expo-router";

// Constantes
import { EMTY_CONFIG } from "../../constants/Personalized";

// Componentes
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import BannerList from "../../components/BannerList";
import CheckItem from "../../components/CheckItem";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import { useRef, useState } from "react";
import InputAdd from "../../components/InputAdd";
import ModalCart from "../../components/Modals_types/ModalCart";
import ButtonAddTask from "../../components/ButtonAddTask";

// Estados globales
import useShopping_products from "../../hooks/useShopping_products";

function Products() {
  // estados comunes
  const { id } = useLocalSearchParams();
  const sheetsRef = useRef(null);

  const [isOpenCart, setIsOpenCart] = useState(false);

  // estados globals
  const { state, methods, handles } = useShopping_products(id);

  const {
    text,
    isOpen,
    isEdit,
    idProduct,
    nameStore,
    sortProductsbuys,
    sortPendingProducts,
  } = state;

  const {
    setIsEdit,
    setIsOpen,
    addProducts,
    checkProduct,
    editProducts,
    updateInput,
    updateSortProducts,
    updateSortCart,
  } = methods;

  const { handleChangeStatus, handleDeleteProduct } = handles;

  function handlePress() {
    if (!isOpen) {
      updateInput("");
      setIsOpen(true);
      setIsEdit(false);
      sheetsRef.current.expand();
    }
  }

  function handleAddProduts(value) {
    addProducts(value);
    sheetsRef.current.close();
    setIsOpen(false);
  }

  function handleCheckProduts(value) {
    if (!isOpen) {
      checkProduct(value);
      sheetsRef.current.expand();
      setIsOpen(true);
      setIsEdit(true);
    }
  }

  function handleEditProduts(value) {
    editProducts(value);
    sheetsRef.current.close();
    setIsOpen(false);
    setIsEdit(false);
  }

  return (
    <ShoppingScreen>
      <BannerTitle
        title={nameStore}
        subTitle={
          nameStore === "Compras rapidas"
            ? `Tu lista de ${nameStore}`
            : `Tus productos en ${nameStore}`
        }
        icon="bag-handle"
        iconAction={() => setIsOpenCart(!isOpenCart)}
        notifitions={sortProductsbuys.length ? sortProductsbuys.length : false}
      />
      <BannerList
        action={handlePress}
        emptyState={EMTY_CONFIG.products}
        hasChildren={sortPendingProducts.length || false}
        flatData={sortPendingProducts}
        flatKeyExtractor={(item) => item.id}
        flatRenderItem={({ item, index }) => (
          <CheckItem
            index={index}
            id={item.id}
            title={item.name}
            bought={item.isbought}
            deleteItem={() => handleDeleteProduct(item.id)}
            changeStatus={() => handleChangeStatus(item.id)}
            editItem={() => handleCheckProduts(item.id)}
          />
        )}
        flatHandle={updateSortProducts}
      />
      <ModalSeccion
        ref={sheetsRef}
        action={() => setIsOpen(false)}
        title={isEdit ? "Editar" : "Productos"}
        size="66%"
        isOpen={isOpen}
      >
        <InputAdd
          label="Nombre"
          placeholderInput={isEdit ? "Editar producto" : "Escribe un producto"}
          value={text}
          action={updateInput}
          maxCharater={32}
        />

        <ButtonAddTask
          action={() =>
            isEdit ? handleEditProduts(idProduct) : handleAddProduts(id)
          }
        />
      </ModalSeccion>
      <ModalCart
        title="Bolsa"
        subTitle={"Tus compras"}
        total={sortProductsbuys.length}
        changeBoolean={isOpenCart}
        backAction={() => setIsOpenCart(false)}
        cartClose={() => setIsOpenCart(false)}
        hasChildren={sortProductsbuys.length || false}
        flatData={sortProductsbuys}
        flatHandle={handleChangeStatus}
        flatHeaderHandle={updateSortCart}
      ></ModalCart>
    </ShoppingScreen>
  );
}

export default Products;
