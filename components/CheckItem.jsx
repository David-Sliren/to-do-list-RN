// React
import { useState } from "react";

// RN
import { View, Text, Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Moti
import { MotiView } from "moti";

// Librerias
import tw from "twrnc";

const CheckItem = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Pressable
      // key={i}
      style={({ pressed }) =>
        tw`flex-row justify-between items-center  py-2 px-1 ${pressed ? "opacity-80" : "opacity-100"}`
      }
      onPress={() => setIsActive(!isActive)}
      onLongPress={() => console.log("si Funciona")}
    >
      <View style={tw`flex-row items-center gap-2`}>
        <View
          style={tw`border border-black size-5 rounded-full overflow-hidden`}
        >
          <MotiView
            style={tw`bg-black size-full rounded-full`}
            animate={{ scale: isActive ? 0 : 1 }}
            transition={{ type: "spring", duration: 200 }}
          />
        </View>
        <Text style={tw`text-lg`}>Arroz con pollo y leche</Text>
      </View>
      <View>
        <Ionicons name="menu-outline" style={tw`text-4xl`} />
      </View>
    </Pressable>
  );
};

export default CheckItem;
