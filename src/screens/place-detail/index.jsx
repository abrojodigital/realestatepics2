import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { MapPreview } from "../../components";
import convertStringToArray from "../../utils/convert";

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.place.places.find((place) => place.id === placeId)
  );

  const parseCoords = JSON.parse(place.coords);

  const images = convertStringToArray(place.images);

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.images} />
        ))}
      </ScrollView>

      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.title}>{place.title}</Text>
          <Text style={styles.address}>{place.address}</Text>
          <Text style={styles.title}>{place.status}</Text>
          <Text style={styles.price}>Precio: ${place.price}</Text>
          <Text style={styles.area}>Área: {place.area} m²</Text>
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
