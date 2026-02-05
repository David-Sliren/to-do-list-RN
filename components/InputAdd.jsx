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
    <View style={tw`w-full`}>
      <Text style={tw`text-lg pl-1`}>{label}</Text>
      <TextInput
        placeholder={placeholderInput}
        style={tw`bg-sky-500 w-full p-2 py-4 text-black text-xl rounded-xl`}
        onChangeText={action}
        value={value}
        maxLength={maxCharater}
      />
    </View>
  );
};

export default InputAdd;
