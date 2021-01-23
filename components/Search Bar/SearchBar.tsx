import React, { useState, useEffect, useContext } from "react";
import { BackHandler, StyleSheet } from "react-native";
import { View, Text, TextInput, Image } from "react-native";
import LocationContext from "../../State/Location/LocationContext";
import { Colors, IconButton, Appbar } from "react-native-paper";

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

  const styles = StyleSheet.create({
    container: {
      zIndex: 10000,
      position: "fixed",
      top: 0,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: focus.backgroundColor,
      width: 400,
      height: 40,
    },
    navbar: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      marginLeft: 10,
      marginRight: 5,
      backgroundColor: focus.backgroundColor,
    },
    searchIcon: {
      padding: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Appbar.Action
        icon="keyboard-backspace"
        color={Colors.red500}
        style={styles.searchIcon}
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
        style={styles.navbar}
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
