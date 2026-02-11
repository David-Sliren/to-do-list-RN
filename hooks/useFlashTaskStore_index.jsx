import { useFlashTaskStore } from "../store/flashTask/flashTask.store";

function useFlashTaskStore_index() {
  const flashTask = useFlashTaskStore((state) => state.flashTask);
  const inputFlashTask = useFlashTaskStore(
    (state) => state.inputFlashTask.text,
  );
  const updateFlashInput = useFlashTaskStore((state) => state.updateFlashInput);
  const addFlashTask = useFlashTaskStore((state) => state.addFlashTask);
  const updateFlashTask = useFlashTaskStore((state) => state.updateFlashTask);
  const deleteFlashTask = useFlashTaskStore((state) => state.deleteFlashTask);
  const edictFlashTask = useFlashTaskStore((state) => state.edictFlashTask);

  return {
    flashTask,
    inputFlashTask,
    updateFlashInput,
    updateFlashTask,
    addFlashTask,
    deleteFlashTask,
    edictFlashTask,
  };
}

export default useFlashTaskStore_index;
