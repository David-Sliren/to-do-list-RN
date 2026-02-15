// React
import { View, Text, StyleSheet } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";

// Librerias
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

// Constants
import { colorBody } from "../constants/colorsPrincipals";

// Componentes
import Activity from "../components/Activity";

// estate global
import useShopping_index from "../hooks/useShopping_index";

const Index = () => {
  const { flashShopping } = useShopping_index();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorBody.aqua }}>
      <LinearGradient
        colors={[colorBody.aqua, "white"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={StyleSheet.absoluteFill}
      />

      <View style={tw`items-center gap-8.9 mt-20 mb-15 `}>
        <Text
          style={[
            tw`text-sky-400 text-5xl font-bold`,
            {
              textShadowColor: "rgba(0,0,0,0.5)",
              textShadowOffset: { width: 1, height: 0 },
              textShadowRadius: 6,
            },
          ]}
        >
          RENPENTAIN
        </Text>
      </View>
      <View style={tw`gap-4 w-full justify-center items-center p-2 mt-15`}>
        <View style={tw`absolute -top-8 left-4 `}>
          <Text style={tw`text-2xl font-bold text-sky-500`}>Compras</Text>
        </View>
        <Activity
          title="Rapidas"
          icon="flash-outline"
          route={`/shopping/${flashShopping}`}
          image={require("../assets/images/Cesto-3d.png")}
        />
        <Activity
          title="Tiendas"
          icon="cart-outline"
          route="/shopping"
          image={require("../assets/images/Carrito-3d.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
