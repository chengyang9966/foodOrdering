import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useTheme } from "react-native-paper";
import { CalcWidth } from "../../Helper/Function/Animation";
const ProgressBar = (props: ProgressBarProps) => {
  const { Title, Percentage } = props;
  const Width = CalcWidth(Title, Percentage);
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();

  return (
    <View style={Styles.Header}>
      <View style={Styles.Outer}>
        <View
          style={
            (Styles.absoluteFill,
            {
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
            })
          }
        >
          <Text
            style={{
              margin: 10,
              fontWeight: "bold",
              fontSize: bodyFont,
              textTransform: "uppercase",
              color: colors.cardBody,
              // textAlign: "center",
            }}
          >
            {Width.string}
          </Text>
        </View>
        <Animated.View
          style={[
            Styles.absoluteFill,
            {
              width: `${Width.value}%`,
              backgroundColor: colors.primary,
              // opacity: fadeAnim.value,
            },
          ]}
        />
      </View>
    </View>
  );
};
interface ProgressBarProps {
  Title: string;
  Percentage: number;
}

export default ProgressBar;

const Styles = StyleSheet.create({
  Header: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  Outer: {
    flexDirection: "row",
    borderColor: "red",
    borderRadius: 5,
    height: 40,
    backgroundColor: "black",
    // padding: 10,
  },
  absoluteFill: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
