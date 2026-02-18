// RN
import { Text, Pressable, Image, View } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Libreras
import tw from "twrnc";
import { MotiView } from "moti";

const Activity = ({ title = "", icon = "", route = "", image = "" }) => {
  const router = useRouter();

  return (
    <MotiView
      from={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
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
    </MotiView>
  );
};

export default Activity;
