import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // position: "absolute",
        // top: 90,
        // backgroundColor: "white",
        marginTop: 15,
        marginBottom: 15,
    },
    title: {
        fontSize: 14,
        color: "rgb(150,175,255)",
        marginLeft: 14,
    },
    icon_trash: {
        marginRight: 7,
    }
});

export default styles;