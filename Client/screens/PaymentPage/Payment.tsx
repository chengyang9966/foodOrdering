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
import Spinner from "../../components/Spinner/Spinner";
import { PaymentContainer } from "../../components/Card Container/OthersCard";
import { FooterButton } from "../../components/button/Button";
import ScrollViewContext from "../../State/ScrollView/ScrollViewContext";
import AccountContext from "../../State/Account/AccountContext";
import ScrollViewContainer from "../../components/Slider/ScrollView";

const Payment = (props: any) => {
  const { navigation, route } = props;
  const { storeName, id, Amount } = route.params;
  const { colors } = useTheme();
  const scrollViewContext = useContext(ScrollViewContext);
  const accountContext = useContext(AccountContext);
  const { Payment } = scrollViewContext;
  const { PaymentDetails, SelectCutleries, SetPaymentStatus } = accountContext;
  const PrimaryPayment = PaymentDetails.BankDetails.find(
    (w) => w.Primary === true
  );
  const RewardItem = PaymentDetails.Rewards.find((w) => w.Primary === true);
  return (
    <>
      <Header navigation={navigation} title="Payment" />
      <ScrollView>
        <View
          style={[
            {
              backgroundColor: colors.background,
              marginTop: 60,
            },
          ]}
        >
          <PaymentContainer
            StoreName={storeName}
            id={id}
            Name="Bank"
            navigation={navigation}
            PaymentDetails={{
              Name: PrimaryPayment?.BankName || "",
              Number: PrimaryPayment?.BankNumber || "1212",
            }}
            onPress={() =>
              navigation.navigate("BankDetails", {
                Title: "Bank",
              })
            }
          />
          <PaymentContainer
            StoreName={storeName}
            id={id}
            Name="Reward"
            navigation={navigation}
            PaymentDetails={{
              Name: RewardItem?.RewardName || "",
              Number: RewardItem?.RewardNumber || "1231233",
            }}
            onPress={() =>
              navigation.navigate("BankDetails", {
                Title: "Rewards",
              })
            }
          />
        </View>
        <View>
          <ScrollViewContainer list={Payment} upperCase title="Cult" Empty />
          {SelectCutleries && (
            <PaymentContainer
              StoreName={storeName}
              id={id}
              Name="nak Tolong"
              navigation={navigation}
              SubTitle={"We Plant Tress when you opt cutleries"}
            />
          )}
        </View>
      </ScrollView>
      <FooterButton
        title="Pay Now"
        amount={Amount}
        uppercase
        onClick={() => {
          SetPaymentStatus(`Success`);
          navigation.navigate("AfterPayment", {
            Title: "Payment",
            Progress: true,
            id,
          });
        }}
      />
    </>
  );
};

export default Payment;
