import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Appbar } from "react-native-paper";
const Navbar = (props: any) => {
  const { title, subtitle, navigation, DrawerActions } = props;

  const [text, setText] = useState("Cheng Yang");

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action onPress={() => console.log("hi")} icon="menu" />
      <Appbar.Content
        style={styles.title}
        title={title !== undefined ? title : text}
        subtitle={subtitle !== undefined || subtitle !== null ? subtitle : ""}
      />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="cart-outline" />
    </Appbar.Header>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
