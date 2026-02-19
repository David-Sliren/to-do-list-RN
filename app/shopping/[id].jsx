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
import { AnimatePresence } from "moti";

function Products() {
  // estados comunes
  const { id } = useLocalSearchParams();
  const sheetsRef = useRef(null);

  const [isOpenCart, setIsOpenCart] = useState(false);

  // estados globals
  const { state, methods, handles } = useShopping_products(id);

  const { isOpen, isEdit, idProduct, productsbuys, pendingProducts, text } =
    state;

  const {
    addProducts,
    editProducts,
    checkProduct,
    getStore,
    updateInput,
    setIsEdit,
    setIsOpen,
  } = methods;

  const { handleChangeStatus, handleDeleteProduct } = handles;

  // name de store
  const name = getStore(id);

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
        title={name}
        subTitle={
          name === "Compras rapidas"
            ? `Tu lista de ${name}`
            : `Tus productos en ${name}`
        }
        icon="bag-handle"
        iconAction={() => setIsOpenCart(!isOpenCart)}
        notifitions={productsbuys.length ? productsbuys.length : false}
      />
      <BannerList
        action={handlePress}
        emptyState={EMTY_CONFIG.products}
        hasChildren={pendingProducts.length || false}
        flatData={pendingProducts}
        flatKeyExtractor={(item) => item.id}
        flatRenderItem={({ item, index }) => (
          <AnimatePresence>
            <CheckItem
              index={index}
              id={item.id}
              title={item.name}
              bought={item.isbought}
              deleteItem={() => handleDeleteProduct(item.id)}
              changeStatus={() => handleChangeStatus(item.id)}
              editItem={() => handleCheckProduts(item.id)}
            />
          </AnimatePresence>
        )}
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
        total={productsbuys.length}
        changeBoolean={isOpenCart}
        backAction={() => setIsOpenCart(false)}
        cartClose={() => setIsOpenCart(false)}
        hasChildren={productsbuys.length || false}
        flatData={productsbuys}
        flatHandle={handleChangeStatus}
      ></ModalCart>
    </ShoppingScreen>
  );
}

export default Products;
