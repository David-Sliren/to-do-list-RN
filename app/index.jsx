import { View, Text } from "react-native";
import tw from "twrnc";
import { MotiView } from "moti";
import InputAdd from "../components/InputAdd";
const index = () => {
  return (
    <View style={tw`flex-1 bg-purple-500/60`}>
      <View
        style={tw`absolute top-16 justify-around items-center overflow-hidden w-full h-full bg-sky-200 rounded-t-20`}
      >
        <Text style={tw`text-4xl font-extrabold`}>Lista de tareas</Text>
        <InputAdd />
      </View>
    </View>
  );
};

export default index;
