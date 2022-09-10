import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import OwnMessage from "../../components/OwnMessage/OwnMessage";
import OtherMeassge from "../../components/OtherMessage/OtherMeassge";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  get,
  child,
} from "../../firebase/firebase";
import getNumberContent from "../../Repository/getContentChat";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 90,
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
  const [chatHistory, setChatHistory] = useState([
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: true,
    //   content: "hello",
    //   timestamp: 1662430812,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: false,
    //   content: "hi",
    //   timestamp: 1662430813,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: false,
    //   isSender: false,
    //   content: "What happen?",
    //   timestamp: 1662430814,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: true,
    //   content: "how are you today?",
    //   timestamp: 1662430817,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: false,
    //   content: "I'm fine, thanks and you",
    //   timestamp: 1662430818,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: true,
    //   content: "Oh, i'm great at now!",
    //   timestamp: 1662430820,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: false,
    //   content: "What do you today?",
    //   timestamp: 1662430840,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: true,
    //   content: "oh, yeah",
    //   timestamp: 1662430843,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: false,
    //   isSender: true,
    //   content: "I thinh i will learn english and practice programming",
    //   timestamp: 1662430845,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isShower: true,
    //   isSender: false,
    //   content: "Nice!! :V",
    //   timestamp: 1662430850,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: true,
    //   content: "hello",
    //   timestamp: 1662430815,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: false,
    //   content: "hi",
    //   timestamp: 1662430816,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: true,
    //   content: "how are you today?",
    //   timestamp: 1662430817,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: false,
    //   content: "I'm fine, thanks and you",
    //   timestamp: 1662430818,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: true,
    //   content: "Oh, i'm great at now!",
    //   timestamp: 1662430820,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: false,
    //   content: "What do you today?",
    //   timestamp: 1662430840,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: true,
    //   content: "I will learn english and practice programming",
    //   timestamp: 1662430845,
    // },
    // {
    //   avatar: data.user.avatar,
    //   isSender: false,
    //   content: "Nice!! :V",
    //   timestamp: 1662430850,
    // },
  ]);
  const [check, setCheck] = useState(true);
  var afterData = chatHistory.sort((a, b) => {
    return a.timestamp - b.timestamp;
  });
  const sortDataByTime = (data) => {
    var afterData = data.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });
    // alert(afterData[0].timestamp)
    setChatHistory(afterData);
    setCheck(false);
  };
  useEffect(() => {
    sortDataByTime(chatHistory);
  });
  // alert("PROPS " + data.user.name);
  const [contentMessage, setContentMessage] = useState("");
  return (
    <>
      <Header
        title={data.user.name}
        pages={"Detail"}
        navigation={props.navigation}
      />
      <View style={styles.container}>
        {/* <ScrollView > */}
        {/* <OwnMessage content="Hello" avatar={data.user.avatar} />
          <OtherMeassge content="Hi" avatar={data.user.avatar} />
          <OwnMessage content="How are you today?" avatar={data.user.avatar} />
          <OtherMeassge
            content="I'm fine, thanks and you"
            avatar={data.user.avatar}
          />
          <OwnMessage
            content="Oh, i'm great at now!"
            avatar={data.user.avatar}
          />
          <OwnMessage content="Hello" avatar={data.user.avatar} />
          <OtherMeassge content="Hi" avatar={data.user.avatar} />
          <OwnMessage content="How are you today?" avatar={data.user.avatar} />
          <OtherMeassge
            content="I'm find, thanks and you"
            avatar={data.user.avatar}
          />
          <OwnMessage
            content="Oh, i'm great at now!"
            avatar={data.user.avatar}
          />
          <OwnMessage content="Hello" avatar={data.user.avatar} />
          <OtherMeassge content="Hi" avatar={data.user.avatar} />
          <OwnMessage content="How are you today?" avatar={data.user.avatar} />
          <OtherMeassge
            content="I'm find, thanks and you"
            avatar={data.user.avatar}
          />
          <OwnMessage
            content="Oh, i'm great at now!"
            avatar={data.user.avatar}
          /> */}
        <FlatList
          style={styles.scroll}
          // inverted
          data={check ? afterData : chatHistory}
          renderItem={({ item }) => {
            if (item.isSender) {
              return (
                <OwnMessage
                  content={item.content}
                  avatar={item.avatar}
                  isShower={item.isShower}
                />
              );
            } else {
              return (
                <OtherMeassge
                  content={item.content}
                  avatar={item.avatar}
                  isShower={item.isShower}
                />
              );
            }
          }}
        />
        {/* </ScrollView> */}
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
            marginBottom: 1,
          }}
        >
          <TextInput
            style={{ width: "90%", paddingHorizontal: 3 }}
            placeholder="Write a message..."
            onChangeText={(value) => {
              setContentMessage(value);
            }}
            value={contentMessage}
          />
          <MaterialIcons name="insert-emoticon" size={24} color="black" />
        </View>
        <Feather
          name="send"
          size={24}
          color="black"
          onPress={async () => {
            if (contentMessage.length === 0) {
              alert("not");
            } else {
              // alert(contentMessage);
              const res = await AsyncStorage.getItem("user");
              const currentUser = JSON.parse(res);
              // console.log(currentUser.uid + " " + currentUser["uid"])
              let newMessagerObject = {
                // uid: currentUser["uid"],
                avatar: data.user.avatar,
                isShower: true,
                // isSender: true,
                content: contentMessage,
                timestamp: new Date().getTime(),
              };
              // console.log(data.user.name)
              var listUser = {};
              var idReceiver = "";
              await get(child(firebaseDatabaseRef(firebaseDatabase), "users"))
                .then((snapshot) => {
                  listUser = snapshot.val()
                  for(let item in listUser)
                  {
                    if(listUser[item].email === data.user.name)
                    {
                      idReceiver = item
                      break;
                    }
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
              // console.log(idReceiver)
              var idChat = getNumberContent(currentUser.uid + "-" + idReceiver)
              // console.log(idChat)
              if(idReceiver === "")
              {
                console.log("User not exists!!!")
              }
              else {
                firebaseSet(
                  firebaseDatabaseRef(
                    firebaseDatabase,
                    `chats/${currentUser.uid}-${idReceiver}/${idChat+1}`
                  ),
                  newMessagerObject
                );
                setContentMessage("")
              }
            }
          }}
        />
      </View>
    </>
  );
};

export default React.memo(DetailChat);
