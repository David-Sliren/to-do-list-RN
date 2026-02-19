// RN
import { FlatList } from "react-native";

// Expo
import { BlurView } from "expo-blur";

// Librerias
import tw from "twrnc";

// Componentes
import ButtonAdd from "./ButtonAdd";
import EmptyState from "./EmptyState";
import OrderList from "./OrderList";
import { AnimatePresence } from "moti";

const BannerList = ({
  action,
  emptyState,
  hasChildren,
  flatKeyExtractor,
  flatRenderItem,
  flatData,
  flatHandle,
}) => {
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
      <AnimatePresence>
        <FlatList
          ListHeaderComponent={<OrderList handle={flatHandle} />}
          stickyHeaderHiddenOnScroll={true}
          ListHeaderComponentStyle={tw`border-b rounded-lg ${flatData.length ? "opacity-100" : "opacity-0"}`}
          contentContainerStyle={tw`gap-3 pb-10`}
          data={flatData}
          keyExtractor={flatKeyExtractor}
          renderItem={flatRenderItem}
        />
      </AnimatePresence>
    </BlurView>
  );
};

export default BannerList;
