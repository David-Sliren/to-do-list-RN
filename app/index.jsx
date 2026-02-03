// React
import { View, Text, ScrollView, StyleSheet } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";

// Librerias

import tw from "twrnc";
import { AnimatePresence } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";

// Context
import { useTasks } from "../context/TasksContext";

// Componentes
import InputAdd from "../components/InputAdd";
import Section from "../components/Section";
import Tasks from "../components/Tasks";
import Warning from "../components/Warning";
import NotAvailable from "../components/Modals_types/NotAvailable";
import RevertIndex from "../utils/RevertIndex";

const Index = () => {
  const { tasks, deleteTask, editTask } = useTasks();

  const tasksFlash = RevertIndex(tasks);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={tw` flex-1 items-center overflow-hidden w-full h-full bg-zinc-200/45`}
      >
        <LinearGradient
          colors={["transparent", "#befaff"]}
          locations={[0.8, 1]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={(tw`flex-1 z-50`, StyleSheet.absoluteFill)}
        />
        <Warning>
          <NotAvailable />
        </Warning>

        <View style={tw`mb-10 mt-25 items-center gap-8.9 `}>
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
          contentContainerStyle={tw`items-center`}
          style={tw`w-full flex-1`}
        >
          <Section NumTasks={tasks.length}>
            <AnimatePresence>
              {tasksFlash.map((item, i) => {
                return (
                  <Tasks
                    key={item.id}
                    isDone={item.isDone}
                    text={item.text}
                    remove={() => deleteTask(item.id)}
                    complete={item.id}
                    edit={editTask}
                    isAnimate={item.animate}
                    desableAnimate={item}
                  />
                );
              })}
            </AnimatePresence>
          </Section>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Index;
