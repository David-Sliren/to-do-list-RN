import { Text, View } from "react-native";
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import { useLocalSearchParams } from "expo-router";
import { useShopping } from "../../store/shopping.store";
import BannerList from "../../components/BannerList";

function Products() {
  const { id } = useLocalSearchParams();
  const { name } = useShopping((state) => state.supermarket[0]);
  //   const nom = supermarket.find((item) => item.id === id);

  return (
    <ShoppingScreen>
      <BannerTitle
        title={name}
        subTitle="Tu lista de compras"
        icon="bag-handle"
      />
      <BannerList>
        <View>
          <Text>{id}</Text>
        </View>
      </BannerList>
    </ShoppingScreen>
  );
}

export default Products;
