// React
import { View } from "react-native";

// Expo

// Librerias
import tw from "twrnc";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BannerTitle from "../BannerTitle";
import { useRef } from "react";

const ModalCart = ({
  children,
  title = "",
  subTitle = "",
  total,
  backAction,
  changeBoolean,
}) => {
  const sheet = useRef(null);
  // function handleExpandModal() {
  //   if (changeBoolean) {
  //     sheet.current.close();
  //     setIsOpen(false);
  //   }
  //   sheet.current.expand();
  //   setIsOpen(true);
  // }

  return (
    <BottomSheet
      ref={sheet}
      backgroundStyle={tw`bg-transparent`}
      maxDynamicContentSize={760}
      enableDynamicSizing={true}
      style={tw`bg-white rounded-t-3xl`}
    >
      <View>
        <BannerTitle
          title={title}
          subTitle={`${subTitle} ${total}`}
          icon="arrow-undo"
          action={backAction}
        />
      </View>

      <BottomSheetScrollView
        contentContainerStyle={tw`gap-3 pb-20`}
        showsVerticalScrollIndicator={false}
        style={tw` bg-zinc-500/20 border border-black/20 rounded-t-[35px] pt-8 px-5 overflow-hidden`}
      >
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default ModalCart;
