import React, { useState, useEffect, useContext } from "react";
import { BackHandler, StyleSheet } from "react-native";
import { View, Text, TextInput, Image, Dimensions } from "react-native";
import LocationContext from "../../State/Location/LocationContext";
import { Colors, IconButton, Appbar } from "react-native-paper";
import PageSize from "../../Helper/PageSize";
export interface SearchBarProps {
  placeholder?: string;
  multiline?: boolean;
  maxLength?: number | undefined;
  numberOfLines?: number;
  navigation?: any;
  routeName?: string;
}

const SearchBar = (props: SearchBarProps) => {
  const {
    placeholder,
    multiline,
    maxLength,
    numberOfLines,
    navigation,
    routeName,
  } = props;
  const { windowHeight, windowWidth } = PageSize();
  const locationContext = useContext(LocationContext);
  const { SearchLocation, Reset } = locationContext;
  const [text, SetText] = useState("");

  const [focus, SetFocus] = useState({
    backgroundColor: "#E8E8E8",
  });
  const [height, SetHeight] = useState({
    height: 18,
  });

  useEffect(() => {
    numberOfLines !== undefined &&
      SetHeight({
        height: numberOfLines,
      });
  }, [numberOfLines]);

  const onFocus = () => {
    SetFocus({
      backgroundColor: "#d3d3d3",
    });
    routeName === "Home" && navigation.navigate("Item");
  };
  const onBlur = () => {
    SetFocus({
      backgroundColor: "#E8E8E8",
    });
  };

  const Styles = StyleSheet.create({
    container: {
      zIndex: 10000,
      position: "absolute",
      top: 0,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: focus.backgroundColor,

      height: 40,
    },
    navbar: {
      // flex: 2,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      marginLeft: 10,
      marginRight: 5,
      width: (windowWidth * 90) / 100,
      backgroundColor: focus.backgroundColor,
    },
    searchIcon: {
      padding: 10,
    },
  });
  return (
    <View style={[Styles.container]}>
      <Appbar.Action
        icon="keyboard-backspace"
        color={Colors.red500}
        style={Styles.searchIcon}
        size={20}
        onPress={() => {
          navigation.pop();
          Reset();
        }}
      />

      {/* <Image source={{uri:''}}/> */}
      <TextInput
        // ref={(input) => input && routeName !== "Home" && input?.focus()}
        placeholder={placeholder}
        style={Styles.navbar}
        multiline={multiline}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        // value={SearchFunction}
        inlineImageLeft="search_icon"
        onChangeText={(text) => {
          SearchLocation(text);
        }}
      />
    </View>
  );
};

export default SearchBar;
