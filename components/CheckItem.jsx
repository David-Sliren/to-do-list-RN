// RN
import { View, Text, Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Moti
import { MotiView, AnimatePresence } from "moti";

// Librerias
import tw from "twrnc";
import { useState } from "react";

const CheckItem = ({
  title = "",
  bought,
  deleteItem,
  editItem,
  changeStatus,
}) => {
  const [aviable, setAviable] = useState(false);

  const handleHidden = () => {
    editItem();
    setAviable(false);
  };

  return (
    <Pressable
      style={({ pressed }) =>
        tw`relative flex-row justify-between items-center   py-2 px-1 rounded-lg overflow-hidden ${pressed ? "opacity-80" : "opacity-100"}`
      }
      onPress={changeStatus}
    >
      <View style={tw`flex-row items-center gap-2`}>
        <View
          style={tw`border border-black size-5 rounded-full overflow-hidden`}
        >
          <MotiView
            style={tw`bg-black size-full rounded-full`}
            animate={{ scale: bought ? 1 : 0 }}
            transition={{ type: "spring", duration: 200 }}
          />
        </View>
        <Text style={tw`text-lg`}>{title}</Text>
      </View>
      <Pressable onPress={() => setAviable(!aviable)}>
        {!aviable ? (
          <Ionicons name="menu-outline" style={tw`text-4xl`} />
        ) : (
          <Ionicons name="close-circle-outline" style={tw`text-4xl`} />
        )}
      </Pressable>

      <AnimatePresence>
        <MotiView
          animate={{ translateY: aviable ? 0 : -80 }}
          transition={{ type: "spring" }}
          style={tw`absolute left-0 flex-row flex-1 h-full w-[90%] bg-blue-200 rounded-lg overflow-hidden`}
        >
          <Pressable
            onPress={handleHidden}
            style={tw`bg-black/90 flex-row flex-1 justify-center items-center border border-r-sky-200`}
          >
            <Ionicons name="create-outline" style={tw`text-3xl text-white`} />
            <Text style={tw`text-xl text-white`}>Editar</Text>
          </Pressable>
          <Pressable
            onPress={deleteItem}
            style={tw`bg-black/90 flex-row flex-1 justify-center items-center`}
          >
            <Ionicons name="close-outline" style={tw`text-3xl text-white`} />
            <Text style={tw`text-xl text-white`}> Eliminar</Text>
          </Pressable>
        </MotiView>
      </AnimatePresence>
    </Pressable>
  );
};

export default CheckItem;
