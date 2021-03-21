import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useTheme } from "react-native-paper";
import PageSize from "../../Helper/PageSize";
interface Spinner {
  title?: string;
}
const Spinner = (props: Spinner) => {
  const { colors, title, fontFamily } = useTheme();
  const { windowHeight, windowWidth } = PageSize();
  return (
    <View style={[{ backgroundColor: colors.background }, styles.container]}>
      <ActivityIndicator size="large" color={colors.accent} />

      <Text
        style={[
          {
            textAlign: "center",
            fontFamily: fontFamily,
            fontSize: title,
            fontWeight: "bold",
            color: colors.primary,
            textTransform: "uppercase",
          },
          styles.horizontal,
        ]}
      >
        {props.title || "Nak Order"}
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
