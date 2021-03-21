import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, Linking } from "react-native";
import { useTheme } from "react-native-paper";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AccountContext from "../../State/Account/AccountContext";

import Spinner from "../../components/Spinner/Spinner";
import { PaymentStatus as PaymentALL } from "../../types";
const AfterPayment = (props: any) => {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const accountContext = useContext(AccountContext);

  const { PaymentStatus, SetPaymentStatus, PastOrder } = accountContext;
  console.log(
    "🚀 ~ file: AfterPayment.tsx ~ line 15 ~ AfterPayment ~ PastOrder",
    PastOrder
  );
  const { Title, Progress, id } = route.params;

  useEffect(() => {
    PaymentStatus === "Pending" &&
      setTimeout(() => {
        SetPaymentStatus({
          PaymentStatus: PaymentALL.Success,
        }),
          navigation.navigate("OrderPage", {
            Title: "Payment",
            Progress: true,
            id,
          });
      }, 5000);
  }, [PaymentStatus]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
      }}
    >
      {PaymentStatus === "Pending" ? (
        <Spinner
          title={`${Title === "" ? "Nak Order" : Title} ${
            Title !== "" ? PaymentStatus : ""
          }`}
        />
      ) : (
        <Text
          style={[
            {
              color: colors.primary,
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
              textTransform: "uppercase",
            },
          ]}
        >
          {`${Title === "" ? "Nak Order" : Title} ${
            Title !== "" ? PaymentStatus : ""
          }`}
        </Text>
      )}
      {/* {Progress !== undefined && Progress === true && (
        <>
          <ProgressBar
            Title={PaymentStatus}
            Percentage={PaymentStatus === "Success" ? 100 : 50}
          />
        </>
      )} */}
    </View>
  );
};

export default AfterPayment;
