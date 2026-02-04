import { Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useRouter } from "expo-router";
const Activity = ({ title = "", icon = "", route = "" }) => {
  const router = useRouter();

  return (
    <Pressable
      style={tw`bg-red-400 size-48 rounded-lg`}
      onPress={() => router.push(route)}
    >
      <Text style={tw` p-2 text-white text-2xl font-semibold  `}>{title}</Text>
      <Ionicons style={tw`m-auto text-8xl`} name={icon} color="white" />
    </Pressable>
  );
};

export default Activity;
