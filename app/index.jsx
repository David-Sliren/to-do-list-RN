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

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorBody.aqua }}>
      <LinearGradient
        colors={[colorBody.transparent, colorBody.aqua]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={StyleSheet.absoluteFill}
      />

      <View style={tw`items-center gap-8.9 mt-20 `}>
        <Text
          style={[
            tw`text-sky-200 text-6xl font-bold`,
            {
              textShadowColor: "rgba(0,0,0,0.5)",
              textShadowOffset: { width: -1, height: 0 },
              textShadowRadius: 6,
            },
          ]}
        >
          RENPENTAIN
        </Text>
      </View>
      <View style={tw`gap-2 w-full justify-center items-center p-2 mt-15`}>
        <Activity title="Tareas diarias" icon="flash-outline" />
        <Activity title="Compras" icon="cart-outline" route="/shopping" />
      </View>
    </SafeAreaView>
  );
};

export default Index;
