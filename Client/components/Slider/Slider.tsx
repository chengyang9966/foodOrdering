import * as React from "react";
import { DataTable } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

const Slider = (props: any) => (
  <View style={style.outer}>
    <DataTable.Row class="sliderPadding" style={style.container}>
      <DataTable.Cell style={style.items}>
        <Text style={style.eachItem}>Info</Text>
      </DataTable.Cell>
      <DataTable.Cell style={style.items}>
        {" "}
        <Text style={style.eachItem}>HI</Text>
      </DataTable.Cell>
      <DataTable.Cell style={style.items}>
        {" "}
        <Text style={style.eachItem}>HI</Text>
      </DataTable.Cell>
      <DataTable.Cell style={style.items}>
        {" "}
        <Text style={style.eachItem}>HI</Text>
      </DataTable.Cell>
      <DataTable.Cell style={style.items}>
        {" "}
        <Text style={style.eachItem}>HI</Text>
      </DataTable.Cell>
      <DataTable.Cell style={style.items}>
        {" "}
        <Text style={style.eachItem}>HI</Text>
      </DataTable.Cell>
    </DataTable.Row>
  </View>
);

export default Slider;

const style = StyleSheet.create({
  outer: {
    width: "100vw",
  },
  container: {
    marginTop: 3,
    paddingLeft: 0,
    paddingRight: 0,
    width: 1000,
    overflow: "scroll",
    zIndex: -1,
    // whitespace: "nowrap",
  },
  items: {
    borderWidth: 0.5,
    width: 100,
    backgroundColor: "#d3d3d3",
  },
  eachItem: {
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 15,
  },
});
