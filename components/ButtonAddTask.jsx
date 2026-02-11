import { Pressable, Text, Keyboard } from "react-native";
import tw from "twrnc";

const ButtonAddTask = ({ action }) => {
  function handleAdd() {
    action();
    Keyboard.dismiss();
  }

  return (
    <Pressable
      onPress={handleAdd}
      style={tw` justify-center items-center p-1 px-4 rounded-lg`}
    >
      <Text style={tw`text-lg`}>Agregar</Text>
    </Pressable>
  );
};

export default ButtonAddTask;
