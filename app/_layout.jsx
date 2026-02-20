// Expo
import { Stack } from "expo-router";
import { LogBox } from "react-native";

// Librerias
import tw, { useDeviceContext } from "twrnc";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  useDeviceContext(tw);
  LogBox.ignoreLogs(["ViewPropTypes", "SafeAreaView"]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            animation: "fade_from_bottom",
            headerShown: false,
          }}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
