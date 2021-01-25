import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";
import { useTheme } from "react-native-paper";
import ScrollView from "../../components/Slider/ScrollView";
import LocationContext from "../../State/Location/LocationContext";
import ScrollViewContext from "../../State/ScrollView/ScrollViewContext";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";
import {
  InfoCardContainer,
  AllergyAdvice,
  AddressContainer,
  ItemContainer,
} from "../../components/Card Container/OthersCard";

const EachItemInfo = (props: any) => {
  const { navigation, route } = props;
  const { storeName, id } = route.params;
  const { colors } = useTheme();
  const scrollViewContext = useContext(ScrollViewContext);
  const locationContext = useContext(LocationContext);
  const restaurantContext = useContext(RestaurantContext);
  //   const { EachRestaurant } = scrollViewContext;
  const { EachRestaurant } = restaurantContext;
  const { SelectedLocation, list, Tab, loading, Ready } = locationContext;
  const { primary, accent, text, background } = colors;
  let StoreItem = EachRestaurant.filter((w) => Number(w.storeId) === id);
  let StoreFoodItem = EachRestaurant.filter((w) => Number(w.storeId) === id)[0]
    .TypesOfFood;
  return (
    <View
      style={[
        { backgroundColor: background, maxHeight: "100%" },
        styles.container,
      ]}
    >
      <Header title={storeName} navigation={navigation} />
      <ScrollView list={StoreFoodItem} />
      <View style={{ backgroundColor: accent }}>
        {list.map((x, index) => {
          if (x.id === id) {
            return (
              <>
                <InfoCardContainer
                  key={index}
                  id={x?.id}
                  navigation={navigation}
                  halal={x?.halal}
                  cuisine={x?.cuisine}
                  distant={x?.distant}
                  time={x?.time}
                />
                <AllergyAdvice />
                <AddressContainer contact={StoreItem[0].Contact} />
              </>
            );
          }
        })}
        <ItemContainer />
      </View>
    </View>
  );
};
export default EachItemInfo;

const styles = StyleSheet.create({
  container: {},
});
