import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { MapPreview } from "../../components";

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.place.places.find((place) => place.id === placeId)
  );
  const parseCoords = JSON.parse(place.coords);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.title}>{place.title}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview
          style={styles.map}
          location={{ lat: parseCoords.lat, lng: parseCoords.lng }}
        >
          <Text style={styles.mapText}>Ubicación no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
