// RN
// import { Pressable, Text, View } from "react-native";

// Expo
import { useLocalSearchParams } from "expo-router";

// Librerias
// import tw from "twrnc";

// Componentes
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import { useShopping } from "../../store/shopping.store";
import BannerList from "../../components/BannerList";
import CheckItem from "../../components/CheckItem";

function Products() {
  const { id } = useLocalSearchParams();
  const supermarket = useShopping((state) => state.supermarket);
  const { name } = supermarket.find((item) => item.id === Number(id));

  return (
    <ShoppingScreen>
      <BannerTitle
        title={name}
        subTitle={`Tus compras en ${name}`}
        icon="bag-handle"
      />
      <BannerList>
        {Array.from("abcdariojajaja").map((_, i) => (
          <CheckItem key={i} />
        ))}
      </BannerList>
    </ShoppingScreen>
  );
}

export default Products;
