import React, { useContext } from "react";
import { Dimensions, View, Text } from "react-native";
import Header from "../../components/Header/Header";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EachFoodItem = (props: any) => {
  const restaurantContext = useContext(RestaurantContext);
  const { navigation, route } = props;
  const { storeName, id } = route.params;
  const { SelectedItem } = restaurantContext;
  console.log(
    "🚀 ~ file: EachFoodItem.tsx ~ line 14 ~ EachFoodItem ~ SelectedItem",
    SelectedItem
  );
  return (
    <View style={{ height: windowHeight, width: windowWidth }}>
      <Header title={storeName} navigation={navigation} />
      <Text>{SelectedItem?.itemName}</Text>
    </View>
  );
};

export default EachFoodItem;
