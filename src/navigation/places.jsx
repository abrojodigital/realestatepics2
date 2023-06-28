import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, TouchableOpacity } from "react-native";

import {
  MapsScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlaceListScreen,
} from "../screens/index";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Inmuebles",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
              <Ionicons
                name="add-circle-outline"
                size={25}
                color={colors.white}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalles del inmueble" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "Nuevo inmueble" }}
      />
      <Stack.Screen
        name="Maps"
        component={MapsScreen}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
