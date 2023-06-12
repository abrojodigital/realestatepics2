import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceDetail = ({ route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.place.places.find((item) => item.id === placeId)
  );

  if (!place) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Lugar no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <Text style={styles.title}>{place.title}</Text>
      <Text style={styles.address}>{place.address}</Text>
    </View>
  );
};

export default PlaceDetail;
