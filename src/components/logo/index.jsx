import {Image, Text, View} from "react-native";

import { styles } from "./styles";

const logo = ()=> {
  return (
    <View style={styles.contentLogo}>
      <Image
        style={styles.logo}
        source={require("../../imgs/real-estate.png")}
      />
      <Text style={styles.logoTitle}>Abrojo Estate</Text>
    </View>
  )
};

export default logo;
