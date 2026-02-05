// RN
import { BlurView } from "expo-blur";
import { Text, Pressable } from "react-native";

// Librerias
import tw from "twrnc";
import ButtonDelete from "./ButtonDelete";
import { View } from "moti";

const Supermarket = ({ total, title = "", deleteItem }) => {
  return (
    <BlurView
      intensity={40}
      tint="light"
      style={tw` border border-white/80 rounded-2xl overflow-hidden`}
    >
      <Pressable style={tw`flex-row justify-between items-center p-6`}>
        <Text style={tw`text-xl`}>{title}</Text>
        <View style={tw`flex-row gap-2 items-center`}>
          {/* <Text style={tw`text-xl font-semibold`}>{total}</Text> */}
          <ButtonDelete action={deleteItem} />
        </View>
      </Pressable>
    </BlurView>
  );
};

export default Supermarket;
