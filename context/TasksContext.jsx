// React
import React, { createContext, useContext, useState } from "react";
import { View, Text } from "react-native";

const Tasks = createContext();

const TasksContext = ({ children }) => {
  const [add, setAdd] = useState(12);

  const valor = { add };

  return <Tasks.Provider value={valor}>{children}</Tasks.Provider>;
};

export default TasksContext;

export const useTasks = () => useContext(Tasks);
