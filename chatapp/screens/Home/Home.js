import React from 'react';
import Header from "../../components/Header/Header";
import Unread from '../../components/Unread/Unread';
import ChatItem from '../../components/ChatItem/ChatItem';
import ListChat from '../../components/ListChat/ListChat';
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

const Home = () => {
    return(
        <>
            <Header title="Notification" />
            <View style={styles.container}>
                <Unread numberMessage={5}/>
                <ListChat />
            </View>
        </>
    );
}

export default React.memo(Home)