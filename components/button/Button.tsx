import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useTheme } from "react-native-paper";
import { AmtStr } from "../../Helper/Function/AmountFunction";

interface footerButton {
  title: string;
  amount: string | number;
  uppercase?: boolean;
  onClick?: () => void;
}
interface BasicButton {
  title: string;
  uppercase?: boolean;
  Click?: () => void;
  large?: boolean;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BasicButton = (props: BasicButton) => {
  const { uppercase, large } = props;
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <View style={{ zIndex: 100 }}>
      <TouchableOpacity
        style={[
          { backgroundColor: colors.primary },
          large ? style.large : style.button,
        ]}
        onPress={props.Click}
      >
        <Text
          style={{
            color: colors.accent,
            textAlign: "center",
            fontSize: title,
            textTransform: uppercase ? "uppercase" : "none",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const FooterButton = (props: footerButton) => {
  const { uppercase, amount } = props;
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <View
      style={{
        zIndex: 100,
        position: "absolute",
        bottom: 0,
        width: windowWidth,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.2}
        style={[{ backgroundColor: colors.primary }, style.footerButton]}
        onPress={props.onClick}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: colors.accent,
              textAlign: "center",
              fontSize: title,
              textTransform: uppercase ? "uppercase" : "none",
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              color: colors.accent,
              textAlign: "center",
              fontSize: title,
              textTransform: uppercase ? "uppercase" : "none",
            }}
          >
            {AmtStr(props.amount)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

interface button {
  sign: string;
  onPress: () => void;
}

const ItemButton = (props: button) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: "white",
        width: 19,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: 19,
        paddingBottom: 1,
        borderRadius: 30,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 22, alignItems: "center" }}>
        {props.sign}
      </Text>
    </TouchableOpacity>
  );
};

export { BasicButton, FooterButton, ItemButton };

const style = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingTop: 10,
    marginLeft: 90,
    marginRight: 90,
    paddingBottom: 10,
  },
  large: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  footerButton: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
