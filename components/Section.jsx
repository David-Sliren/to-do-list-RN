// React
import { View, Text, ScrollView } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";

// Librerias
import tw from "twrnc";

const Section = ({ children, title = "Tareas Rapidas", NumTasks = 0 }) => {
  return (
    <View
      style={tw`flex-1 gap-2 overflow-hidden bg-zinc-200/45 w-full min-h-20 px-4 py-6 mb-5`}
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
        contentContainerStyle={tw` py-5 `}
        style={tw`bg-transparent w-full`}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Section;
