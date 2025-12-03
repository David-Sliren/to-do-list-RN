import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import tw from "twrnc";
export default function _layout() {
  return (
    <View style={tw`flex-1`}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
