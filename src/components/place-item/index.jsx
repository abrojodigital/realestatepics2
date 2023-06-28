import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import convertStringToArray from "../../utils/convert";

const PlaceItem = ({ id, title, images, address, onSelect }) => {
  const listImages = convertStringToArray(images);
  const firstImage = listImages.length > 0 ? listImages[0] : null;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
      <Image style={styles.image} source={{ uri: firstImage }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
