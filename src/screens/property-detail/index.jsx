import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { MapPreview } from "../../components";
import convertStringToArray from "../../utils/convert";

const PropertyDetail = ({ navigation, route }) => {
  const { propertyId } = route.params;
  const property = useSelector((state) =>
    state.property.properties.find((property) => property.id === propertyId)
  );

  const parseCoords = JSON.parse(property.coords);

  const images = convertStringToArray(property.images);

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.images} />
        ))}
      </ScrollView>

      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.title}>{property.title}</Text>
          <Text style={styles.address}>{property.address}</Text>
          <Text style={styles.title}>{property.status}</Text>
          <Text style={styles.price}>Precio: ${property.price}</Text>
          <Text style={styles.area}>Área: {property.area} m²</Text>
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

export default PropertyDetail;
