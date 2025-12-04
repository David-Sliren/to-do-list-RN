import { View, Text } from "react-native";
import tw from "twrnc";
import { MotiView } from "moti";
import InputAdd from "../components/InputAdd";
import Section from "../components/Section";
import { SafeAreaView } from "react-native-safe-area-context";
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={tw`flex-1 bg-purple-400`}>
        <View
          style={tw`absolute top-4 justify-center items-center gap-10 overflow-hidden w-full h-full bg-white rounded-t-xl`}
        >
          <Text style={tw`text-sky-500 text-5xl font-extrabold`}>
            Lista de tareas
          </Text>
          <InputAdd />
          <Section></Section>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
