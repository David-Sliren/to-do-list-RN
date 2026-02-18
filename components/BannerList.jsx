// RN
import { ScrollView } from "react-native";

// Expo
import { BlurView } from "expo-blur";

// Librerias
import tw from "twrnc";

// Componentes
import ButtonAdd from "./ButtonAdd";
import EmptyState from "./EmptyState";
import { AnimatePresence } from "moti";

const BannerList = ({ children, action, emptyState, hasChildren }) => {
  return (
    <BlurView
      intensity={20}
      tint="dark"
      style={tw`flex-1 border border-black/20 rounded-t-[35px] pt-8 px-5 overflow-hidden`}
    >
      {hasChildren && <ButtonAdd action={action} />}

      {!hasChildren && (
        <EmptyState
          onButtonPress={action}
          image={emptyState.image}
          title={emptyState.title}
          subtitle={emptyState.subtitle}
          buttontext={emptyState.buttonText}
        />
      )}

      <ScrollView
        contentContainerStyle={tw`gap-3 pb-10`}
        showsVerticalScrollIndicator={false}
      >
        <AnimatePresence>{children}</AnimatePresence>
      </ScrollView>
    </BlurView>
  );
};

export default BannerList;
