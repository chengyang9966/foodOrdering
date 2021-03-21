import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, Linking } from "react-native";
import { useTheme } from "react-native-paper";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AccountContext from "../../State/Account/AccountContext";
import { PaymentStatus as PaymentALL } from "../../types";
import { WazeButton } from "../../components/button/Button";
import Waze from "../../Helper/Function/AddressForWaze";
const OrderPage = (props: any) => {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const accountContext = useContext(AccountContext);
  const { PaymentStatus, SetPaymentStatus, PastOrder } = accountContext;

  const { Title, Progress, id } = route.params;
  let Address: string = Waze(id).Address;

  const wazeOpen = async () => {
    let url = `https://www.waze.com/ul?q=${Address}&navigate=yes&z=15`;
    let NoApp = `market://details?id=com.waze`;
    await Linking.canOpenURL(url)
      .then(() => {
        Linking.openURL(url);
      })
      .catch(() => {
        Linking.openURL(NoApp);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
      }}
    >
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

      {Progress !== undefined && Progress === true && (
        <>
          <ProgressBar
            Title={PaymentStatus}
            Percentage={
              PaymentStatus === PaymentALL.Success
                ? 100
                : PaymentStatus === PaymentALL.Pending
                ? 20
                : 50
            }
          />
          <WazeButton Title={"Open Waze"} onPress={() => wazeOpen()} />
        </>
      )}
    </View>
  );
};

export default OrderPage;
