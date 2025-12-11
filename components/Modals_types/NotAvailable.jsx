// React
import { View, Text } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Librerias
import tw from "twrnc";

const NotAvailable = () => {
  return (
    <View style={tw`flex-1 justify-end items-center`}>
      <View
        style={tw`bg-sky-500 h-40 w-full justify-center items-center gap-4`}
      >
        <Text style={tw`text-xl text-white font-bold`}>
          This feature is not currently available.
        </Text>
        <Ionicons name="sad" size={27} color="white" />
      </View>
    </View>
  );
};

export default NotAvailable;
