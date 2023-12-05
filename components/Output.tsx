import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Table, Row, Rows } from "react-native-reanimated-table";
type params = {
  output: {
    result: Array<string>;
    msg: string;
  };
};
// const tableData = {
//   tableHead: ['Crypto Name', 'Value', 'Mkt Cap'],
//   tableData: [
//       ['Bitcoin', '$44,331', '$839,702,328,904'],
//       ['Ethereum', '$3000.9', '$359,080,563,225'],
//       ['Tether', '$1', '$79,470,820,738'],
//       ['BNB', '$413.44', '$69,446,144,361'],
//       ['USD Coin', '$1', '$53,633,260,549'],
//   ],
// };
const Output = ({ output }: params) => {
  let data = output.result.map((val, id) => Object.values(val));
  console.log(data);
  return (
    <>
      {/* <View style={{ flex: 1, backgroundColor: "#ff7f50" }}>
      <Text style={styles.txt}>{output.msg}</Text>

      <Text style={styles.txt2}>
        {output.result.map((val, id) => (
          <Text key={id} >{JSON.stringify(val)}</Text>
        ))}
      </Text>
    </View> */}

      <View style={styles.container}>
      <Text style={styles.txt}>{output.msg}</Text>
        <Table borderStyle={{ borderWidth: 4, borderColor: "teal" }}>
          {output.result.length > 0 ? (
            <Row
              data={Object.keys(Object.values(output.result)[0])}
              style={styles.head}
              textStyle={styles.headText}
            />
          ) : (
            <Text>" "</Text>
          )}
          <Rows data={data} textStyle={styles.text} />
        </Table>
      </View>
    </>
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
  container: { flex: 1, padding: 3, marginTop: 10 },
  head: { height: 40, backgroundColor: "skyblue" },
  headText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  text: {
    margin: 2,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default React.memo(Output);
