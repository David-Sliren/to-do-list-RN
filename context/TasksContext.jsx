// React
import React, { createContext, useContext, useState } from "react";
import { View, Text } from "react-native";

const Tasks = createContext();

const TasksContext = ({ children }) => {
  // Tareas
  const [tasks, setTasks] = useState([]);
  // Texto
  const [textInput, setTextInput] = useState("");

  // Caracteristicas Desativadas
  const [isAvilable, setIsAvilable] = useState(false);

  // Agregar tarea
  function addTask() {
    if (textInput.trim() === "") return;
    const newTask = { id: Date.now(), text: textInput, isDone: false };

    setTasks((prevTask) => [...prevTask, newTask]);

    setTextInput("");
  }

  // Eliminar tarea
  function deleteTask(value) {
    const removeTask = tasks.filter((item) => item.id !== value);
    setTasks(removeTask);
  }

  // Editar tarea
  function editTask(value) {
    setIsAvilable(true);
  }

  const valor = {
    tasks,
    addTask,
    deleteTask,
    setTextInput,
    textInput,
    isAvilable,
    setIsAvilable,
    editTask,
  };

  return <Tasks.Provider value={valor}>{children}</Tasks.Provider>;
};

export default TasksContext;

export const useTasks = () => useContext(Tasks);
