import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  contentPicker: {
    borderBottom: 1,
  },
  title: {
    fontSize: 16,
    paddingBottom: 15,
    fontWeight: "bold",
  },
  text: {
    borderBottomColor: colors.primary,
    paddingTop: 10,
    padding: 5,
  },
});
