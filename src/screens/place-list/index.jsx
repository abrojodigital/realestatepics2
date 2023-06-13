import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { PlaceItem } from "../../components";
import { getPlaces } from "../../store/place.slice";

const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);

  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  const onHandlerSelect = (id) => {
    navigation.navigate("PlaceDetail", { placeId: id });
  };

  const renderItem = ({ item }) => (
    <PlaceItem {...item} onSelect={onHandlerSelect} />
  );

  return (
    <FlatList
      data={places}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PlaceList;
