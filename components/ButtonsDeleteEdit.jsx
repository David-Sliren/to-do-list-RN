// Rn
import { Text, Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Librerias
import { AnimatePresence, MotiView } from "moti";
import tw from "twrnc";

const ButtonsDeleteEdit = ({ btnEdit, btnDelete, changeBoolean }) => {
  return (
    <AnimatePresence>
      <MotiView
        animate={{ translateY: changeBoolean ? 0 : -80 }}
        transition={{ type: "spring" }}
        style={tw`absolute left-0 flex-row flex-1 h-full w-[90%] bg-blue-200 rounded-lg overflow-hidden`}
      >
        <Pressable
          onPress={btnEdit}
          style={tw`bg-black/90 flex-row flex-1 justify-center items-center border border-r-sky-200`}
        >
          <Ionicons name="create-outline" style={tw`text-3xl text-white`} />
          <Text style={tw`text-xl text-white`}>Editar</Text>
        </Pressable>
        <Pressable
          onPress={btnDelete}
          style={tw`bg-black/90 flex-row flex-1 justify-center items-center`}
        >
          <Ionicons name="close-outline" style={tw`text-3xl text-white`} />
          <Text style={tw`text-xl text-white`}> Eliminar</Text>
        </Pressable>
      </MotiView>
    </AnimatePresence>
  );
};

export default ButtonsDeleteEdit;
