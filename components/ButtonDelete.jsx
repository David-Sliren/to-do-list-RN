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
        tw`${pressed ? "opacity-80" : "opacity-100"} ${
          fondo ? "bg-black" : "bg-red-500"
        } justify-center items-center size-8 rounded-lg shadow-md`,
      ]}
      onPress={action}
    >
      <Ionicons name="trash-outline" size={25} color="white" />
    </Pressable>
  );
};

export default ButtonDelete;
