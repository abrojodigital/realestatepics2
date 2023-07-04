import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, TouchableOpacity } from "react-native";

import {
  MapsScreen,
  NewPropertyScreen,
  PropertyDetailScreen,
  PropertyEditScreen,
  PropertyListScreen,
} from "../../screens/index";
import colors from "../../utils/colors";

const Stack = createNativeStackNavigator();

const PropertiesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Property"
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
        name="Properties"
        component={PropertyListScreen}
        options={({ navigation }) => ({
          title: "Inmuebles",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("NewProperty")}
            >
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
        name="PropertyDetail"
        component={PropertyDetailScreen}
        options={{ title: "Detalles del inmueble" }}
      />
      <Stack.Screen
        name="NewProperty"
        component={NewPropertyScreen}
        options={{ title: "Nuevo inmueble" }}
      />
      <Stack.Screen
        name="EditProperty"
        component={PropertyEditScreen}
        options={{ title: "Editar inmueble" }}
      />
      <Stack.Screen
        name="Maps"
        component={MapsScreen}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
};

export default PropertiesNavigator;
