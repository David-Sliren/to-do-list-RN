import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import tw from "twrnc";
const Activity = ({ title = "", icon = "" }) => {
  return (
    <View style={tw`bg-red-400 size-48 rounded-lg`}>
      <Text style={tw` p-2 text-white text-2xl font-semibold  `}>{title}</Text>
      <Ionicons style={tw`m-auto text-8xl`} name={icon} color="white" />
    </View>
  );
};

export default Activity;
