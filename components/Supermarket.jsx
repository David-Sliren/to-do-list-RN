// RN
import { BlurView } from "expo-blur";
import { Text, Pressable } from "react-native";

// Librerias
import tw from "twrnc";

const Supermarket = ({ total, title = "" }) => {
  return (
    <BlurView
      intensity={40}
      tint="light"
      style={tw` border border-white/80 rounded-2xl overflow-hidden`}
    >
      <Pressable style={tw`flex-row justify-between items-center p-6`}>
        <Text style={tw`text-xl`}>{title}</Text>

        <Text style={tw`text-xl font-semibold`}>{total}</Text>
      </Pressable>
    </BlurView>
  );
};

export default Supermarket;
