import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "flex-end",
    // alignItems: "center",
    paddingRight: 10,
  },    
  image: {
    width: 45,
    height: 45,
    borderRadius: 30,
    resizeMode: "contain",
    objectFit: "cover",
    marginLeft: 10,
    // transform: [
    //     { translateX: Dimensions.get('window').width * 0.25 },
    //   ],
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
    // backgroundColor: "rgb(237,241,255)",
    // transform: [
    //     { translateX: Dimensions.get('window').width * 0.25 },
    //   ],
  },    
});

export default styles;
