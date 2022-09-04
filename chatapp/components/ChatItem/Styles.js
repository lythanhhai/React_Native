import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
    // border: "1px solid black",
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: "cover",
    resizeMode: "contain",
    borderRadius: 30,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
  },
  infor: {
    marginLeft: 7,
    width: "80%",
  },
  // name: {
  //     width: "100%",
  //     whiteSpace: "nowrap",
  //     overflow: "hidden",
  //     textOverflow: "ellipsis",
  // },
  // message: {
  //     width: "100%",
  //     whiteSpace: "nowrap",
  //     overflow: "hidden",
  //     textOverflow: "ellipsis",
  // },
  minute: {
    marginRight: 12,
    fontSize: 12,
  },
});

export default styles;
