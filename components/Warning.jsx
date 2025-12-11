// React
import { Modal, Text } from "react-native";

// Context
import { useTasks } from "../context/TasksContext";

const Warning = ({ children, animation = "slide" }) => {
  const { isAvilable, setIsAvilable } = useTasks();
  return (
    <Modal
      visible={isAvilable}
      animationType={animation}
      onRequestClose={() => setIsAvilable(false)}
      presentationStyle="overFullScreen"
      backdropColor="rgba(0,0,0,0.1)"
    >
      {children}
    </Modal>
  );
};

export default Warning;
