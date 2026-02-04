// RN
import { View, Text, Pressable, ScrollView } from "react-native";

// expo
import { Ionicons } from "@expo/vector-icons";

// Librerias
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

// constants
import { colorBody } from "../../constants/colorsPrincipals";
import Supermarket from "../../components/Supermarket";
import ButtonAdd from "../../components/ButtonAdd";
import { useRef, useState } from "react";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import InputAdd from "../../components/InputAdd";

const Index = () => {
  const sheetsRef = useRef(null);
  const [addSection, setAddSection] = useState(false);

  function handleClick() {
    if (addSection) {
      sheetsRef.current?.close();
      setAddSection(false);
      // console.log("hola");
      return;
    }
    sheetsRef.current?.expand();
    setAddSection(true);
    // console.log("que mas");
  }

  return (
    <SafeAreaView style={{ backgroundColor: colorBody.aqua, flex: 1 }}>
      <View style={tw``}>
        <View style={tw`flex-row justify-between items-center py-2 px-4`}>
          <View>
            <Text style={tw`text-4xl font-semibold`}>Compras</Text>
          </View>
          <Pressable>
            <Ionicons name="cart" style={tw`text-5xl text-white`} />
          </Pressable>
        </View>
      </View>
      <View style={tw`flex-1 bg-sky-400 rounded-t-[12] pt-10`}>
        <ButtonAdd action={handleClick} />
        <View style={tw`flex-row justify-between items-center py-2 px-4`}>
          <ScrollView contentContainerStyle={tw`w-full gap-2 py-2`}>
            <Supermarket title="Surtifamiliar" total={12} />
            <Supermarket title="Mercapaba" total={20} />
            <Supermarket title="Ara" total={12} />
            <Supermarket title="D1" total={20} />
          </ScrollView>
        </View>
      </View>
      <ModalSeccion
        ref={sheetsRef}
        action={() => setAddSection(false)}
        title="Agregar seccion"
        size="66%"
      >
        <InputAdd label="Nombre" placeholderInput="Agregar nombre seccion" />
      </ModalSeccion>
    </SafeAreaView>
  );
};

export default Index;
