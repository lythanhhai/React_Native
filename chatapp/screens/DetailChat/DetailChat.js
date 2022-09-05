import React from "react";
import Header from "../../components/Header/Header";
import { View, StyleSheet, TextInput, ScrollView, Text } from "react-native";
import OwnMessage from "../../components/OwnMessage/OwnMessage";
import OtherMeassge from "../../components/OtherMessage/OtherMeassge";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 60,
    height: "78%",
    // marginTop: 20,
    backgroundColor: "rgb(243,243,243)",
  },
  scroll: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(243,243,243)",
  },
  input: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    height: 62,
    bottom: 0,
    backgroundColor: "rgb(243,243,243)",
  },
});

const DetailChat = (props) => {
  const data = props.route.params;
  // alert("PROPS " + data.user.name);
  return (
    <>
      <Header title={data.user.name} pages={"Detail"} navigation={props.navigation}/>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <OwnMessage content="Hello" />
          <OtherMeassge content="Hi" />
          <OwnMessage content="How are you today?" />
          <OtherMeassge content="I'm find, thanks and you" />
          <OwnMessage content="Oh, i'm great at now!" />
          <OwnMessage content="Hello" />
          <OtherMeassge content="Hi" />
          <OwnMessage content="How are you today?" />
          <OtherMeassge content="I'm find, thanks and you" />
          <OwnMessage content="Oh, i'm great at now!" />
          <OwnMessage content="Hello" />
          <OtherMeassge content="Hi" />
          <OwnMessage content="How are you today?" />
          <OtherMeassge content="I'm find, thanks and you" />
          <OwnMessage content="Oh, i'm great at now!" />
        </ScrollView>
      </View>
      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            width: "88%",
            height: "90%",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "thistle",
            marginBottom: 1
          }}
        >
          <TextInput
            style={{ width: "90%", paddingHorizontal: 3 }}
            placeholder="Write a message..."
          />
          <MaterialIcons name="insert-emoticon" size={24} color="black" />
        </View>
        <Feather name="send" size={24} color="black" />
      </View>
    </>
  );
};

export default React.memo(DetailChat);
