// React
import { View, Text, Pressable } from "react-native";

// Expo
import Ionicons from "@expo/vector-icons/Ionicons";

// Librerias
import tw from "twrnc";

const CheckBox = ({ isSelect = !true, action }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        tw` ${pressed ? "opacity-80" : "opacity-100"}
        ${
          isSelect ? "bg-zinc-900" : "bg-zinc-300/80 border-black"
        }  justify-center items-center size-7 rounded-lg border-2 shadow-md`,
      ]}
      onPress={action}
    >
      {isSelect && <Ionicons name="checkmark" size={25} color="white" />}
    </Pressable>
  );
};

export default CheckBox;
