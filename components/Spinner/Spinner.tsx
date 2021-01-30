import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useTheme } from "react-native-paper";
const Spinner = (props: any) => {
  const { colors, title, fontFamily } = useTheme();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={[{ backgroundColor: colors.background }, styles.container]}>
      <ActivityIndicator size="large" color={colors.accent} />

      <Text
        style={[
          {
            paddingLeft: windowWidth / 3,
            fontFamily: fontFamily,
            fontSize: title,
            fontWeight: "bold",
            color: colors.primary,
            textTransform: "uppercase",
          },
          styles.horizontal,
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};
export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    paddingTop: 15,
    justifyContent: "center",
  },
});
