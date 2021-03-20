import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";

import GooglePlacesInput from "../../components/Search Bar/GoogleSearch";
import { View, Text, TextInput } from "react-native";
import { Button, useTheme } from "react-native-paper";

const HomePage = (props: any) => {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  // console.log("🚀 ~ file: HomePage.tsx ~ line 13 ~ HomePage ~ colors", colors);
  return (
    <View
      style={{
        backgroundColor: colors.background,
        height: windowHeight,
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Navbar navigation={navigation} /> */}
      <View>
        <Text
          style={[
            { color: colors.primary, marginTop: windowHeight / 3 },
            styles.title,
          ]}
        >
          Nak Order
        </Text>
        <GooglePlacesInput navigation={navigation} />
        <Button
          style={{ marginBottom: windowHeight / 2.2 }}
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "500",
  },
});
