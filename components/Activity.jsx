import { Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
const Activity = ({ title = "", icon = "", route = "" }) => {
  const router = useRouter();

  return (
    <BlurView
      intensity={20}
      tint="dark"
      style={tw` border border-black/20 h-48 w-full rounded-xl overflow-hidden`}
    >
      <Pressable style={tw`size-full`} onPress={() => router.push(route)}>
        <Text style={tw` p-2 text-zinc-800 text-2xl font-semibold  `}>
          {title}
        </Text>
        <Ionicons style={tw`m-auto text-8xl text-zinc-800`} name={icon} />
      </Pressable>
    </BlurView>
  );
};

export default Activity;
