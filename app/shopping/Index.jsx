// React
import { useRef, useState } from "react";

// RN
import { View } from "react-native";

// Librerias
import tw from "twrnc";

// constants
import Supermarket from "../../components/Supermarket";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import InputAdd from "../../components/InputAdd";
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import BannerList from "../../components/BannerList";
import useShopping_index from "../../hooks/useShopping_index";
import ModalCart from "../../components/Modals_types/ModalCart";
// import CheckItem from "../../components/CheckItem";
import ItemBought from "../../components/ItemBought";
import ButtonAddTask from "../../components/ButtonAddTask";

const Index = () => {
  const sheetsRef = useRef(null);
  const {
    text,
    isEdit,
    addSection,
    supermarket,
    setIsEdit,
    setAddSection,
    deleteSupermarket,
    updateInputSupermarket,
    addSupermarket,
    editSupermarket,
    allProductsBought,
    updateProducts,
  } = useShopping_index();

  const [isOpenCart, setIsOpenCart] = useState(false);

  function handlePress() {
    if (addSection) {
      sheetsRef.current?.close();
      setAddSection(false);
      return;
    }
    updateInputSupermarket("");
    sheetsRef.current?.expand();
    setAddSection(true);
    setIsEdit(false);
  }

  function handleNewSupermarket() {
    addSupermarket();
    sheetsRef.current?.close();
    setAddSection(true);
  }

  function handleEditSupermarket(value) {
    editSupermarket(value);
    sheetsRef.current?.expand();
    setAddSection(false);
    setIsEdit(true);
  }

  return (
    <ShoppingScreen>
      <View style={tw``}>
        <BannerTitle
          title="Compras"
          subTitle="Tu lista de supermercados"
          icon="cart"
          iconAction={() => setIsOpenCart(!isOpenCart)}
          notifitions={
            allProductsBought.length ? allProductsBought.length : false
          }
        />
      </View>
      <BannerList action={handlePress}>
        {supermarket.map((item) => (
          <Supermarket
            key={item.id}
            id={item.id}
            title={item.name}
            deleteItem={() => deleteSupermarket(item.id)}
            editItem={() => handleEditSupermarket(item.id)}
          />
        ))}
      </BannerList>
      <ModalSeccion
        ref={sheetsRef}
        action={() => setAddSection(false)}
        title={isEdit ? "Editar" : "Supermercado"}
        size="66%"
        isOpen={addSection}
      >
        <InputAdd
          label="Nombre"
          placeholderInput={isEdit ? "Editar nombre" : "Agregar supermercado"}
          value={text}
          action={updateInputSupermarket}
          maxCharater={14}
        />

        <ButtonAddTask action={handleNewSupermarket} />
      </ModalSeccion>
      <ModalCart
        title="Carrito"
        subTitle="tus compras"
        total={allProductsBought.length}
        changeBoolean={isOpenCart}
        backAction={() => setIsOpenCart(false)}
        cartClose={() => setIsOpenCart(false)}
      >
        {allProductsBought.map((item) => (
          <ItemBought
            key={item.id}
            title={item.name}
            subTitle={item.supermarket}
            bought={item.isbought}
            deleteItem={() => updateProducts(item.id)}
          />
        ))}
      </ModalCart>
    </ShoppingScreen>
  );
};

export default Index;
