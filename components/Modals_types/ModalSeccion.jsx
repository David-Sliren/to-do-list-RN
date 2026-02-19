// React
import React, { forwardRef, useCallback, useEffect, useMemo } from "react";

// RN
import { Text, BackHandler, Keyboard } from "react-native";

// Libreras
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import tw from "twrnc";
import { View } from "moti";

const ModalSeccion = forwardRef(function ModalSeccion(
  { children, isOpen, title, action, size = "20%" },
  ref,
) {
  function onCloseModal() {
    action();
    Keyboard.dismiss();
  }

  const snaping = useMemo(() => [size], [size]);
  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    [],
  );

  useEffect(() => {
    const handleCloseModal = () => {
      if (isOpen) {
        action();
        ref.current?.close();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleCloseModal,
    );
    return () => subscription.remove();
  }, [isOpen, action, ref]);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snaping}
      backgroundStyle={tw` rounded-[41px]`}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      onClose={onCloseModal}
      enableDynamicSizing={true}
      keyboardBehavior="extend"
    >
      <BottomSheetView style={tw`gap-4 p-4`}>
        <Text style={tw`text-2xl font-semibold`}>{title}</Text>
        <View style={tw`gap-4 items-center`}>{children}</View>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default ModalSeccion;
