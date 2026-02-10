// RN
// import { Pressable, Text, View } from "react-native";

// Expo
import { useLocalSearchParams } from "expo-router";

// Librerias
// import tw from "twrnc";

// Componentes
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import BannerList from "../../components/BannerList";
import CheckItem from "../../components/CheckItem";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import { useRef, useState } from "react";
import InputAdd from "../../components/InputAdd";
import { Pressable, Text } from "react-native";
import useShopping_products from "../../hooks/useShopping_products";
import ModalCart from "../../components/Modals_types/ModalCart";
import ItemBought from "../../components/ItemBought";

function Products() {
  // estados
  const { id } = useLocalSearchParams();
  const sheetsRef = useRef(null);

  // estados globals
  const {
    isOpen,
    isEdit,
    text,
    idProduct,
    filterStore,
    setIsOpen,
    setIsEdit,
    updateInput,
    addProducts,
    editProducts,
    handleChangeStatus,
    handleDeleteProduct,
    getStore,
    checkProduct,
    cartStore,
  } = useShopping_products();

  const [isOpenCart, setIsOpenCart] = useState(false);

  // name de store
  const name = getStore(id);

  const store = filterStore(id);
  const cart = cartStore(id);

  function handlePress() {
    if (!isOpen) {
      updateInput("");
      sheetsRef.current.expand();
      setIsOpen(true);
      setIsEdit(false);
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
        subTitle={`Tus compras en ${name}`}
        icon="bag-handle"
        iconAction={() => setIsOpenCart(!isOpenCart)}
      />
      <BannerList action={handlePress}>
        {store?.map((item) => (
          <CheckItem
            key={item.id}
            id={item.id}
            title={item.name}
            bought={item.isbought}
            deleteItem={() => handleDeleteProduct(item.id)}
            changeStatus={() => handleChangeStatus(item.id)}
            editItem={() => handleCheckProduts(item.id)}
          />
        ))}
      </BannerList>
      <ModalSeccion
        ref={sheetsRef}
        action={() => setIsOpen(false)}
        title={isEdit ? "Editar" : "Producto"}
        size="66%"
      >
        <InputAdd
          label="Nombre"
          placeholderInput={isEdit ? "Editar producto" : "Agregar producto"}
          value={text}
          action={updateInput}
          maxCharater={32}
        />

        <Pressable
          onPress={() =>
            isEdit ? handleEditProduts(idProduct) : handleAddProduts(id)
          }
        >
          <Text>Agregar</Text>
        </Pressable>
      </ModalSeccion>
      <ModalCart
        title="Bolsa"
        subTitle={`Compras en ${name}`}
        total={cart.length}
        changeBoolean={isOpenCart}
        backAction={() => setIsOpenCart(false)}
        cartClose={() => setIsOpenCart(false)}
      >
        {cart.map((item) => (
          <ItemBought
            key={item.id}
            title={item.name}
            subTitle={item.supermarket}
            deleteItem={() => handleChangeStatus(item.id)}
            bought={item.isbought}
          />
        ))}
      </ModalCart>
    </ShoppingScreen>
  );
}

export default Products;
