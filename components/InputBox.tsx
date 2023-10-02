import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../lib/Colors";

type params = {
  text: string;
  setText: (t:string) => void;
};

const InputBox = ({ text, setText }: params) => {
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        onChangeText={(t) => setText(t)}
        multiline
        numberOfLines={15}
        value={text}
        textAlignVertical={"top"}
        placeholder="Enter Your Query"
        placeholderTextColor={Colors.WHITE}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  box: {
    // flex:1,
    height: null,
    width: null,
    padding: 2,
  },
  input: {
    fontSize: 20,
    color: Colors.WHITE,
    borderWidth: 0,
  },
  button: {
    color: Colors.PURPLE,
  },
});
