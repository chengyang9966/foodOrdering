import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useTheme } from "react-native-paper";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AccountContext from "../../State/Account/AccountContext";
import Spinner from "../../components/Spinner/Spinner";
import { WazeButton } from "../../components/button/Button";
const OrderPage = (props: any) => {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const accountContext = useContext(AccountContext);
  const { PaymentStatus, SetPaymentStatus } = accountContext;
  const { Title, Progress } = route.params;

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
      {Progress !== undefined && Progress === true && (
        <>
          <ProgressBar
            Title={PaymentStatus}
            Percentage={
              PaymentStatus === "Success"
                ? 100
                : PaymentStatus === "Order Pending"
                ? 20
                : 50
            }
          />
          <WazeButton sign={"Open Waze"} />
        </>
      )}
    </View>
  );
};

export default OrderPage;
