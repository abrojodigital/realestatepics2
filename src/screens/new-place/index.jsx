import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { ImageSelector, LocationSelector } from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    text: "",
    image: "",
    coords: null,
    status: "",
    price: "",
    area: "",
  });

  const { text, image, coords, status, price, area } = formData;

  const onHandlerChangeText = (value, field) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const onHandlerSubmit = () => {
    dispatch(savePlace(formData)).unwrap();
    navigation.navigate("Places");
  };

  const onImage = (imageUri) => {
    setFormData((prevFormData) => ({ ...prevFormData, image: imageUri }));
  };

  const onLocation = (location) => {
    setFormData((prevFormData) => ({ ...prevFormData, coords: location }));
  };

  const enableButton = text && image && coords;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Descripción nuevo inmueble</Text>
        <TextInput
          style={styles.input}
          placeholder="Casa 2 dormitorios 90 m2, Esquel"
          onChangeText={(value) => onHandlerChangeText(value, "text")}
          value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="En Alquiler / En Venta"
          onChangeText={(value) => onHandlerChangeText(value, "status")}
          value={status}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          keyboardType="numeric"
          onChangeText={(value) => onHandlerChangeText(value, "price")}
          value={price}
        />
        <TextInput
          style={styles.input}
          placeholder="Área en metros cuadrados"
          keyboardType="numeric"
          onChangeText={(value) => onHandlerChangeText(value, "area")}
          value={area}
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
