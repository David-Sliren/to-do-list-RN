import { Text, Pressable, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
const Activity = ({ title = "", icon = "", route = "", image = "" }) => {
  const router = useRouter();

  return (
    <View
      // intensity={20}
      // tint="dark"
      style={tw` bg-sky-400 border border-black/20 h-48 w-full shadow-lg rounded-xl overflow-hidden`}
    >
      <Pressable style={tw`size-full`} onPress={() => router.push(route)}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw` p-2 text-neutral-100 text-2xl font-semibold  `}>
            {title}
          </Text>
          <Ionicons name={icon} size={25} style={tw`text-neutral-100`} />
        </View>
        <Image source={image} style={tw`size-40 mx-auto -translate-y-5`} />
      </Pressable>
    </View>
  );
};

export default Activity;
