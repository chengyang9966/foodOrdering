import Header from "../../../components/Header/Header";
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { SubCardContainer } from "../../../components/Card Container/OthersCard";
import AccountContext from "../../../State/Account/AccountContext";
import { BasicButton } from "../../../components/button/Button";
import { ScrollView } from "react-native-gesture-handler";
const BankDetails = (props: any) => {
  const { colors, bodyFont, title } = useTheme();
  const { navigation } = props;
  const accountContext = useContext(AccountContext);
  const { Name, Email, PhoneNo, PaymentDetails } = accountContext;

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Bank" stackScreen={navigation} />
      <ScrollView style={[styles.center]}>
        {PaymentDetails.BankDetails.map((w, i) => {
          return (
            <View key={`${w},${i}`}>
              <SubCardContainer
                Title={w.BankName}
                wallet
                Primary={w.Primary}
                subTitle={w.BankNumber}
              />
            </View>
          );
        })}

        {/* <SubCardContainer Title="Voucher" wallet /> */}
        <View style={{ marginTop: 40 }}>
          <BasicButton title="Add Bank" uppercase large />
        </View>
      </ScrollView>
      {/* <Text>This is the Account screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    marginTop: 65,

    marginLeft: 15,
    marginRight: 15,
  },
});

export default BankDetails;
