import React, { useRef, useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  Button,
  Image,
  TextBase,
  Keyboard,
  Alert,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../components/InputBox";
import Colors from "../lib/Colors";
import Output from "../components/Output";
import BottomSheet from "../components/BottomSheet";
import { BottomSheetRefProps } from "../components/BottomSheet";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../App";
import { runQuery } from "../DB";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation, route }: Props): JSX.Element => {
  const [text, setText] = useState("");
  const [r, setR] = useState({ result: [], msg: "" });
  const [modalVisible, setModalVisible] = useState(true);

  const ref = useRef<BottomSheetRefProps>(null);
  // console.log("sai");
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onPress();
              runQueryMsg();
            }}
          >
            <Image style={styles.img} source={require("../assets/play.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={moreOps}>
            <Image style={styles.img2} source={require("../assets/more.png")} />
          </TouchableOpacity>
        </>
      ),
    });
  }, [text]);

  const onPress = useCallback(() => {
    Keyboard.dismiss();
    const isActive = ref?.current?.isActive();
    if (isActive) {
      // ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-450);
    }
  }, []);

  const moreOps = () => {
    console.log("running");

    setModalVisible(true);
  };

  Keyboard.addListener("keyboardDidShow", () => {
    ref?.current?.scrollTo(0);
  });

  const runQueryMsg = () => {
    if (text == "") {
      Alert.alert("Error!", "Write Your Query!");
      return;
    }

    // console.log(text);
    const fnVal = (val: []) => {
      setR({ msg: "", result: val });
      // console.log("r" + r);
    };
    const fnMsg = (val: string) => {
      setR((pr) => ({ msg: val, result: pr.result }));
      // console.log("r" + r);
    };
    runQuery(text, fnVal, fnMsg);
    ToastAndroid.showWithGravityAndOffset(
      "Executing 🔧",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      90
    );
    // setText("")
  };

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor="tomato" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={{ flex: 1, backgroundColor: Colors.bg }}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Hello!{"\n"}- Press play button To Run query {"\n"}- Default
                  DB is sai {"\n"}- For more details check SqlLite guides{"\n"}-
                  Created by saigenix{"\n"}
                  <Text
                    style={{
                      color: "blue",
                      fontStyle: "italic",
                      marginTop: 20,
                    }}
                    onPress={() =>
                      Linking.openURL("https://www.linkedin.com/in/saigenix77/")
                    }
                  >
                    - Follow Me On Linkedin{"\n"}
                  </Text>
                </Text>
                <Pressable
                  style={[styles.button1, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <InputBox text={text} setText={setText} />
          <BottomSheet ref={ref}>
            <Output output={r} />
          </BottomSheet>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    // height: 40,
    // alignSelf: "center",
    // borderRadius: 1,
    // backgroundColor: "white",
    opacity: 1,
    // width: 40,
    // margin: 10,
    marginLeft: 10,
    // justifyContent: "center",
  },
  txt: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 3,
    shadowColor: "black",
  },
  img2: {
    width: 30,
    height: 30,
    borderRadius: 3,
    shadowColor: "black",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 2,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button1: {
    borderRadius: 2,
    padding: 10,
    color: "tomato",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "tomato",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 5,
    color: "black",
    fontWeight: "bold",
  },
});

export default Home;
