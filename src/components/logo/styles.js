import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  contentLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: 15,
    margin: 15,
    backgroundColor: colors.white,
  },

  logoTitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});