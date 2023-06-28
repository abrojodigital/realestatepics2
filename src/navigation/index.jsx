import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./auth";
import PropertiesNavigator from "./properties";

const Navigation = () => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>
      {userId ? <PropertiesNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
