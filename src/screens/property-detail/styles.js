import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "40%",
    minHeight: 220,
    width: "100%",
  },
  location: {
    marginTop: 20,
    marginHorizontal: 10,
    width: "95%",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
  },
  address: {
    color: colors.primary,
    textAlign: "center",
  },
  map: {
    height: 320,
  },
  mapText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "gray",
  },
  images: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 5,
  },
});
