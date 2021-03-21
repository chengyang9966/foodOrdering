import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Header from "../../components/Header/Header";
import { useTheme } from "react-native-paper";
import moment from "moment";
import {
  CheckOutContainer,
  NotesContainer,
} from "../../components/Card Container/OthersCard";
import Spinner from "../../components/Spinner/Spinner";
import {
  add_minutes,
  totalTimeNeeded,
} from "../../Helper/Function/TimeFunction";
import { FooterButton } from "../../components/button/Button";
import AccountContext from "../../State/Account/AccountContext";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";
import ScrollViewContext from "../../State/ScrollView/ScrollViewContext";
import ScrollViewContainer from "../../components/Slider/ScrollView";
import PageSize from "../../Helper/PageSize";

const Checkout = (props: any) => {
  const { windowHeight, windowWidth } = PageSize();
  const { navigation, route } = props;
  const { storeName, id } = route.params;
  const { colors } = useTheme();
  const [Amount, TotalAmount] = useState(0);
  const [subTotal, SetsubTotal] = useState(0);
  const [DeliveryFees, setDeliveryFees] = useState(0);
  const [Title, SetTiTle] = useState("");
  const accountContext = useContext(AccountContext);
  const restaurantContext = useContext(RestaurantContext);
  const scrollViewContext = useContext(ScrollViewContext);
  const { Item, SelectedCheckOut } = accountContext;
  const { CheckOut } = scrollViewContext;
  const { EachRestaurant } = restaurantContext;

  useEffect(() => {
    var AMT = 0;
    var SubTotal = 0;
    var Delivery = 0;
    var today = moment();

    Item.length > 0 &&
      Item.map((w) => {
        AMT = AMT + w.TotalAmount;
        SubTotal = SubTotal + w.TotalAmount;
      });
    if (SelectedCheckOut === "Delivery") {
      var Selected: any = {};
      EachRestaurant.map((w) => {
        if (Number(w.storeId) === Number(id)) {
          Object.assign(Selected, w);
        }
      });
      Selected &&
        ((AMT = AMT + Selected.Delivery),
        (Delivery = Delivery + Selected.Delivery));
    }
    setDeliveryFees(Delivery);
    TotalAmount(AMT);
    SetsubTotal(SubTotal);
    SetTiTle(
      `Time : ${moment(
        add_minutes(today, totalTimeNeeded(Item.length, "first"))
      ).format("HH:mm")} - ${moment(
        add_minutes(today, totalTimeNeeded(Item.length))
      ).format("HH:mm")} (${totalTimeNeeded(Item.length)} mins)`
    );
  }, [Item, SelectedCheckOut]);

  return (
    <>
      <SafeAreaView style={[{ backgroundColor: colors.background }]}>
        {/* <FooterButton title="CheckOut" amount={10} /> */}
        <Header navigation={navigation} title={Title} />
        <ScrollViewContainer list={CheckOut} title="CheckOut" />
        <ScrollView>
          <View
            style={[
              {
                backgroundColor: colors.background,
                marginTop: -1,
              },
            ]}
          >
            {/* <Text>HII</Text> */}
            <CheckOutContainer
              Amount={subTotal}
              Delivery={DeliveryFees}
              StoreName={storeName}
              id={id}
              Name="ORDERS"
              navigation={navigation}
              TypesOfFood={Item}
            />
            <NotesContainer
              StoreName={storeName}
              id={id}
              Name="Notes"
              navigation={navigation}
              TypesOfFood={Item}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <FooterButton
        title="CheckOut"
        amount={Amount}
        uppercase
        onClick={() =>
          navigation.navigate("Payment", {
            id,
            storeName,
            Amount,
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // overflow: "scroll",
    flex: 1,
  },
  View: {
    marginTop: 20,
    marginBottom: 20,
  },
  // CheckOutBox: { position: "relative", margin: 0, padding: 0 },
});

export default Checkout;
