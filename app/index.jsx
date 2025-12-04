import { View, Text } from "react-native";
import tw from "twrnc";
import { MotiView } from "moti";
import InputAdd from "../components/InputAdd";
const index = () => {
  return (
    <View style={tw`flex-1 justify-evenly items-center bg-purple-500/60`}>
      <View
        style={tw`absolute top-16 overflow-hidden w-full h-full bg-sky-200 rounded-t-20`}
      ></View>
      <Text style={tw`text-4xl font-extrabold`}>Lista de tareas</Text>
      <InputAdd />
    </View>
  );
};

export default index;
