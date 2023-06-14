import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { ImageSelector, LocationSelector } from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [coords, setCoords] = useState(null);
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");

  const enableButton = text && image && coords;

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerSubmit = () => {
    dispatch(savePlace({ title: text, image, coords, price, area })).unwrap();
    navigation.navigate("Places");
  };

  const onImage = (imageUri) => {
    setImage(imageUri);
  };
  const onLocation = (location) => {
    setCoords(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Descripción nuevo inmueble</Text>
        <TextInput
          style={styles.input}
          placeholder="Casa 2 dormitorios 90 m2, Esquel"
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          keyboardType="numeric"
          onChangeText={(price) => setPrice(price)}
          value={price}
        />
        <TextInput
          style={styles.input}
          placeholder="Área en metros cuadrados"
          keyboardType="numeric"
          onChangeText={(area) => setArea(area)}
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
