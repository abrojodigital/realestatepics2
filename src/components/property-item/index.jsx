import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { deletePropertyById } from "../../store/property/propertySlice";
import convertStringToArray from "../../utils/convert";

const PropertyItem = ({ id, title, images, address, onSelect }) => {
  const dispatch = useDispatch();
  const firstImage =
    convertStringToArray(images).length > 0
      ? convertStringToArray(images)[0]
      : null;

  const confirmDelete = () => {
    Alert.alert("Confirma Borrar?", "Está seguro de borrar este registro?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Borrar", style: "destructive", onPress: () => handleDelete() },
    ]);
  };

  const handleDelete = () => {
    dispatch(deletePropertyById(id))
      .unwrap()
      .then(() => {
        console.log("Property deleted successfully");
      })
      .catch((error) => {
        console.log("Error deleting property:", error);
      });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
      <Image style={styles.image} source={{ uri: firstImage }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={confirmDelete}>
            <Icon name="trash" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyItem;
