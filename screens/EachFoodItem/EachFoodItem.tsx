import React, { useContext, useState, useEffect } from "react";
import { Dimensions, View, Text, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";
import AccountContext from "../../State/Account/AccountContext";
import { BasicButton, FooterButton } from "../../components/button/Button";
import { useTheme } from "react-native-paper";
import { AmtStr } from "../../Function/AmountFunction";
import { ItemButton } from "../../components/button/Button";
import Spinner from "../../components/Spinner/Spinner";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EachFoodItem = (props: any) => {
  const restaurantContext = useContext(RestaurantContext);
  const accountContext = useContext(AccountContext);
  const { SumAmount } = accountContext;
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  const { navigation, route } = props;
  const { storeName, id, EachItem, description } = route.params;

  const [state, setState] = useState({
    Allergy: "",
    Description: "",
    Price: 0,
    Quantity: 0,
    TotalAmount: 0,
    Max: 0,
    id: "",
    itemName: "",
  });

  useEffect(() => {
    EachItem !== null || EachItem !== undefined;
    setState({
      Allergy: EachItem?.Allergy,
      Description: EachItem?.Description,
      Price: EachItem.Price,
      Quantity: 1,
      TotalAmount: EachItem.Price,
      Max: EachItem.Quantity,
      id: EachItem.id,
      itemName: EachItem.itemName,
    });
  }, [EachItem]);

  const AddFunction = () => {
    const { Max, Quantity, Price } = state;
    var Q = Quantity;
    var M = Max;
    Q++;

    if (Q === M || Q > M) {
      setState({
        ...state,
        Quantity: M,
        TotalAmount: Price * M,
      });
    } else {
      setState({
        ...state,
        Quantity: Q,
        TotalAmount: Price * Q,
      });
    }
  };
  const MinusFunction = () => {
    const { Max, Quantity, Price } = state;
    var Q = Quantity;
    var M = Max;
    Q--;
    if (Quantity === 0 || Quantity < 0 || Quantity === 1) {
      setState({
        ...state,
        Quantity: 1,
        TotalAmount: Price * 1,
      });
    } else if (Q === M) {
      setState({
        ...state,
        Quantity: M,
        TotalAmount: Price * M,
      });
    } else {
      setState({
        ...state,
        Quantity: Q,
        TotalAmount: Price * Q,
      });
    }
  };

  const ClickItem = () => {
    SumAmount(state);
    console.log("hi");
    navigation.navigate("EachItem", {
      id: id,
      storeName: storeName,
    });
  };

  return EachItem === null || EachItem === undefined ? (
    <Spinner title="Nak Order" />
  ) : (
    <>
      <Header title={storeName} navigation={navigation} />
      <ScrollView
        style={{
          height: windowHeight,
          width: windowWidth,
          marginTop: 60,
        }}
      >
        <View style={{ height: windowHeight / 3 }}></View>
        <View
          style={{
            paddingTop: 15,
            paddingLeft: 20,
            paddingRight: 20,
            height: windowHeight / 2,

            backgroundColor: colors.cardBackground,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: bodyFont, fontWeight: "bold" }}>
              {state.itemName}
              {/* <View style={{ width: windowWidth / 2 }}></View> */}
            </Text>
            <Text style={{ fontSize: bodyFont, fontWeight: "bold" }}>
              {AmtStr(state.Price)}
            </Text>
          </View>

          {description &&
            (state?.Description !== "" || state?.Description !== null) && (
              <View style={{ paddingTop: 20 }}>
                <Text style={{ fontSize: bodyFont, fontWeight: "bold" }}>
                  Description
                </Text>
                <Text
                  style={{
                    fontSize: SmallFont,
                    fontWeight: "bold",
                    paddingTop: 10,
                  }}
                >
                  {state?.Description}
                </Text>
              </View>
            )}
        </View>
      </ScrollView>
      <View
        style={{ paddingBottom: 10, backgroundColor: colors.cardBackground }}
      >
        <View
          style={{
            width: windowWidth,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <View>
            <ItemButton sign="-" onPress={MinusFunction} />
          </View>
          <Text style={{ marginLeft: 10, marginRight: 10 }}>
            {state.Quantity}
          </Text>
          <View>
            <ItemButton sign="+" onPress={AddFunction} />
          </View>
        </View>
        <BasicButton title="Order" uppercase Click={ClickItem} />
      </View>
    </>
  );
};

export default EachFoodItem;
