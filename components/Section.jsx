import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
const Section = ({ children, title = "Tareas Rapidas", NumTasks = 0 }) => {
  return (
    <LinearGradient
      colors={["transparent", "blueviolet"]}
      locations={[0.7, 1]}
      style={tw`flex-1 overflow-hidden w-full h-120 border-2 mb-15`}
    >
      <View
        style={tw`absolute bottom-12 gap-2 overflow-hidden bg-zinc-200/45 w-full h-full px-4 pt-16 rounded-b-12 border-2 border-white`}
      >
        <View style={tw`flex-row gap-1 items-center`}>
          <Text style={tw`text-black text-lg font-bold`}>{title}</Text>
          <Text
            style={tw`bg-sky-400/40 rounded-lg px-2 text-zinc-700 text-sm font-semibold`}
          >
            {NumTasks}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={tw`p-2 py-5 items-center gap-4`}
          style={tw`flex-1 bg-transparent w-full`}
        >
          {children}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Section;
