// React
import { View, BackHandler } from "react-native";

// Constantes
import { EMTY_CONFIG } from "../../constants/Personalized";

// Librerias
import tw from "twrnc";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import BannerTitle from "../BannerTitle";
import { useEffect, useRef } from "react";
import EmptyState from "../EmptyState";
import { AnimatePresence } from "moti";
import ItemBought from "../ItemBought";

const ModalCart = ({
  children,
  title = "",
  subTitle = "",
  total,
  backAction,
  changeBoolean,
  cartClose,
  hasChildren,
  flatData,
  flatHandle,
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

      {!hasChildren && (
        <EmptyState
          image={EMTY_CONFIG.cart.image}
          title={EMTY_CONFIG.cart.title}
          subtitle={EMTY_CONFIG.cart.subtitle}
          buttontext={EMTY_CONFIG.cart.buttonText}
          onButtonPress={cartClose}
        />
      )}

      <AnimatePresence>
        <BottomSheetFlatList
          data={flatData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemBought
              key={item.id}
              title={item.name}
              subTitle={item.supermarket}
              deleteItem={() => flatHandle(item.id)}
              bought={item.isbought}
            />
          )}
          contentContainerStyle={tw`gap-3 pb-20`}
          style={tw` bg-zinc-500/20 border border-black/20 rounded-t-[35px] pt-8 px-5 overflow-hidden`}
          showsVerticalScrollIndicator={false}
        />
      </AnimatePresence>
    </BottomSheet>
  );
};

export default ModalCart;
