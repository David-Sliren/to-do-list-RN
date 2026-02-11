import { BlurView } from "expo-blur";
import { Text, TextInput, View } from "react-native";
import tw from "twrnc";
// import Ionicons from '@expo/vector-icons/Ionicons';

const InputAdd = ({
  label = "",
  placeholderInput = "",
  action,
  value = "",
  maxCharater,
}) => {
  return (
    <View style={tw`relative w-full`}>
      <Text style={tw`text-lg pl-1`}>{label}</Text>
      <BlurView
        intensity={20}
        tint="dark"
        style={tw`border border-black/20 rounded-xl overflow-hidden`}
      >
        <TextInput
          placeholder={placeholderInput}
          placeholderTextColor="#333"
          style={tw`w-full p-2 py-4 text-xl`}
          onChangeText={action}
          value={value}
          maxLength={maxCharater}
        />
      </BlurView>
    </View>
  );
};

export default InputAdd;
