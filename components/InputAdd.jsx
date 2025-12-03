import { View, Text, TextInput, Pressable } from "react-native";
import { MotiView } from "moti";
import React from "react";
import { Easing } from "react-native-reanimated";
import tw from "twrnc";
const InputAdd = () => {
  return (
    <MotiView
      from={{ translateY: -20 }}
      animate={{ translateY: 20 }}
      transition={{
        type: "timing",
        duration: 800,
        easing: Easing.bounce,
      }}
      style={tw`flex-row justify-between gap-2 bg-sky-700`}
    >
      <TextInput placeholder="Agrega una tarea" style={tw`w-full`} />
      <Pressable
        onPress={() => console.log("hola")}
        style={({ pressed }) => [
          tw`${pressed ? "bg-red-500" : "bg-blue-500"} `,
        ]}
      >
        <Text>Add</Text>
      </Pressable>
    </MotiView>
  );
};

export default InputAdd;
