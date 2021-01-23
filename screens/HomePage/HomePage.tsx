import React, { useState } from "react";
import { StyleSheet } from "react-native";

import GooglePlacesInput from "../../components/Search Bar/GoogleSearch";
import { View, Text, TextInput } from "react-native";
import { Button, useTheme } from "react-native-paper";

const HomePage = (props: any) => {
  const { navigation, route } = props;
  const { colors } = useTheme();
  console.log("🚀 ~ file: HomePage.tsx ~ line 13 ~ HomePage ~ colors", colors);
  return (
    <View
      style={{
        backgroundColor: colors.background,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Navbar navigation={navigation} /> */}
      <View>
        <Text style={[{ color: colors.primary }, styles.title]}>Nak Order</Text>
        <GooglePlacesInput navigation={navigation} />
        <Button
          icon="camera"
          mode="contained"
          color={colors.accent}
          onPress={() => navigation.navigate("Item")}
        >
          Go to Item
        </Button>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {},
  // textBox: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "100%",

  //   // marginTop: 200,
  //   // marginLeft: 15,
  //   // marginRight: 15,
  // },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    Width: "90%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
