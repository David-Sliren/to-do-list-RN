// React
import { useRef, useState } from "react";

// hooks
import useFlashTaskStore_index from "../../hooks/useFlashTaskStore_index";

// Components
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import BannerList from "../../components/BannerList";
import CheckItem from "../../components/CheckItem";
import ModalSeccion from "../../components/Modals_types/ModalSeccion";
import InputAdd from "../../components/InputAdd";
import ButtonAddTask from "../../components/ButtonAddTask";

const Index = () => {
  const {
    flashTask,
    inputFlashTask,
    updateFlashInput,
    updateFlashTask,
    addFlashTask,
    deleteFlashTask,
    edictFlashTask,
  } = useFlashTaskStore_index();

  const sheet = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handlePress() {
    setIsOpen(true);
    setIsEdit(false);
    updateFlashInput("");
    sheet.current.expand();
  }

  function handleEdictFlashTask(value) {
    setIsEdit(true);
    setIsOpen(true);
    sheet.current.expand();
    edictFlashTask(value);
  }

  function handleAddFlashTask() {
    setIsEdit(false);
    setIsOpen(false);
    sheet.current.close();
    addFlashTask();
  }

  return (
    <ShoppingScreen>
      <BannerTitle
        title="Tareas Diarias"
        subTitle="Tu lista tareas"
        icon="checkmark-done"
      />
      <BannerList action={handlePress}>
        {flashTask.map((item) => (
          <CheckItem
            key={item.id}
            title={item.name}
            changeStatus={() => updateFlashTask(item.id)}
            bought={item.isDone}
            deleteItem={() => deleteFlashTask(item.id)}
            editItem={() => handleEdictFlashTask(item.id)}
          />
        ))}
      </BannerList>
      <ModalSeccion
        ref={sheet}
        title={isEdit ? "Edit" : "Tareas"}
        action={() => setIsOpen(false)}
        size="66%"
      >
        <InputAdd
          label="Nombre"
          action={updateFlashInput}
          value={inputFlashTask}
          placeholderInput={isEdit ? "Editar tarea" : "Agregar tarea"}
        />
        <ButtonAddTask action={handleAddFlashTask} />
      </ModalSeccion>
    </ShoppingScreen>
  );
};

export default Index;
