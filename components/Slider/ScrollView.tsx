import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import AccountContext from "../../State/Account/AccountContext";
import LocationContext from "../../State/Location/LocationContext";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";

export interface ScrollViewProps {
  styles?: StyleProp<ViewStyle>;
  title?: string;
  upperCase?: boolean;
  list: Array<any>;
}

const ScrollViewContainer = (props: ScrollViewProps) => {
  const { list, styles, title, upperCase } = props;
  console.log(
    "🚀 ~ file: ScrollView.tsx ~ line 24 ~ ScrollViewContainer ~ title",
    title
  );

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [backGround, SetBackGround] = useState("");
  const [TextItem, SetText] = useState("");
  const locationContext = useContext(LocationContext);
  const accountContext = useContext(AccountContext);
  const restaurantContext = useContext(RestaurantContext);
  const { SelectItem } = locationContext;
  const { FilterItem } = restaurantContext;
  const { SelectCheckOutMethod, SelectedCheckOut } = accountContext;
  const changeColour = (id: any) => {
    if (backGround === id) {
      SetBackGround("");
    } else {
      SetBackGround(id);
    }
  };
  const Run = (id: any, text: any) => {
    changeColour(id);
    SelectProps(text, id);
  };
  useEffect(() => {
    SelectedCheckOut === "" &&
      title === "CheckOut" &&
      Run(list[0].id, list[0].itemName);
  }, [SelectedCheckOut, list[0], title]);
  const SelectProps = (text: string, id: any) => {
    SetText(id);
    title === "CheckOut"
      ? SelectCheckOutMethod(text)
      : list[0].id === "3111"
      ? TextItem === id
        ? SelectItem(text)
        : SelectItem("")
      : title === "IndividualRestaurant"
      ? TextItem === id
        ? FilterItem(text)
        : FilterItem("")
      : "";
  };

  return (
    <ScrollView horizontal={true}>
      <View
        style={[
          upperCase && { width: windowWidth },
          {
            marginTop: 50,
            // marginBottom: 21,
          },
          styles,
        ]}
      >
        <Text>
          {list.map((k, i) => (
            <View
              key={`${k}${i}`}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                key={i}
                onPress={() => {
                  changeColour(k.id);
                  SelectProps(k.itemName, k.id);
                }}
                style={[
                  backGround === k.id ? style.Press : style.item,
                  // { textTransform: upperCase ? "uppercase" : "none" },
                  upperCase && {
                    textTransform: "uppercase",
                    width: windowWidth / 2,
                    textAlign: "center",
                  },
                ]}
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
  },
  item: {
    padding: 10,
    paddingTop: 12,
    alignItems: "center",
    fontSize: 23,
    borderColor: "black",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
  },
  Press: {
    padding: 10,
    paddingTop: 12,
    alignItems: "center",
    fontSize: 23,
    borderColor: "black",
    backgroundColor: "#8B0000",
    borderWidth: 1,
  },
});
