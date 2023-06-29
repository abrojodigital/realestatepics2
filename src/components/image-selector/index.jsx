import { MaterialIcons } from "@expo/vector-icons";
import {
  MediaTypeOptions,
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import colors from "../../utils/colors";

const ImageSelector = ({ onImage }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const verifyPermissions = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permiso denegado",
        "Necesitamos permisos para acceder a la galería de imágenes",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const handlePickImage = async () => {
    const isPermissionGranted = await verifyPermissions();
    if (!isPermissionGranted) return;

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 0.7,
    });

    if (!result.cancelled) {
      const image = result.uri;
      setSelectedImages((prevImages) => [...prevImages, image]);
      onImage(image);
    } else {
      console.log("Cancel");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Imágenes</Text>
      <ScrollView horizontal>
        {selectedImages.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.images} />
        ))}
      </ScrollView>
      <Button
        title="Agregar Imagen"
        color={colors.primary}
        onPress={handlePickImage}
        icon={<MaterialIcons name="add" size={24} color="white" />}
      />
    </View>
  );
};

export default ImageSelector;
