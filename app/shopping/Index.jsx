// React
import { useRef, useState } from "react";

// RN
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";

// expo
import { Ionicons } from "@expo/vector-icons";

// Librerias
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

// constants
import { colorBody } from "../../constants/colorsPrincipals";
import Supermarket from "../../components/Supermarket";
import ButtonAdd from "../../components/ButtonAdd";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import InputAdd from "../../components/InputAdd";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useShopping } from "../../store/shopping.store";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: colorBody.aqua }}>
      <LinearGradient
        colors={[colorBody.aqua, "#ffffff80"]}
        locations={[0, 1]}
        start={{ x: 0.2, y: 0.8 }}
        end={{ x: 1, y: 0.5 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={tw``}>
        <View style={tw`flex-row justify-between items-center pt-8 pb-8 px-6`}>
          <View>
            <Text
              style={[
                tw`text-4xl font-bold text-slate-800`,
                {
                  textShadowColor: "rgba(0,0,0,0.15)",
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 4,
                },
              ]}
            >
              Compras
            </Text>
            <Text style={tw`text-slate-800/80 text-base font-medium mt-1`}>
              Tu lista de supermercado
            </Text>
          </View>
          <BlurView
            intensity={20}
            tint="dark"
            style={tw`size-14 justify-center items-center border-black/20 border rounded-2xl overflow-hidden`}
          >
            <Pressable>
              <Ionicons name="cart" style={tw`text-3xl text-black/80`} />
            </Pressable>
          </BlurView>
        </View>
      </View>
      <BlurView
        intensity={20}
        tint="dark"
        style={tw`flex-1 border border-black/20 rounded-t-[35px] pt-8 px-5 overflow-hidden`}
      >
        <ButtonAdd action={handlePress} />

        <ScrollView
          contentContainerStyle={tw`gap-3 pb-10`}
          showsVerticalScrollIndicator={false}
        >
          {supermarket.map((item) => (
            <Supermarket
              key={item.id}
              title={item.name}
              deleteItem={() => deleteSupermarket(item.id)}
              editItem={() => handleEditSupermarket(item.id)}
            />
          ))}
        </ScrollView>
      </BlurView>
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
    </SafeAreaView>
  );
};

export default Index;
