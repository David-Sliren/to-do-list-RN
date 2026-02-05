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
        <ButtonAdd action={handleClick} />

        <ScrollView
          contentContainerStyle={tw`gap-3 pb-10`}
          showsVerticalScrollIndicator={false}
        >
          <Supermarket title="Surtifamiliar" total={12} />
          <Supermarket title="Mercapaba" total={20} />
          <Supermarket title="Ara" total={12} />
          <Supermarket title="D1" total={20} />
        </ScrollView>
      </BlurView>
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
