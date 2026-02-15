// Expo
import { Stack } from "expo-router";

// Librerias
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function _layout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            animation: "slide_from_left",
            headerShown: false,
          }}
        />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
