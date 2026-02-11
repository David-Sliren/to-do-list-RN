import { create } from "zustand";

export const useFlashTaskStore = create((set, get) => ({
  flashTask: [],
  inputFlashTask: { text: "", id: 0 },

  updateFlashInput: (value) =>
    set({
      inputFlashTask: { text: value.trim(), id: get().inputFlashTask.id },
    }),

  addFlashTask: () => {
    const { inputFlashTask, flashTask } = get();

    if (inputFlashTask.text === "") return;

    const exist = flashTask.some((item) => item.id === inputFlashTask.id);
    const newTask = exist
      ? flashTask.map((item) =>
          item.id === inputFlashTask.id && item.id !== inputFlashTask.text
            ? { ...item, name: inputFlashTask.text }
            : item,
        )
      : [
          ...flashTask,
          { id: `task${Date.now()}`, isDone: false, name: inputFlashTask.text },
        ];

    set({ flashTask: newTask, inputFlashTask: { text: "", id: 0 } });
  },

  updateFlashTask: (id) =>
    set({
      flashTask: get().flashTask.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    }),

  deleteFlashTask: (id) =>
    set({ flashTask: get().flashTask.filter((item) => item.id !== id) }),

  edictFlashTask: (id) => {
    const exist = get().flashTask.find((item) => item.id === id);
    console.log(exist ? exist : "no");
    set({ inputFlashTask: { text: exist.name, id: exist.id } });
  },
}));
