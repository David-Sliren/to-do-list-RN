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
import { useRef } from "react";
import InputAdd from "../../components/InputAdd";
import { Pressable, Text } from "react-native";
import useShopping_products from "../../hooks/useShopping_products";

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
    Products,
    updateInput,
    addProducts,
    editProducts,
    handleChangeStatus,
    handleDeleteProduct,
    getStore,
  } = useShopping_products();

  // name de store
  const name = getStore(id);

  const store = filterStore(id);

  function handlePress() {
    if (isOpen) {
      sheetsRef.current.close();
      setIsOpen(false);
      return;
    }

    updateInput("");
    setIsEdit(false);
    sheetsRef.current.expand();
    setIsOpen(true);
  }

  function handleAddProduts(value) {
    addProducts(value);
    sheetsRef.current.close();
    setIsOpen(true);
  }

  function handleEditProduts(value) {
    editProducts(value);
    if (isOpen) {
      sheetsRef.current.close();
      setIsOpen(false);
      setIsEdit(true);
      return;
    }
    sheetsRef.current.expand();
    setIsOpen(true);
    setIsEdit(true);
  }

  return (
    <ShoppingScreen>
      <BannerTitle
        title={name}
        subTitle={`Tus compras en ${name}`}
        icon="bag-handle"
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
            editItem={() => handleEditProduts(item.id)}
          />
        ))}
      </BannerList>
      <ModalSeccion
        ref={sheetsRef}
        action={setIsOpen}
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
            !isEdit ? handleAddProduts(id) : handleEditProduts(idProduct)
          }
        >
          <Text>Agregar</Text>
        </Pressable>
      </ModalSeccion>
    </ShoppingScreen>
  );
}

export default Products;
