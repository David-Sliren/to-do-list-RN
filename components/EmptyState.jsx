// react
import React from "react";

// RN
import { View, Text, Pressable } from "react-native";

// Librerias
import LottieView from "lottie-react-native";
import tw from "twrnc";
const EmptyState = ({ image, title, subtitle, buttontext, onButtonPress }) => {
  return (
    <View style={tw`absolute inset-0 h-full justify-center items-center px-8`}>
      <LottieView source={image} style={tw`size-64`} autoPlay />
      <Text style={tw`text-xl font-bold text-gray-800 text-center`}>
        {title}{" "}
      </Text>
      <Text style={tw`text-base text-gray-500 text-center mt-2 mb-6`}>
        {subtitle}
      </Text>
      <Pressable
        onPress={() => onButtonPress()}
        style={tw`bg-teal-500 py-3 px-6 rounded-full z-10`}
      >
        <Text style={tw`text-white font-semibold`}>{buttontext}</Text>
      </Pressable>
    </View>
  );
};

export default EmptyState;
