import { Icon } from "expo";
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import LocationContext from "../../State/Location/LocationContext";
import { Colors, useTheme, Appbar } from "react-native-paper";
const Header = (props: any) => {
  const { navigation, title } = props;
  const locationContext = useContext(LocationContext);
  const { Reset } = locationContext;
  const { colors, fontFamily, bodyFont } = useTheme();
  return (
    <View
      style={[
        {
          borderBottomWidth: 1,
          borderBottomColor: colors.text,
          backgroundColor: "white",
        },
        styles.container,
      ]}
    >
      <View style={styles.searchIcon}>
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
          { fontWeight: "bold", fontFamily: fontFamily, fontSize: bodyFont },
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
    position: "fixed",
    zIndex: 10000,
    flexDirection: "row",
    top: 0,
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  searchIcon: {
    padding: 10,
    width: "10%",
  },
  title: {
    paddingRight: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});
