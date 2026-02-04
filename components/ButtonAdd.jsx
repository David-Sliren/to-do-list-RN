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
      style={[
        tw`absolute bottom-20 right-4 justify-center items-center size-15 rounded-full z-1`,
        { backgroundColor: colorBody.aqua },
      ]}
    >
      <Ionicons name="add" style={tw`text-2xl text-black`} />
    </Pressable>
  );
};

export default ButtonAdd;
