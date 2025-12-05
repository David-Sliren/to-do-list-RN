import { View, Text, Pressable } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import tw from "twrnc";

const ButtonEdit = ({ action }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        tw`${
          pressed ? "opacity-80" : "opacity-100"
        } bg-sky-500/80 justify-center items-center size-8 rounded-lg shadow-md`,
      ]}
      onPress={action}
    >
      <Ionicons name="pencil-outline" size={25} color="white" />
    </Pressable>
  );
};

export default ButtonEdit;
