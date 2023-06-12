import { FlatList } from "react-native";
import { PlaceItem } from "../../components";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

  const onHandlerSelect = (id) => {
    navigation.navigate("PlaceDetail", { placeId: id });
  };

  const renderItem = ({ item }) => (
    <PlaceItem {...item} onSelect={onHandlerSelect} />
  );
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;
