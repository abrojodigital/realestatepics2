import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { Input } from "../../components";
import { updatePropertyById } from "../../store/property/propertySlice";
import colors from "../../utils/colors";

const PropertyEdit = ({ navigation, route }) => {
  const { propertyId } = route.params;
  const dispatch = useDispatch();
  const property = useSelector((state) =>
    state.property.properties.find((property) => property.id === propertyId)
  );

  const [formData, setFormData] = useState({
    propertyId: property.id,
    title: property.title,
    images: property.images,
    address: property.address,
    coords: property.coords,
    status: property.status,
    price: property.price,
    area: property.area,
  });

  const { title, status, price, area } = formData;

  const onHandlerChangeText = (value, field) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const handleSaveChanges = () => {
    dispatch(updatePropertyById(formData));
    navigation.navigate("Properties");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Input
          placeholder=""
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "title")}
          value={title}
          label="Descripción"
        />
        <View style={styles.contentPicker}>
          <Text style={styles.text}>Estado de la propiedad</Text>
          <Picker
            selectedValue={status}
            style={{ height: 50, width: "100%" }}
            onValueChange={(value) => onHandlerChangeText(value, "status")}
          >
            <Picker.Item label="Seleccione un estado" value="" />
            <Picker.Item label="En Alquiler" value="En Alquiler" />
            <Picker.Item label="En Venta" value="En Venta" />
            <Picker.Item label="Alquilado" value="Alquilado" />
            <Picker.Item label="Vendido" value="Vendido" />
          </Picker>
        </View>

        <Input
          placeholder=""
          keyboardType="numeric"
          maxLength={15}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "price")}
          value={price.toString()}
          label="Precio"
        />
        <Input
          placeholder=""
          keyboardType="number-pad"
          maxLength={6}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "area")}
          value={area.toString()}
          label="Área"
        />
        <Button
          title="Guardar cambios"
          color={colors.primary}
          onPress={handleSaveChanges}
        />
      </View>
    </ScrollView>
  );
};

export default PropertyEdit;
