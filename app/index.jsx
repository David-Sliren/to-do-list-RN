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
import AddActivity from "../components/AddActivity";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={tw` flex-1 items-center overflow-hidden bg-zinc-200/45`}>
        <LinearGradient
          colors={[colorBody.transparent, colorBody.aqua]}
          locations={[0.8, 1]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={[tw`flex-1`, StyleSheet.absoluteFill]}
        />

        <View style={tw`mb-10 mt-25 items-center gap-8.9 `}>
          <Text
            style={[
              tw`text-sky-500 text-5xl font-extrabold`,
              {
                textShadowColor: "rgba(0,0,0,0.6)",
                textShadowOffset: { width: 2, height: -2 },
                textShadowRadius: 4,
              },
            ]}
          >
            RENPETAIN
          </Text>
        </View>
        <View style={tw` flex-row flex-wrap  gap-2 w-full justify-center p-2`}>
          <Activity title="Tareas diarias" icon="medical" />
          <Activity title="Compras" icon="cart" route="/shopping" />
          <AddActivity />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
