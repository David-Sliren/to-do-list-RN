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
import { LinearTransition } from "react-native-reanimated";

const CheckItem = ({
  title = "",
  bought,
  deleteItem,
  editItem,
  changeStatus,
  index,
}) => {
  const [isAviable, setIsAviable] = useState(false);

  const handleHidden = () => {
    editItem();
    setIsAviable(false);
  };

  return (
    <MotiView
      from={{ translateX: index < 2 ? 0 : 200, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: -200, opacity: 0 }}
      transition={{ delay: index < 2 ? 0 : Math.min((index - 2) * 50, 400) }}
      exitTransition={{ duration: 200 }}
      layout={LinearTransition}
    >
      <Pressable
        style={({ pressed }) =>
          tw`relative flex-row justify-between items-center   py-2 px-1 rounded-lg overflow-hidden ${pressed ? "opacity-80" : "opacity-100"}`
        }
        onPress={changeStatus}
      >
        <View style={tw`flex-row items-center gap-2`}>
          <View
            style={tw`border border-black size-4 rounded-full overflow-hidden`}
          >
            <MotiView
              style={tw`bg-black size-full rounded-full`}
              animate={{ scale: bought ? 1 : 0 }}
              transition={{ type: "spring", duration: 200 }}
            />
          </View>
          <Text style={tw`text-xl`}>{title}</Text>
        </View>
        <Pressable onPress={() => setIsAviable(!isAviable)}>
          {!isAviable ? (
            <Ionicons
              name="ellipsis-horizontal"
              style={tw`text-4xl scale-80`}
            />
          ) : (
            <Ionicons
              name="close-circle-outline"
              style={tw`text-4xl scale-95`}
            />
          )}
        </Pressable>
        <ButtonsDeleteEdit
          btnEdit={handleHidden}
          btnDelete={deleteItem}
          changeBoolean={isAviable}
        />
      </Pressable>
    </MotiView>
  );
};

export default CheckItem;
