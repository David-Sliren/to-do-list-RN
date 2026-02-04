// RN
import { Text, Pressable } from "react-native";

// Librerias
import tw from "twrnc";

const Supermarket = ({ total, title = "" }) => {
  return (
    <Pressable
      style={tw`flex-row justify-between items-center p-6 bg-black/50 rounded-lg`}
    >
      <Text style={tw`text-2xl`}>{title}</Text>

      <Text style={tw`text-xl font-semibold`}>{total}</Text>
    </Pressable>
  );
};

export default Supermarket;
