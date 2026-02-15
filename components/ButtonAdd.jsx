// RN
import { Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Librerias
import tw from "twrnc";
import { BlurView } from "expo-blur";

const ButtonAdd = ({ action }) => {
  return (
    <BlurView
      intensity={40}
      tint="light"
      style={tw`absolute bottom-8 right-4 border border-white/50 size-15 rounded-full overflow-hidden z-1`}
    >
      <Pressable
        onPress={() => action()}
        style={tw` justify-center items-center size-full `}
      >
        <Ionicons name="add" style={tw`text-3xl text-black`} />
      </Pressable>
    </BlurView>
  );
};

export default ButtonAdd;
