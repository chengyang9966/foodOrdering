import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView as ScrollViews,
} from "react-native";
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
  const { primary, accent, text, cardBody, background } = colors;
  let StoreItem = EachRestaurant.filter((w) => Number(w.storeId) === id);
  let StoreFoodItem = EachRestaurant.filter((w) => Number(w.storeId) === id)[0]
    .TypesOfFood;
  return (
    <SafeAreaView style={[{ backgroundColor: background }, styles.container]}>
      <Header title={storeName} navigation={navigation} />
      <ScrollViews>
        <View
          style={[
            { backgroundColor: background, marginBottom: 20 },
            // styles.container,
          ]}
        >
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
          </View>
          {EachRestaurant.map((w) => {
            if (Number(w.storeId) === Number(id)) {
              return (
                <>
                  <ItemContainer TypesOfFood={w.TypesOfFood} />
                </>
              );
            }
          })}
        </View>
      </ScrollViews>
    </SafeAreaView>
  );
};
export default EachItemInfo;

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
    flex: 10001,
  },
});
