import { StyleSheet, Text, View } from "react-native";
import React from "react";

type params = {
  output: {
    result: Array<string>;
    msg: string;
  };
};

const Output = ({ output }: params) => {
  console.log(output.result);
  return (
    <View style={{ flex: 1, backgroundColor: "#ff7f50" }}>
      <Text style={styles.txt}>{output.msg}</Text>

      <Text style={styles.txt2}>
        {output.result.map((val, id) => (
          <Text key={id} >{JSON.stringify(val)}</Text>
        ))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: "black",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  txt2: {
    color: "black",
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    fontWeight: "bold",
  },
});

export default React.memo(Output);
