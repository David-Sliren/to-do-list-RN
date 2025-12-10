// React
import { View, Text } from "react-native";

// Librerias
import tw from "twrnc";

// Componentes
import CheckBox from "./CheckBox";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

const Tasks = () => {
  return (
    <View
      style={tw`bg-sky-200 flex-row justify-between items-center gap-2 px-3 w-full h-15 rounded-md shadow-md`}
    >
      <CheckBox />
      <View style={tw`flex-1 px-2`}>
        <Text numberOfLines={2} style={tw`text-md text-start font-bold`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          inventore ab animi.
        </Text>
      </View>
      <View style={tw`flex-row gap-1`}>
        <ButtonEdit />
        <ButtonDelete />
      </View>
    </View>
  );
};

export default Tasks;
