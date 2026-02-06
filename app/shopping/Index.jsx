// React
import { useRef, useState } from "react";

// RN
import { View, Text, Pressable, ScrollView } from "react-native";

// expo
import { Ionicons } from "@expo/vector-icons";

// Librerias
import tw from "twrnc";

// constants
import Supermarket from "../../components/Supermarket";
import ButtonAdd from "../../components/ButtonAdd";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import InputAdd from "../../components/InputAdd";
import { BlurView } from "expo-blur";
import { useShopping } from "../../store/shopping.store";
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import BannerList from "../../components/BannerList";

const Index = () => {
  const sheetsRef = useRef(null);
  const [addSection, setAddSection] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Estado global supermercado
  const supermarket = useShopping((state) => state.supermarket);

  const { text } = useShopping((state) => state.inputSupermarket);
  const updateInputSupermarket = useShopping(
    (state) => state.updateInputSupermarket,
  );
  const setSupermarket = useShopping((state) => state.setSupermarket);
  const deleteSupermarket = useShopping((state) => state.deleteSupermarket);
  const editSupermarket = useShopping((state) => state.editSupermarket);

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
    setSupermarket();
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
          subTitle="Tu lista de supermercado"
          icon="cart"
        />
      </View>
      <BannerList>
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
      >
        <InputAdd
          label="Nombre"
          placeholderInput={isEdit ? "Editar nombre" : "Agregar supermercado"}
          value={text}
          action={updateInputSupermarket}
          maxCharater={18}
        />

        <Pressable onPress={handleNewSupermarket}>
          <Text>Agregar</Text>
        </Pressable>
      </ModalSeccion>
    </ShoppingScreen>
  );
};

export default Index;
