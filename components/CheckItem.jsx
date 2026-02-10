// RN
import { View, Text, Pressable } from "react-native";

// Expo
import { Ionicons } from "@expo/vector-icons";

// Moti
import { MotiView } from "moti";

// Librerias
import tw from "twrnc";
import { useState } from "react";
import ButtonsDeleteEdit from "./ButtonsDeleteEdit";

const CheckItem = ({
  title = "",
  bought,
  deleteItem,
  editItem,
  changeStatus,
}) => {
  const [isAviable, setIsAviable] = useState(false);

  const handleHidden = () => {
    editItem();
    setIsAviable(false);
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
      <Pressable onPress={() => setIsAviable(!isAviable)}>
        {!isAviable ? (
          <Ionicons name="menu-outline" style={tw`text-4xl`} />
        ) : (
          <Ionicons name="close-circle-outline" style={tw`text-4xl`} />
        )}
      </Pressable>
      <ButtonsDeleteEdit
        btnEdit={handleHidden}
        btnDelete={deleteItem}
        changeBoolean={isAviable}
      />
    </Pressable>
  );
};

export default CheckItem;
