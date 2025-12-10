// React
import React, { createContext, useContext, useState } from "react";
import { View, Text } from "react-native";

const Tasks = createContext();

const TasksContext = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");

  function addTask() {
    if (textInput.trim() === "") return;
    const newTask = { id: Date.now(), text: textInput, isDone: false };

    setTasks((prevTask) => [...prevTask, newTask]);

    setTextInput("");
  }

  const valor = { tasks, addTask, setTextInput, textInput };

  return <Tasks.Provider value={valor}>{children}</Tasks.Provider>;
};

export default TasksContext;

export const useTasks = () => useContext(Tasks);
