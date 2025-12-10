// React
import { View, Text, ScrollView } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";

// Librerias

import tw from "twrnc";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";

// Context
import { useTasks } from "../context/TasksContext";

// Componentes
import InputAdd from "../components/InputAdd";
import Section from "../components/Section";
import Tasks from "../components/Tasks";

const index = () => {
  const { tasks, deleteTask } = useTasks();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["transparent", "#aa6eaa"]}
        locations={[0.8, 1]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={tw`flex-1`}
      >
        <View
          style={tw` flex-1 absolute top-8 py-4 items-center overflow-hidden w-full h-full bg-white/45 rounded-t-10 border-2 border-white`}
        >
          <View style={tw`mb-10 mt-10 items-center gap-8.9`}>
            <Text
              style={[
                tw`text-sky-500 text-5xl font-extrabold`,
                {
                  textShadowColor: "rgba(0,0,0,0.6)",
                  textShadowOffset: { width: 2, height: -2 },
                  textShadowRadius: 4,
                },
              ]}
            >
              Lista de tareas
            </Text>
            <InputAdd />
          </View>
          <ScrollView
            contentContainerStyle={tw`items-center p-2`}
            style={tw`w-[95%] flex-1 min-h-120`}
          >
            <Section>
              {tasks.map((item) => {
                return (
                  <Tasks
                    key={item.id}
                    isDone={item.isDone}
                    text={item.text}
                    remove={() => deleteTask(item.id)}
                  />
                );
              })}
            </Section>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default index;
