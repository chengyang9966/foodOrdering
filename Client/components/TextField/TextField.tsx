import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TextProps,
  TextInputProps,
  Switch,
  Dimensions,
} from "react-native";
import { CardNumberConvert } from "../../Helper/Function/AmountFunction";
import { useTheme } from "react-native-paper";
import { BasicButton, FooterButton } from "../button/Button";
const TextField = (props: TextFieldProps) => {
  const { colors, bodyFont, title, fontFamily } = useTheme();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  var Length = props.section?.Texts?.length;
  return (
    <>
      <View style={{ margin: 20, marginTop: 10, marginBottom: 0 }}>
        {props.section?.Texts?.map((w, i) => {
          return (
            <View key={`${w},${i}`} style={[i !== 0 && { marginTop: 20 }]}>
              {w.Title && (
                <Text
                  style={{
                    fontSize: bodyFont,
                    fontFamily,
                    color: colors.primary,
                    fontWeight: "bold",
                    marginBottom: 5,
                  }}
                >
                  {w.Title.Name}
                </Text>
              )}
              {w.InputField && (
                <TextInput
                  value={w.InputField.value}
                  placeholder={w.InputField?.placeholder}
                  onChangeText={w.InputField?.onChangeText}
                />
              )}
              {w.ToggleButton && (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: bodyFont,
                      fontFamily,
                      color: colors.primary,
                      fontWeight: "bold",
                    }}
                    children={w.ToggleButton.Title}
                  />

                  <Switch
                    // style={{ width: 40 }}
                    trackColor={{
                      false: "#767577",
                      true: colors.accent,
                    }}
                    thumbColor={
                      w.ToggleButton.value ? colors.primary : "#f4f3f4"
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={w.ToggleButton.onValueChange}
                    value={w.ToggleButton.value}
                  />
                </View>
              )}
            </View>
          );
        })}
      </View>
    </>
  );
};

interface TextFieldProps extends TextProps {
  section: {
    Texts?: {
      Title?: {
        Name?: string | undefined;
        children?: any;
      };
      InputField?: {
        prefix?: string;
        value: string | undefined;
        placeholder?: string | undefined;
        onChangeText?: ((text: string) => void) | undefined;
      };
      ToggleButton?: {
        Title: string;
        value: boolean;
        onValueChange?: ((value: boolean) => void) | undefined;
      };
    }[];
  };
}
export default TextField;
