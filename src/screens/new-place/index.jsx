import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { ImageSelector, Input, LocationSelector } from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    coords: null,
    status: "",
    price: 0,
    area: 0,
  });

  const { title, image, coords, status, price, area } = formData;

  const onHandlerChangeText = (value, field) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const onHandlerSubmit = () => {
    console.log(formData);
    dispatch(savePlace(formData)).unwrap();
    navigation.navigate("Places");
  };

  const onImage = (imageUri) => {
    setFormData((prevFormData) => ({ ...prevFormData, image: imageUri }));
  };

  const onLocation = (location) => {
    setFormData((prevFormData) => ({ ...prevFormData, coords: location }));
  };

  const enableButton = title && image && coords && status && area && price;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Descripción nuevo inmueble</Text>
        <Input
          placeholder="Casa 2 dormitorios 90 m2, Esquel"
          placeholderTextColor={colors.darkGray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "title")}
          value={title}
          label="Descripción"
        />
        <Input
          placeholder="En Alquiler / En Venta"
          placeholderTextColor={colors.darkGray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "status")}
          value={status}
          label="Estado"
        />
        <Input
          placeholder="Precio"
          keyboardType="numeric"
          maxLength={15}
          placeholderTextColor={colors.darkGray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "price")}
          value={price}
          label="Precio"
        />
        <Input
          placeholder="Área en metros cuadrados"
          keyboardType="number-pad"
          maxLength={6}
          placeholderTextColor={colors.darkGray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onHandlerChangeText(value, "area")}
          value={area}
          label="Area"
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={!enableButton}
          title="Grabar ubicación"
          color={colors.primary}
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
