// React
import { useRef, useState } from "react";

// RN
import { View } from "react-native";

// Constantes
import { EMTY_CONFIG } from "../../constants/Personalized";

// Librerias
import tw from "twrnc";

// Components
import Supermarket from "../../components/Supermarket";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import InputAdd from "../../components/InputAdd";
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import BannerList from "../../components/BannerList";
import useShopping_index from "../../hooks/useShopping_index";
import ModalCart from "../../components/Modals_types/ModalCart";
import ButtonAddTask from "../../components/ButtonAddTask";

const Index = () => {
  const sheetsRef = useRef(null);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const { state, methods } = useShopping_index();

  const { sortSupermarkets, sortProductsBought, isEdit, isOpen, text } = state;

  const {
    setIsEdit,
    setIsOpen,
    addSupermarket,
    editSupermarket,
    deleteSupermarket,
    updateProducts,
    updateInputSupermarket,
    updateSortSupermarket,
    updateSortCart,
  } = methods;

  function handlePress() {
    if (isOpen) {
      sheetsRef.current?.close();
      setIsOpen(false);
      return;
    }
    updateInputSupermarket("");
    sheetsRef.current?.expand();
    setIsOpen(true);
    setIsEdit(false);
  }

  function handleNewSupermarket() {
    addSupermarket();
    sheetsRef.current?.close();
    setIsOpen(true);
  }

  function handleEditSupermarket(value) {
    editSupermarket(value);
    sheetsRef.current?.expand();
    setIsOpen(false);
    setIsEdit(true);
  }

  return (
    <ShoppingScreen>
      <View style={tw``}>
        <BannerTitle
          title="Mercado"
          subTitle="Tu lista de supermercados"
          icon="cart"
          iconAction={() => setIsOpenCart(!isOpenCart)}
          notifitions={
            sortProductsBought.length ? sortProductsBought.length : false
          }
        />
      </View>
      <BannerList
        action={handlePress}
        emptyState={EMTY_CONFIG.supermarket}
        hasChildren={sortSupermarkets.length || false}
        flatData={sortSupermarkets}
        flatRenderItem={({ item }) => (
          <Supermarket
            id={item.id}
            title={item.name}
            deleteItem={() => deleteSupermarket(item.id)}
            editItem={() => handleEditSupermarket(item.id)}
          />
        )}
        flatKeyExtractor={(item) => item.id}
        flatHandle={updateSortSupermarket}
      />
      <ModalSeccion
        ref={sheetsRef}
        action={() => setIsOpen(false)}
        title={isEdit ? "Editar" : "Supermercados"}
        size="66%"
        isOpen={isOpen}
      >
        <InputAdd
          label="Nombre"
          placeholderInput={
            isEdit ? "Editar nombre" : "Escribe un supermercado"
          }
          value={text}
          action={updateInputSupermarket}
          maxCharater={14}
        />

        <ButtonAddTask action={handleNewSupermarket} />
      </ModalSeccion>
      <ModalCart
        title="Carrito"
        subTitle="Todas tus compras"
        total={sortProductsBought.length}
        changeBoolean={isOpenCart}
        backAction={() => setIsOpenCart(false)}
        cartClose={() => setIsOpenCart(false)}
        hasChildren={sortProductsBought.length || false}
        flatData={sortProductsBought}
        flatHandle={updateProducts}
        flatHeaderHandle={updateSortCart}
      ></ModalCart>
    </ShoppingScreen>
  );
};

export default Index;
