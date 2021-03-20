import { Icon } from "expo";
import React, { useContext } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import LocationContext from "../../State/Location/LocationContext";
import { Colors, useTheme, Appbar } from "react-native-paper";

interface Header {
  navigation?: any;
  stackScreen?: any;
  title: string | any;
  disabledBack?: Boolean;
  children?: React.ReactNode;
}

const Header = (props: Header) => {
  const { navigation, title, stackScreen, disabledBack, children } = props;
  const route = useRoute();

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
      <View style={[styles.searchIcon]}>
        <Appbar.Action
          {...children}
          icon={disabledBack ? "" : "keyboard-backspace"}
          accessibilityLabel={""}
          color={Colors.red500}
          style={styles.searchIcon}
          size={20}
          disabled={disabledBack !== undefined}
          onPress={() => {
            navigation && navigation.pop();
            stackScreen && stackScreen.goBack();
            // route.name === "BankDetails" && stackScreen.navigate("Wallet");
            Reset();
          }}
        />
      </View>
      <View>
        <Text
          style={[
            {
              marginLeft: -40,
              textAlign: "center",
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
      </View>
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
    zIndex: 100,
  },
  title: {
    paddingRight: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
