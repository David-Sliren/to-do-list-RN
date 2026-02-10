// React
import { Pressable } from "react-native";

// Expo
import Ionicons from "@expo/vector-icons/Ionicons";

// Librerias
import tw from "twrnc";

const ButtonDelete = ({ action, fondo }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        tw`${pressed ? "opacity-80" : "opacity-100"} justify-center items-center size-8`,
      ]}
      onPress={action}
    >
      <Ionicons name="trash-outline" size={25} color="black" />
    </Pressable>
  );
};

export default ButtonDelete;
