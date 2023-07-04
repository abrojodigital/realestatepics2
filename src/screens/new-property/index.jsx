import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { ImageSelector, Input, LocationSelector } from "../../components";
import { saveProperty } from "../../store/property/propertySlice";
import colors from "../../utils/colors";

const NewProperty = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    images: "",
    coords: null,
    status: "",
    price: 0,
    area: 0,
  });

  const { title, images, coords, status, price, area } = formData;

  const onHandlerChangeText = (value, field) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const onHandlerSubmit = () => {
    formData.images = JSON.stringify(images);
    dispatch(saveProperty(formData));
    navigation.navigate("Properties");
  };

  const onImage = (imageUri) => {
    if (images.length < 5) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, imageUri],
      }));
    }
  };

  const onLocation = (location) => {
    setFormData((prevFormData) => ({ ...prevFormData, coords: location }));
  };

  const enableButton =
    title && images.length >= 1 && coords && status && area && price;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Input
          placeholder="Casa 2 dormitorios 90 m2, Esquel"
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
          placeholder="Precio"
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
          placeholder="Área en metros cuadrados"
          keyboardType="number-pad"
          maxLength={6}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "area")}
          value={area.toString()}
          label="Área"
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={!enableButton}
          title="Grabar propiedad"
          color={colors.primary}
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewProperty;
