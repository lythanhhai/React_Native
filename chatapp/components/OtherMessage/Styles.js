import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    paddingLeft: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 30,
    resizeMode: "contain",
    objectFit: "cover",
    marginRight: 10,
  },
  imageHide: {
    width: 45,
    height: 45,
    borderRadius: 30,
    resizeMode: "contain",
    objectFit: "cover",
    marginLeft: 10,
    opacity: 0,
  },
  frame: {
    maxWidth: "60%",
    padding: 4,
  },
});

export default styles;
