import { View, Text, TextInput, Pressable } from "react-native";
import { MotiView } from "moti";
import tw from "twrnc";

// import Ionicons from '@expo/vector-icons/Ionicons';

import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useTasks } from "../context/TasksContext";

const InputAdd = () => {
  const { textInput, addTask, setTextInput } = useTasks();

  return (
    <View
      style={tw`flex-row justify-between  w-10/12 overflow-hidden rounded-xl h-12 border-2 shadow-lg`}
    >
      <TextInput
        placeholder="Agrega una tarea"
        style={tw`p-2 w-10/12 h-full bg-sky-200/96 border-r-2 text-black text-sm font-extrabold`}
        value={textInput}
        onChangeText={setTextInput}
        onSubmitEditing={addTask}
      />
      <Pressable
        onPress={addTask}
        style={({ pressed }) => [
          tw`${
            pressed ? "opacity-80" : "opacity-100"
          } justify-center items-center w-2/12 h-full bg-sky-400`,
        ]}
      >
        <Ionicons name="add" size={20} color="black" />
      </Pressable>
    </View>
  );
};

export default InputAdd;
