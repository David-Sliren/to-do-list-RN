import { StyleSheet, View } from "react-native";

// expo
import { LinearGradient } from "expo-linear-gradient";

// Librerias
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colorBody } from "../../constants/colorsPrincipals";

const ShoppingScreen = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: colorBody.gray }}>
      <LinearGradient
        colors={[colorBody.aqua, "#D4FCFC"]}
        locations={[0.6, 1]}
        start={{ x: 0.2, y: 0.8 }}
        end={{ x: 1, y: 0.5 }}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default ShoppingScreen;
