import { Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colorBody } from "../constants/colorsPrincipals";
import tw from "twrnc";

const AddActivity = () => {
  return (
    <Pressable
      style={[
        tw` flex-row justify-between items-center gap-1 mt-5 p-2 rounded-lg`,
        { backgroundColor: colorBody.aqua },
      ]}
    >
      <Ionicons name="add-circle" size={24} />
      <Text style={tw`text-md  font-semibold`}>Agregar Actividad</Text>
    </Pressable>
  );
};

export default AddActivity;
