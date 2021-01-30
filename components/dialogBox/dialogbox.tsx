import * as React from "react";
import { Overlay, Text } from "react-native-elements";
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking,
  View,
} from "react-native";
import { useTheme } from "react-native-paper";
import { color } from "react-native-reanimated";

// import Modal from "modal-react-native-web";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Dialogbox = (props: any) => {
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <View>
      <Text
        style={{
          fontFamily: fontFamily,
          fontSize: SmallFont,
          fontWeight: "bold",
          color: colors.text,
          marginTop: 0,
        }}
        onPress={() => setIsVisible(!isVisible)}
      >
        {props.title}
      </Text>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      >
        <Text>{props.title}</Text>
      </Overlay>
    </View>
  );
};
interface phoneCall {
  title: string;
  text: string;
  phoneNo: string;
  text2?: string;
}

const PhoneCall = (props: phoneCall) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();

  return (
    <View style={{ backfaceVisibility: "visible" }}>
      <Text
        style={{ color: colors.primary }}
        onPress={() => setIsVisible(!isVisible)}
      >
        {props.title}
      </Text>
      <Overlay
        isVisible={isVisible}
        //   ModalComponent={Modal}
        style={{ opacity: 1, width: windowHeight, marginTop: 0 }}
        onBackdropPress={() => setIsVisible(!isVisible)}
      >
        <>
          <View
            style={{
              paddingTop: 10,
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 10,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                textAlignVertical: "center",
              }}
            >
              {props.text}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                textAlignVertical: "center",
              }}
            >
              {props.text2}
            </Text>
          </View>
          <TouchableOpacity
            style={[{ backgroundColor: colors.primary }, style.button]}
            onPress={() => Linking.openURL(`tel:${props.phoneNo}`)}
          >
            <Text style={{ color: colors.accent, textAlign: "center" }}>
              {props.phoneNo}
            </Text>
          </TouchableOpacity>
        </>
      </Overlay>
    </View>
  );
};
export { Dialogbox, PhoneCall };

const style = StyleSheet.create({
  title: {
    textTransform: "uppercase",
  },
  button: {
    borderRadius: 10,
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
