// React
import { View, Text } from "react-native";

// Librerias
import tw from "twrnc";
import { MotiView } from "moti";

// Componentes
import CheckBox from "./CheckBox";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

const Tasks = ({
  isDone,
  text,
  remove,
  edit,
  complete,
  isAnimate,
  desableAnimate,
}) => {
  return (
    <MotiView
      // layout="position"
      from={isAnimate ? { opacity: 0.8, scale: 0 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 280, type: "spring" }}
      exit={{ opacity: 0, scale: 0 }}
      onDidAnimate={() => (desableAnimate.animate = false)}
      style={tw`${
        isDone ? "bg-green-200 " : "bg-sky-200 "
      } flex-row justify-between items-center gap-2 px-3 w-full h-15 rounded-md shadow-md`}
    >
      <CheckBox isSelect={isDone} element={complete} />
      <View style={tw`flex-1 px-2`}>
        <Text
          numberOfLines={2}
          style={tw`${
            isDone ? "line-through text-gray-600" : ""
          } text-md text-start font-bold`}
        >
          {text}
        </Text>
      </View>
      <View style={tw`flex-row gap-1`}>
        {!isDone && <ButtonEdit action={edit} />}
        <ButtonDelete action={remove} fondo={isDone} />
      </View>
    </MotiView>
  );
};

export default Tasks;
