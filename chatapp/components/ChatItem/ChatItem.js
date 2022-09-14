import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles";
import Swipeout from "react-native-swipeout";

const ChatItem = ({ item, navigation, index }) => {
  const { avatar, name, message, minute } = item;
  // const swipeSettings = {
  //   autoClose: true,
  //   onClose: (secId, rowId, direction) => {},
  //   onOpen: (secId, rowId, direction) => {},
  //   right: [
  //     {
  //       onPress: () => {},
  //       text: "delete",
  //       type: "delete",
  //     },
  //   ],
  //   rowId: index,
  //   sectionId: 1,
  // };
  // var swipeoutBtns = [
  //   {
  //     text: 'Button'
  //   }
  // ]
  return (
    // <Swipeout>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("Detail", { user: item });
          // console.warn("oke")
        }}
      >
        <View style={styles.content}>
          <Image source={avatar} style={styles.image} />
          <View style={styles.infor}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.message} numberOfLines={1}>
              {message}
            </Text>
          </View>
        </View>
        <Text style={styles.minute}>{minute}</Text>
      </TouchableOpacity>
    // </Swipeout>
  );
};

export default React.memo(ChatItem);
