import { Pressable, Text } from "react-native";
import tw from "twrnc";

const ButtonAddTask = ({ action }) => {
  return (
    <Pressable
      onPress={action}
      style={tw` justify-center items-center p-1 px-4 rounded-lg`}
    >
      <Text style={tw`text-lg`}>Agregar</Text>
    </Pressable>
  );
};

export default ButtonAddTask;
