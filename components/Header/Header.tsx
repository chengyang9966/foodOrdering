import { Icon } from "expo";
import React, { useContext } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import LocationContext from "../../State/Location/LocationContext";
import { Colors, useTheme, Appbar } from "react-native-paper";
const Header = (props: any) => {
  const { navigation, title } = props;
  const locationContext = useContext(LocationContext);
  const { Reset } = locationContext;
  const { colors, fontFamily, bodyFont } = useTheme();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={[
        {
          borderBottomWidth: 1,
          borderBottomColor: colors.text,
          backgroundColor: "white",
          width: windowWidth,
        },
        styles.container,
      ]}
    >
      <View style={[{ width: windowWidth / 2.5 }, styles.searchIcon]}>
        <Appbar.Action
          icon="keyboard-backspace"
          color={Colors.red500}
          size={20}
          onPress={() => {
            navigation.pop();
            Reset();
          }}
        />
      </View>
      <Text
        style={[
          {
            fontWeight: "bold",
            fontFamily: fontFamily,
            fontSize: bodyFont,
            width: windowWidth,
          },
          styles.title,
        ]}
      >
        {title}
      </Text>
      <></>
      <></>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10000,
    marginTop: 20,
    flexDirection: "row",
    top: 0,
    alignItems: "center",
    height: 40,
  },
  searchIcon: {
    padding: 10,
  },
  title: {
    paddingRight: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
