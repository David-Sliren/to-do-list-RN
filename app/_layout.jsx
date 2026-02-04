// Expo
import { Stack } from "expo-router";

// Context
import TasksContext from "../context/TasksContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function _layout() {
  return (
    <TasksContext>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </GestureHandlerRootView>
    </TasksContext>
  );
}
