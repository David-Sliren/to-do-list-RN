// React
import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import asyncStorage from "@react-native-async-storage/async-storage";

const Tasks = createContext();

// Llaves para el almacenamiento
const TAsKS_FLASH = "@TasksFlash";

const TasksContext = ({ children }) => {
  // Tareas
  const [tasks, setTasks] = useState([]);
  // Texto
  const [textInput, setTextInput] = useState("");

  // Caracteristicas Desativadas
  const [isAvilable, setIsAvilable] = useState(false);

  // Almacenamiento local
  const [isLoading, setIsLoading] = useState(true);

  // Leer tarea de el almacenamiento
  const getData = async () => {
    try {
      const value = await asyncStorage.getItem(TAsKS_FLASH);
      if (value !== null) {
        const data = JSON.parse(value);
        setTasks(data);
      }
    } catch (e) {
      console.log("Fallo en el guardado" + e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Guardar tarea en el almacenamiento
  const saveData = async (taskSave) => {
    try {
      const value = JSON.stringify(taskSave);
      await asyncStorage.setItem(TAsKS_FLASH, value);
    } catch (e) {
      console.log("Fallo en el guardado" + e);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      saveData(tasks);
    }
  }, [tasks, isLoading]);

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

  // Valor del contexto
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
