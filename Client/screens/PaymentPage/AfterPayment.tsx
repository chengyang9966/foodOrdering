import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, Linking } from "react-native";
import { useTheme } from "react-native-paper";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AccountContext from "../../State/Account/AccountContext";
import Spinner from "../../components/Spinner/Spinner";
import { WazeButton } from "../../components/button/Button";

import Waze from "../../Helper/Function/AddressForWaze";
const AfterPayment = (props: any) => {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const accountContext = useContext(AccountContext);

  const { PaymentStatus, SetPaymentStatus, Item } = accountContext;
  const { Title, Progress, id } = route.params;
  let Address: string = Waze(id).Address;

  const wazeOpen = () => {
    let url = `https://waze.com/ul?q=${Address}&navigate=yes`;
    // Linking.openURL(url);
    // }
    Linking.openURL(
      `https://play.google.com/store/apps/details?id=waze&launch=true`
    );
    // catch ( ActivityNotFoundException ex  )
    // {
    //   // If Waze is not installed, open it in Google Play:
    //   Intent intent = new Intent( Intent.ACTION_VIEW,
    //   startActivity(intent);
  };

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
            Percentage={PaymentStatus === "Success" ? 100 : 50}
          />
          <WazeButton Title={"Open Waze"} onPress={() => wazeOpen()} />
        </>
      )}
    </View>
  );
};

export default AfterPayment;
