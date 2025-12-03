import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { MotiView } from "moti";
import InputAdd from "../components/InputAdd";
const index = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-sky-500`}>
      <Text style={tw`text-3xl font-bold`}>Lista de tareas</Text>
      <InputAdd />
    </View>
  );
};

export default index;
