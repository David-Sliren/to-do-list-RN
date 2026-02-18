// RN
import { View, Text } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Moti
import { MotiView } from "moti";

// Librerias
import tw from "twrnc";
import ButtonDelete from "./ButtonDelete";
import { LinearTransition } from "react-native-reanimated";

const ItemBought = ({ title = "", subTitle = "", bought, deleteItem }) => {
  return (
    <MotiView
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: -200, opacity: 0 }}
      exitTransition={{ duration: 200 }}
      layout={LinearTransition}
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
    </MotiView>
  );
};

export default ItemBought;
