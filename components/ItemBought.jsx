// RN
import { View, Text, Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Moti
import { MotiView } from "moti";

// Librerias
import tw from "twrnc";
import ButtonDelete from "./ButtonDelete";

const ItemBought = ({ title = "", subTitle = "", bought, deleteItem }) => {
  return (
    <View
      style={tw`relative flex-row justify-between items-center   py-2 px-1 rounded-lg overflow-hidden`}
    >
      <View style={tw`flex-row items-center gap-2`}>
        <View style={tw`justify-center items-center size-6 overflow-hidden`}>
          <Ionicons name="sparkles" style={tw` text-lg rounded-full`} />
        </View>
        <View>
          <Text style={tw`text-xl`}>{title}</Text>
          <Text style={tw`text-sm font-light`}>{subTitle}</Text>
        </View>
      </View>
      <ButtonDelete action={deleteItem} />
    </View>
  );
};

export default ItemBought;
