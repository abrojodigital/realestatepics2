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
    flex: 1,
    marginTop: 10,
    height: 100,
    width: "100%",
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 20,
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
    fontWeight: "bold",
  },
});
