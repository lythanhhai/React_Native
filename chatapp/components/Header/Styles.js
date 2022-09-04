import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 45,
        backgroundColor: "white",
    },
    title: {
        fontWeight: "500",
        fontSize: 20,
    },
    icon_back: {
        marginLeft: 7,
    },
    icon_search: {
        marginRight: 7,
    }
});

export default styles;