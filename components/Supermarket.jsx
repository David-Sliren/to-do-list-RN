// RN
import { BlurView } from "expo-blur";
import { Text, Pressable } from "react-native";

// Expo
import { useRouter } from "expo-router";

// Librerias
import tw from "twrnc";
import { MotiView, View } from "moti";
import { LinearTransition } from "react-native-reanimated";

// Componentes
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

const Supermarket = ({ total, title = "", deleteItem, editItem, id }) => {
  const router = useRouter();
  return (
    <MotiView
      from={{ opacity: 0, scale: 0, translateY: 50 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      exitTransition={{ duration: 200 }}
      layout={LinearTransition}
    >
      <BlurView
        intensity={40}
        tint="light"
        style={tw` border border-white/80 rounded-2xl overflow-hidden`}
      >
        <Pressable
          style={tw`flex-row justify-between items-center p-6`}
          onPress={() => router.push(`/shopping/${id}`)}
        >
          <Text style={tw`text-xl`}>{title}</Text>
          <View style={tw`flex-row items-center`}>
            {/* <Text style={tw`text-xl font-semibold`}>{total}</Text> */}
            <ButtonEdit action={editItem} />
            <ButtonDelete action={deleteItem} />
          </View>
        </Pressable>
      </BlurView>
    </MotiView>
  );
};

export default Supermarket;
