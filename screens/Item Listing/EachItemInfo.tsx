import React, { useContext, useEffect, useState } from "react";
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
import AccountContext from "../../State/Account/AccountContext";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";
import {
  InfoCardContainer,
  AllergyAdvice,
  AddressContainer,
  ItemContainer,
} from "../../components/Card Container/OthersCard";
import { SelectDepartment } from "../../Function/Searchfunction";
import Spinner from "../../components/Spinner/Spinner";
import { FooterButton } from "../../components/button/Button";

const EachItemInfo = (props: any) => {
  const { navigation, route } = props;
  const { storeName, id } = route.params;
  const { colors } = useTheme();
  const locationContext = useContext(LocationContext);
  const accountContext = useContext(AccountContext);
  const restaurantContext = useContext(RestaurantContext);
  const { EachRestaurant, Tab, loading, Ready } = restaurantContext;
  const { SelectedLocation, list } = locationContext;
  const { Item } = accountContext;
  const [Amount, TotalAmount] = useState(0);
  useEffect(() => {
    var AMT = 0;
    Item.length !== 0 &&
      Item.map((w) => {
        console.log(w.itemName, w.TotalAmount);
        AMT = AMT + w.TotalAmount;
      });
    TotalAmount(AMT);
  }, [Item]);
  // console.log(
  //   "🚀 ~ file: EachItemInfo.tsx ~ line 35 ~ EachItemInfo ~ Item",
  //   Item
  // );
  const { primary, accent, text, cardBody, background } = colors;

  useEffect(() => {
    EachRestaurant.length > 0 && Ready();
  }, [EachRestaurant]);

  let StoreItem = EachRestaurant.filter((w) => Number(w.storeId) === id);
  let StoreFoodItem: any[] = [];
  EachRestaurant.filter((w) => Number(w.storeId) === id)[0].TypesOfFood.map(
    (k) =>
      StoreFoodItem.push({
        key: 0,
        itemName: k.itemName,
        id: k.id,
      })
  );
  StoreFoodItem.splice(0, 0, { itemName: "Info", id: "1212311123" });
  return loading ? (
    <Spinner title="Nak Order" />
  ) : (
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
                    <AllergyAdvice
                      key={x?.id + 1}
                      contact={StoreItem[0].Contact}
                    />
                    <AddressContainer
                      key={x?.id + 2}
                      contact={StoreItem[0].Contact}
                    />
                  </>
                );
              }
            })}
          </View>
          {EachRestaurant.map((w) => {
            if (Number(w.storeId) === Number(id)) {
              return (
                <>
                  <ItemContainer
                    key={id + 3}
                    StoreName={storeName}
                    id={id}
                    navigation={navigation}
                    TypesOfFood={SelectDepartment(Tab, w.TypesOfFood)}
                  />
                </>
              );
            }
          })}
        </View>
      </ScrollViews>
      {Item.length > 0 && (
        <FooterButton
          onClick={() =>
            navigation.navigate("CheckOut", {
              storeName,
              id,
            })
          }
          title="View Order"
          uppercase
          amount={Amount}
        />
      )}
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
