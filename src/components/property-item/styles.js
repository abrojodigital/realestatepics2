import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold",
  },
  status: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: colors.text,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
});
