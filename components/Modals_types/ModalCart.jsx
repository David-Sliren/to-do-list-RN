// React
import { View, BackHandler } from "react-native";

// Expo

// Librerias
import tw from "twrnc";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BannerTitle from "../BannerTitle";
import { useEffect, useRef } from "react";

const ModalCart = ({
  children,
  title = "",
  subTitle = "",
  total,
  backAction,
  changeBoolean,
  cartClose,
}) => {
  const sheet = useRef(null);

  useEffect(() => {
    const handleCloseCart = () => {
      if (changeBoolean) {
        cartClose();
        sheet.current?.close();
        return true;
      }

      return false;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleCloseCart,
    );
    return () => subscription.remove();
  }, [changeBoolean, cartClose]);

  useEffect(() => {
    if (changeBoolean) {
      sheet.current.expand();
    } else {
      sheet.current.close();
    }
  }, [changeBoolean]);

  return (
    <BottomSheet
      ref={sheet}
      index={-1}
      onClose={cartClose}
      maxDynamicContentSize={[760]}
      // enableDynamicSizing={true}
      enablePanDownToClose={true}
      snapPoints={["80%"]}
      backgroundStyle={tw`bg-transparent`}
      style={tw`bg-white rounded-t-3xl`}
    >
      <View>
        <BannerTitle
          title={title}
          subTitle={`${subTitle} ${total}`}
          icon="arrow-undo"
          iconAction={backAction}
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
