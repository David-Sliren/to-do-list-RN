// RN
import { View, Text, Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

// Librerias
import tw from "twrnc";

const BannerTitle = ({
  title = "",
  subTitle = "",
  icon = "",
  colorIcon = "",
  iconAction,
  notifitions = false,
}) => {
  return (
    <View style={tw`flex-row justify-between items-center pt-8 pb-8 px-6`}>
      <View>
        <Text
          style={[
            tw`text-4xl font-bold text-slate-800`,
            {
              textShadowColor: "rgba(0,0,0,0.15)",
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 4,
            },
          ]}
        >
          {title}
        </Text>
        <Text style={tw`text-slate-800/80 text-base font-medium mt-1`}>
          {subTitle}
        </Text>
      </View>
      <Pressable style={tw`relative`} onPress={iconAction}>
        {notifitions && (
          <View
            style={tw`absolute -left-1 -top-2 justify-center items-center bg-black rounded-full ${notifitions < 99 ? "size-5" : "w-fit px-1"}`}
          >
            <Text style={tw`text-sm text-white`}>{notifitions}</Text>
          </View>
        )}
        <BlurView
          intensity={20}
          tint="dark"
          style={tw`size-14 justify-center items-center border-black/20 border rounded-2xl overflow-hidden`}
        >
          <Ionicons
            name={icon}
            style={[tw`text-3xl text-black/80`, { color: colorIcon }]}
          />
        </BlurView>
      </Pressable>
    </View>
  );
};

export default BannerTitle;
