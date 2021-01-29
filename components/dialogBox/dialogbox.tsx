import * as React from "react";
import { Overlay, Text } from "react-native-elements";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";

// import Modal from "modal-react-native-web";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Dialogbox = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      <Overlay isVisible={isVisible}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
      {isVisible && (
        <Overlay isVisible>
          <Text>Hello from Overlay!</Text>
        </Overlay>
      )}
      <Overlay isVisible={isVisible}>
        <Text>Hello from Overlay!</Text>
      </Overlay>

      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </>
  );
};

const OverlayExample = (props: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <>
      <Text onPress={() => setIsVisible(!isVisible)}>{props.title}</Text>
      <Overlay
        isVisible={isVisible}
        //   ModalComponent={Modal}
        style={{ opacity: 1, width: windowHeight, marginTop: 0 }}
        onBackdropPress={() => setIsVisible(!isVisible)}
      >
        <Text>Some content</Text>
        {/* 
        <Text onPress={() => setIsVisible(!isVisible)} style={style.title}>
          {props.title}
        </Text> */}
        <Text>
          iF YOU HAVE A FOOD ALLERGY OR INTOLERANCE (OR SOMEONE YOU ARE ORDERING
          FOR HAS), PHONE THE RESTAURANT ON
        </Text>
      </Overlay>
    </>
  );
};
export { Dialogbox, OverlayExample };

const style = StyleSheet.create({
  title: {
    textTransform: "uppercase",
  },
});
