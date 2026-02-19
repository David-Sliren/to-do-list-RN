import { Text, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useState } from "react";
import { AnimatePresence, MotiText, MotiView } from "moti";

const OrderList = ({ handle }) => {
  const [isOpen, setIsopen] = useState(false);

  const sortList = [
    { id: "az", label: "A-Z" },
    { id: "za", label: "Z-A" },
    { id: "date-ascend", label: "Reciente" },
    { id: "date-defaul", label: "Inicial" },
  ];

  return (
    <View
      style={tw`flex-row justify-start gap-2 p-1 rounded-lg overflow-hidden  `}
    >
      <AnimatePresence>
        <Pressable
          onPress={() => setIsopen(!isOpen)}
          style={tw`flex-row items-center gap-1`}
        >
          <Ionicons
            name={isOpen ? "close-circle" : "add-circle"}
            style={tw`text-3xl text-black`}
          />
          {!isOpen && (
            <MotiText
              from={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={tw`font-semibold`}
            >
              Ordenar
            </MotiText>
          )}
        </Pressable>
      </AnimatePresence>
      <MotiView
        animate={{ translateX: isOpen ? 0 : 400, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 600 }}
        style={tw`flex-row gap-1 items-center`}
      >
        {sortList.map((sl) => {
          return (
            <Pressable
              key={sl.id}
              onPress={() => (handle ? handle(sl.id) : "")}
              style={tw`px-4 py-2 bg-sky-600 rounded-xl`}
            >
              <Text style={tw`text-white`}>{sl.label}</Text>
            </Pressable>
          );
        })}
      </MotiView>
    </View>
  );
};

export default OrderList;
