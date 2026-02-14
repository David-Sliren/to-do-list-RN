import { StyleSheet } from "react-native";

// expo
import { LinearGradient } from "expo-linear-gradient";

// Librerias
import { SafeAreaView } from "react-native-safe-area-context";
import { colorBody } from "../../constants/colorsPrincipals";

const ShoppingScreen = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorBody.gray }}>
      <LinearGradient
        colors={[colorBody.aqua, "#D4FCFC"]}
        locations={[0.6, 1]}
        start={{ x: 0.2, y: 0.8 }}
        end={{ x: 1, y: 0.5 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </SafeAreaView>
  );
};

export default ShoppingScreen;
