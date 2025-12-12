// React
import { View, Text, Pressable } from "react-native";

// Expo
import Ionicons from "@expo/vector-icons/Ionicons";

// Librerias
import tw from "twrnc";
import { useTasks } from "../context/TasksContext";

const CheckBox = ({ isSelect = false, element }) => {
  const { completeTask } = useTasks();

  return (
    <Pressable
      style={({ pressed }) => [
        tw` ${pressed ? "opacity-80" : "opacity-100"}
        ${
          isSelect ? "bg-zinc-900" : "bg-zinc-300/80 border-black"
        }  justify-center items-center size-7 rounded-lg border-2 shadow-md`,
      ]}
      onPress={() => completeTask(element)}
    >
      {isSelect && <Ionicons name="checkmark" size={25} color="white" />}
    </Pressable>
  );
};

export default CheckBox;
