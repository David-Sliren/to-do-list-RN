// Expo
import { Stack } from "expo-router";

// Context
import TasksContext from "../context/TasksContext";

export default function _layout() {
  return (
    <TasksContext>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </TasksContext>
  );
}
