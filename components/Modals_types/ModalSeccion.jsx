// React
import React, { forwardRef, useCallback, useMemo } from "react";

// RN
import { Text } from "react-native";

// Libreras
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import tw from "twrnc";
import { View } from "moti";

const ModalSeccion = forwardRef(function ModalSeccion(
  { children, title, action, size = "20%" },
  ref,
) {
  const snaping = useMemo(() => [size], [size]);
  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    [],
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snaping}
      backgroundStyle={tw` rounded-[41px]`}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      onClose={action}
      enableDynamicSizing={true}
    >
      <BottomSheetView style={tw`gap-4 p-4`}>
        <Text style={tw`text-2xl font-semibold`}>{title}</Text>
        <View style={tw`gap-4 items-center`}>{children}</View>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default ModalSeccion;
