// RN
import { ScrollView } from "react-native";

// Expo
import { BlurView } from "expo-blur";

// Librerias
import tw from "twrnc";
import ButtonAdd from "./ButtonAdd";

const BannerList = ({ children, action }) => {
  return (
    <BlurView
      intensity={20}
      tint="dark"
      style={tw`flex-1 border border-black/20 rounded-t-[35px] pt-8 px-5 overflow-hidden`}
    >
      <ButtonAdd action={action} />

      <ScrollView
        contentContainerStyle={tw`gap-3 pb-10`}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </BlurView>
  );
};

export default BannerList;
