import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./Styles";
import data from "../../constants/dataChat";
import ChatItem from "../ChatItem/ChatItem";

const ListChat = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ChatItem item={item} />;
        }}
      />
    </View>
  );
};

export default React.memo(ListChat);
