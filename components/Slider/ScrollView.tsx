import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import LocationContext from "../../State/Location/LocationContext";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";

export interface ScrollViewProps {
  list: Array<any>;
}

const ScrollViewContainer = (props: ScrollViewProps) => {
  const { list } = props;

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [backGround, SetBackGround] = useState("");
  const locationContext = useContext(LocationContext);
  const restaurantContext = useContext(RestaurantContext);
  const { SelectItem } = locationContext;
  const { FilterItem } = restaurantContext;
  const changeColour = (id: any) => {
    if (backGround === id) {
      SetBackGround("");
    } else {
      SetBackGround(id);
    }
  };

  const SelectProps = (text: string) => {
    SelectItem(text);
    FilterItem(text);
  };
  return (
    <ScrollView horizontal={true}>
      <View
        style={[
          {
            // width: windowWidth * 2,
            marginTop: 52,
          },
          style.container,
        ]}
      >
        <Text>
          {list.map((k, i) => (
            <View key={i}>
              {console.log(k.itemName)}
              <Text
                key={i}
                onPress={() => {
                  changeColour(k.id);
                  SelectProps(k.itemName);
                }}
                style={[backGround === k.id ? style.Press : style.item]}
              >
                {k.itemName}
              </Text>
            </View>
          ))}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ScrollViewContainer;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,

    // marginTop: 52,
    // paddingTop: 30,
    paddingBottom: 30,
  },
  item: {
    padding: 10,
    paddingTop: 12,
    alignItems: "center",
    fontSize: 23,
    borderColor: "black",
    backgroundColor: "#d3d3d3",
    borderWidth: 0.5,
  },
  Press: {
    padding: 10,
    paddingTop: 12,
    alignItems: "center",
    fontSize: 23,
    borderColor: "black",
    backgroundColor: "#8B0000",
    borderWidth: 0.5,
  },
});
