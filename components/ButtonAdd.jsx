// RN
import { Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Librerias
import tw from "twrnc";
import { colorBody } from "../constants/colorsPrincipals";

const ButtonAdd = ({ action }) => {
  return (
    <Pressable
      onPress={() => action()}
      style={tw`absolute bottom-20 right-4 bg-black/85 justify-center items-center size-15 rounded-full z-1`}
    >
      <Ionicons name="add" style={[tw`text-2xl`, { color: colorBody.aqua }]} />
    </Pressable>
  );
};

export default ButtonAdd;
