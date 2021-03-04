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
  const { PaymentDetails } = accountContext;
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
              Name: PaymentDetails.BankDetails[0].BankName,
              Number: PaymentDetails.BankDetails[0].BankNumber,
            }}
          />
          <PaymentContainer
            StoreName={storeName}
            id={id}
            Name="Reward"
            navigation={navigation}
            PaymentDetails={{
              Name: PaymentDetails.Rewards.RewardName,
              Number: PaymentDetails.Rewards.RewardNumber,
            }}
          />
          <PaymentContainer
            StoreName={storeName}
            id={id}
            Name="nak Tolong"
            navigation={navigation}
            SubTitle={"We Plant Tress when you opt cutleries"}
          />
        </View>
        <ScrollViewContainer list={Payment} upperCase />
      </ScrollView>
      <FooterButton title="Pay Now" amount={Amount} uppercase />
    </>
  );
};

export default Payment;
