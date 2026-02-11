// Rn
import { View, Text } from "react-native";

// Components
import ShoppingScreen from "../../components/screens/ShoppingScreen";
import BannerTitle from "../../components/BannerTitle";
import BannerList from "../../components/BannerList";
import CheckItem from "../../components/CheckItem";

const index = () => {
  return (
    <ShoppingScreen>
      <BannerTitle
        title="Tareas Diarias"
        subTitle="Tu lista tareas"
        icon="checkmark-done"
      />
      <BannerList>
        {Array.from("paracetamol con papas").map((_, i) => (
          <CheckItem key={i} title={`Tarea ${i + 1}`} />
        ))}
      </BannerList>
    </ShoppingScreen>
  );
};

export default index;
