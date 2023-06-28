import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./auth";
import PlacesNavigator from "./places/places";

const Navigation = () => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>
      {userId ? <PlacesNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
