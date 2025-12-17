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
      from={isAnimate ? { opacity: 0.8, scale: 0 } : false}
      animate={{
        opacity: 1,
        scale: 1,
        backgroundColor: isDone ? "#b9f8cf" : "#b8e6fe",
      }}
      transition={{
        duration: 280,
        type: "spring",
        backgroundColor: {
          type: "timing",
          duration: 290,
        },
      }}
      exit={{ opacity: 0, scale: 0 }}
      onDidAnimate={() => (desableAnimate.animate = false)}
      style={tw`flex-row justify-between items-center gap-2 px-3 w-full h-20 mt-3 rounded-md shadow-md`}
    >
      <CheckBox isSelect={isDone} element={complete} />
      <View style={tw`flex-1 px-2`}>
        <Text
          numberOfLines={2}
          style={tw`${
            isDone ? "line-through text-gray-600" : ""
          } text-lg text-start font-bold`}
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
