import { View, Text, TextInput, Pressable } from "react-native";
import { MotiView } from "moti";
import React from "react";
import tw from "twrnc";
const InputAdd = () => {
  return (
    <MotiView
      style={tw`bg-sky-700 flex-row items-center`}
      from={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <TextInput placeholder="Agrega una tarea" />
      <Pressable style={tw`bg-red-500 h-full`}>
        <Text>Add</Text>
      </Pressable>
    </MotiView>
  );
};

export default InputAdd;
