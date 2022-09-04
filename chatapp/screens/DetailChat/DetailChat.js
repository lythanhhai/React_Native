import React from 'react';
import Header from "../../components/Header/Header";
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        top: 90,
        height: "100%",
        backgroundColor: "rgb(243,243,243)",
    },
})

const DetailChat = () => {
    return(
        <>
            <Header title="Name" />
            <View style={styles.container}>
                
            </View>
        </>
    );
}

export default React.memo(DetailChat)